require 'rubygems'
require 'sinatra'
require 'erb'
require 'json'

get '/' do
	erb :index
end

get '/:picture' do |title|
	@picture = title
	erb :wall
end	


