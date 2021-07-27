class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :firstname
      t.string :lastname
      t.string :country
      t.string :city
      t.string :websiteURL
      t.string :instagram
      t.string :facebook
      t.string :twitter
      t.text :description

      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
