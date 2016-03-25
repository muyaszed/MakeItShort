require 'csv'
require 'byebug'

# byebug
data = CSV.read('my_urls.csv')



data.each do |item|
	url = item[0].split('')
	url.shift
	url.pop
	p url.join
end
