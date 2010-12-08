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

post '/:title/receiver' do |title|
	toolFromJSON = JSON.parse(request.body.read)
	Tools.create(:json => toolFromJSON, :picture => title)
end

get '/:title/sender?' do |title|
	"10"	
end  
