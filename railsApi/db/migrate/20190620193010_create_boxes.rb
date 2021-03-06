class CreateBoxes < ActiveRecord::Migration[5.2]
  def change
    create_table :boxes do |t|
      t.string :name
      t.text :description
      t.string :size
      t.string :year
      t.string :imgUrl
      t.string :artist
      t.string :location

      t.timestamps
    end
  end
end
