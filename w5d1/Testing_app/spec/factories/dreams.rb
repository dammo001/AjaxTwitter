# == Schema Information
#
# Table name: dreams
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  personal   :boolean          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :dream do
    title { Faker::App.name }
    body { Faker::Hacker.say_something_smart }
    personal false
    association :user, factory: :user
    factory :private_dream do
      personal true
    end
  end

end
