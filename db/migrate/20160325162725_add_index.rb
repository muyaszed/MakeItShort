class AddIndex < ActiveRecord::Migration
	def change
		add_index :urls, :short
	end
end
