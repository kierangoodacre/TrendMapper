require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = "e14LehsvaTugymGPlVfdBw"
  config.consumer_secret = "2sRB0QsyE6L3Ms910PQFH72azkw"
  config.token = "ArB_SDJYEA2WBWxJbWODKfS0p9rsI4-c"
  config.token_secret = "L_FKZMAittRmVZ_Rpbg3BaNwEgQ"
end

# Yelp.client.search('San Francisco', { term: 'food' })"