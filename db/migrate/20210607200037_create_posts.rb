class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.integer :poster_id, null:false
      t.string :description
      t.timestamps
    end
    add_index :posts, [:title, :poster_id], unique: true
  end
end
