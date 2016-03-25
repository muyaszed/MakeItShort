

get '/' do

	# data = Url.all
	# data.each do |item|
	# 	puts "#{item.long} and #{item.short} , click:#{item.click_count}"
	# end
  erb :"static/index"


end

post '/urls' do
	
	p @data = Url.create(long: params[:long_url])
	
	puts @data.errors.messages[:long]

	erb :"static/index", :layout => (request.xhr? ? false : :layout)
end

# get '/:name' do
# 	 params[:name]
# end

get '/:short' do
	data = Url.find_by(short: params[:short])
	data.counter
	puts "You are going here #{data.long} and count #{data.click_count}"
	

	redirect data.long
 	
end


# get '/list' do
	
	
# 	erb :"static/index"
# end



