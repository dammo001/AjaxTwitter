require 'spec_helper'
require 'rails_helper'

feature "User authentication" do
  given(:user) { build(:user) }

  it "has a new user page" do
    visit new_user_url
    expect(page).to have_content("Sign Up")
  end

  feature "signing up a user" do

    it "shows username on the homepage after signup" do
      visit new_user_url
      fill_in "Username", with: user.username
      fill_in "Password", with: user.password
      click_button "Submit"

      expect(page).to have_content(user.username)
    end
  end

end

feature "logging in" do
  given(:user) { create(:user) }

  it "shows username on the homepage after login" do
    visit new_session_url
    fill_in "Username", with: user.username
    fill_in "Password", with: user.password
    click_button "Submit"

    expect(page).to have_content(user.username)
  end

end

feature "logging out" do
  given(:user) { create(:user) }

  it "begins with logged out state" do
    visit new_user_url
     expect(page).to_not have_content("Sign Out")
  end

  it "doesn't show username on the homepage after logout" do
    visit new_session_url
    fill_in "Username", with: user.username
    fill_in "Password", with: user.password
    click_button "Submit"
    click_button "Sign Out"

    visit root_url
    expect(page).to_not have_content(user.username)
  end

end
