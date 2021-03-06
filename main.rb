require 'rubygems'
require 'sinatra'
require 'erb'
require 'json'
require 'active_record'
require 'json/add/rails'
require 'time'

ActiveRecord::Base.establish_connection(YAML::load(File.open('database.yml')))

get '/' do
	@randomCanvas = rand(5) + 1
	erb :index
end

get '/:title' do |title|
	@picture = "wall" + title
	@title = title

	@next = (title.to_i + 1).to_s
	if @next.to_i > 5 then
		@next = "1"
	end
	
	@previous = (title.to_i - 1).to_s
	if @previous.to_i < 1 then
		@previous = "5"
	end

	erb :wall
end	

class Tools < ActiveRecord::Base
	def self.retrieve_all(title)
		find(:all, :select => :json,  :conditions => ["picture = ?", title])
	end
	def self.retrieve_new(title, lastUpdate)
		find(:all, :select => :json, :conditions => ["picture = ? AND time > ?", title, lastUpdate])
	end
end

post '/:title/receiver' do |title|
	toolFromJSON = request.body.read
	Tools.create(:json => toolFromJSON, :picture => title)
end

get '/:title/sender/:time' do 
	content_type :json

	picture = params[:title].to_i
	lastUpdate = params[:time]
	if lastUpdate == "all" then
		records = Tools.retrieve_all(picture)
	else 
		lastUpdate = Time.parse(lastUpdate)
		records = Tools.retrieve_new(picture, lastUpdate)
	end
	
	records.to_json
end 

get '/:title/history' do |title|
	@title = title
	@picture = "wall" + title
	erb :history
end 
