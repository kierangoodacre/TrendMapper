require 'json'

class Algorithm

  def initialize
    @loaded = false
    @yelp_data = {}
    @age_data = {}
  end

  attr_accessor :loaded, :yelp_data, :age_data

  def load_yelp_file(file)
    file = File.read(file)
    @yelp_data = JSON.parse(file)
  end

  def load_age_file(file)
    file = File.read(file)
    @age_data = JSON.parse(file)
  end

  def total(borough)
    i = 0
    @yelp_data[borough].each do |k,v|
      i += v
    end
    return i
  end

  def display_totals
    hash = {}
    @yelp_data.each do |k,v|
      hash[k] = total(k)      
    end
    return hash
  end

end
