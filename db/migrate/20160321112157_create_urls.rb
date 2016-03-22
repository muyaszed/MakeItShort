class CreateUrls < ActiveRecord::Migration
	def change

		create_table :urls do |field|
			field.string :long	
			field.string :short
			field.timestamps null: false
		end
	end
end
