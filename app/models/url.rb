class Url < ActiveRecord::Base
	before_create :shorten

	# This is Sinatra! Remember to create a migration!
	def shorten
	
		self.short = "#{rand(65..90).chr}#{rand(65..90).chr}#{rand(65..90).chr}"
		# self.new(long: params[:long_url], short: short_url)
	end
end
