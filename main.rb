require 'rubygems'
require 'sinatra'
require 'erb'
require 'json'

get '/' do
	@randomCanvas = rand(3) + 1
	erb :index
end

get '/:picture' do |title|
	@picture = "wall" + title
	erb :wall
end	


