class Url < ActiveRecord::Base

	# def initialize
	# 	@count = 0
	# end
	
	before_create :shorten
	validates_format_of :long, :with => URI::regexp(["http", "https"])


	# This is Sinatra! Remember to create a migration!
	def shorten
		
		self.short = "#{rand(65..90).chr}#{rand(65..90).chr}#{rand(65..90).chr}"
		# self.new(long: params[:long_url], short: short_url)
	end

	def counter
		self.click_count += 1
		self.save
	end

	# def index
		
		
	# end
end

