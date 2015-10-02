class CreateDreams < ActiveRecord::Migration
  def change
    create_table :dreams do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :personal, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :dreams, :user_id
  end
end
