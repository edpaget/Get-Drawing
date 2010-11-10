require 'main'

set :environment, :development
set :app_file, 'main.rb'
disable :run


run Sinatra::Application
