require 'rubygems'
require 'sinatra'
require 'erb'
require 'json'
require'active_record'

ActiveRecord::Base.establish_connection(YAML::load(File.open('database.yml')))

get '/' do
	@randomCanvas = rand(3) + 1
	erb :index
end

get '/:title' do |title|
	@picture = "wall" + title
	erb :wall
end	

class Tools < ActiveRecord::Base
end

post '/:title/reciever/?' do |title|
	jsonData = params[:data]
	toolFromJSON = JSON.parse(jsonData)
	Tools.create(:tool => toolFromJSON, :picture => title)
end

get '/sender/:picture' do
	
end  
