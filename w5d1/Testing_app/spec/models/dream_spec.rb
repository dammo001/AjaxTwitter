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

require 'rails_helper'

RSpec.describe Dream, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
end
