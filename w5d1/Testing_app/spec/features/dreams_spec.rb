require 'spec_helper'
require 'rails_helper'
require 'byebug'

feature "Dreams" do
  feature "Create Dream" do
    given(:user) { create(:user) }
    given(:dream) { build(:dream, user_id: user.id) }

    it "Saves the dream to the database" do
      log_in_user(user)

      visit new_dream_url
      fill_in "Title", with: dream.title
      fill_in "Body", with: dream.body
      page.choose 'Public'

      click_button "Submit"
      expect(Dream.find_by(title: dream.title, body: dream.body)).to_not be_nil
      expect(dream.user_id).to be(user.id)
    end

    it "It validates the dreams params" do
      log_in_user(user)

      visit new_dream_url
      fill_in "Title", with: dream.title
      page.choose 'Private'

      click_button "Submit"
      expect(page).to have_content("Body can't be blank")
      expect(page).to have_content("Create A Dream")
    end

    it "redirects user to the new dreams page" do
      log_in_user(user)

      visit new_dream_url
      fill_in "Title", with: dream.title
      fill_in "Body", with: dream.body
      page.choose "Public"

      click_button "Submit"
      expect(page).to have_content(dream.title)
      expect(page).to have_content(dream.body)
    end

  end

  feature "Update Dream" do
    given(:dream) { create(:dream) }
    it "properly updates the dream" do
      this_dream = dream
      log_in_user(this_dream.user)

      visit edit_dream_url(this_dream.id)
      fill_in "Title", with: "New Title"
      click_button "Submit"
      # byebug
      # visit dream_url(this_dream.id)
      expect(page).to have_content("New Title")
    end

    it "validates dreams params" do
      log_in_user(dream.user)

      visit edit_dream_url(dream.id)
      fill_in "Title", with: ""
      click_button "Submit"

      expect(page).to have_content("Title can't be blank")
    end

    it "redirects user to the new dreams page" do
      log_in_user(dream.user)

      visit edit_dream_url(dream.id)
      fill_in "Title", with: "New Title"
      click_button "Submit"

      expect(current_path).to eq(dream_path(dream.id))
    end

  end

  feature "Destroy Dream" do
    given(:dream) { create(:dream) }
    it "properly destroys the dream" do

      visit dream_url(dream.id)
      id = dream.id
      click_button "Delete"

      expect(Dream.find_by_id(id)).to be_nil
    end
  end
end
