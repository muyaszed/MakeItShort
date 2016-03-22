

get '/' do

	data = Url.all
	data.each do |item|
		puts "#{item.long} and #{item.short}"
	end
  erb :"static/index"


end

post '/urls' do
	
	@data = Url.create(long: params[:long_url])
	erb :"static/result"
end

# get '/:name' do
# 	 params[:name]
# end

get '/:short' do
	data = Url.find_by(short: params[:short])
	puts "You are going here #{data.long}"
	
	redirect data.long
 	
end



