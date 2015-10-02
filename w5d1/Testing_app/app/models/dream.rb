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

class Dream < ActiveRecord::Base
  OPTIONS = [true, false]
  validates :title, :body, :user_id, presence:true
  validates :personal, inclusion: {in: OPTIONS}

  belongs_to :user

end
