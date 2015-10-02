# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence:true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :set_session_token
  has_many :dreams

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return if user.nil?
    if user.is_password?(password)
      return user
    else
       nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def set_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    save!
    return session_token
  end

end
