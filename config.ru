require 'sinatra'
require 'rubygems'
require 'main.rb'

set :environment => :development
set :raise_errors => true
set :run => false

log = File.new("sinatra.log", "a")
STDOUT.reopen(log)
STDERR.reopen(log) 

run Sinatra::Application
