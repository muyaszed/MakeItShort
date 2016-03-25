

data = CSV.read('urls.csv')



data.each do |item|
	url = item[0].split('')
	url.shift
	url.pop
	
	test_url = Url.create(long: url.join)
	# byebug
end


# Url.create(long: "http://example.com/b1faa43533492766044d3e666e")