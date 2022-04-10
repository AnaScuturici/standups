class CreateStandups < ActiveRecord::Migration[7.0]
  def change
    create_table :standups do |t|
      t.text :goal
      t.boolean :is_completed
      t.integer :rating

      t.timestamps
    end
  end
end
