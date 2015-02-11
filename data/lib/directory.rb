class Directory

require 'yelp'

def initialize
  create_client
  fetch_data
end

def create_client
  @client = Yelp::Client.new({ consumer_key: ENV['YELP_CONSUMER_KEY'],
                            consumer_secret: ENV['YELP_CONSUMER_SECRET'],
                            token: ENV['YELP_TOKEN'],
                            token_secret: ENV['YELP_TOKEN_SECRET']
                          })
end



def borough_array
[ "City of London",
"Barking and Dagenham",
"Barnet",
"Bexley",
"Brent",
"Bromley",
"Camden",
"Croydon",
"Ealing",
"Enfield",
"Greenwich",
"Hackney",
"Hammersmith and Fulham",
"Haringey",
"Harrow",
"Havering",
"Hillingdon",
"Hounslow",
"Islington",
"Kensington and Chelsea",
"Kingston upon Thames",
"Lambeth",
"Lewisham",
"Merton",
"Newham",
"Redbridge",
"Richmond upon Thames",
"Southwark",
"Sutton",
"Tower Hamlets",
"Waltham Forest",
"Wandsworth",
"Westminster" ]

end

def hipster_keyword_array
["Artists everywhere",
"Artisan bread",
"Artisan beer",
"Art events",
"fixie",
"vintage store",
"vintage",
"Bloggers",
"Baristas",
"Bistros",
"Boutiques",
"Beards",
"Branding",
"Craft fairs",
"Craft shops",
"Craft beer",
"Coffee shops",
"Collectibles",
"Specialist cheese shops",
"Foxtons",
"Flat White",
"Farmers Markets",
"Gourmet burgers",
"Arty graffiti",
"graffiti",
"wet shaves",
"juice bar",
"Micro breweries",
"organic",
"Pop up shops",
"Pop up bars",
"Pop up restaurants",
"Pop up boutiques",
"Pop up fucking pop ups",
"vegan",
"artisan sausages",
"Studios",
"sushi",
"korean",
"vietnamese",
"market",
"sourdough",
"tattoo studio",
"web designers",
"yoga",
"pilates",
"bikram yoga"]
end

def fetch_data
  borough_array.each do |borough|
    borough_hash = Hash.new
    hipster_keyword_array.each do |keyword|
      new_search = @client.search(borough, {term: keyword, radius_filter: 1000})
      json = JSON.parse(new_search)
      borough_hash['location'] = borough
      borough_hash[keyword] = json['total']
    end
    write_data_to_file(borough_hash.to_json)
  end
end

def write_data_to_file(data)
  File.open("data.json", "a") do |f|
    f.write(data)
  end
end

end

