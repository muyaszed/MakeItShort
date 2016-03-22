

get '/' do

	data = Url.all
	data.each do |item|
		puts "#{item.long} and #{item.short} , click:#{item.click_count}"
	end
  erb :"static/index"


end

post '/urls' do
	
	@data = Url.create(long: params[:long_url])
	
	if @data.errors.empty?
		puts "no error"
	else
		puts @data.errors.messages[:long]
	end

	erb :"static/result"
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



