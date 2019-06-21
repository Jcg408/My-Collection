class CreateBoxes < ActiveRecord::Migration[5.2]
  def change
    create_table :boxes do |t|
      t.string :name
      t.text :description
      t.string :year
      t.string :imgUrl

      t.timestamps
    end
  end
end
