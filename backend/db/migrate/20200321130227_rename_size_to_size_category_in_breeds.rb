class RenameSizeToSizeCategoryInBreeds < ActiveRecord::Migration[6.0]
  def change
    rename_column :breeds, :size, :size_category
  end
end
