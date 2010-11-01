require 'rubygems'
require 'sinatra'
require 'erb'

get '/' do
	erb :index
end

get '/:picture' do |title|
	@picture = title
	erb :wall
end	
