require 'algorithm'

describe Algorithm do

  let(:algorithm){Algorithm.new}

  context 'Yelp data' do
  
    before(:each){algorithm.load_yelp_file('lib/data.json')}

    it 'should load the JSON file' do
      expect(algorithm.yelp_data.length).not_to eq 0
    end

    it 'should be able to total the values of one borough' do
      expect(algorithm.total('Camden')).to eq 376
    end
   
    it "should be able to show the total for all boroughs" do
      expect(algorithm.display_totals.class).to eq Hash
    end

  end

  context 'Age data' do

    before(:each){algorithm.load_age_file('lib/data.json')}

    it 'should load the JSON file' do
      expect(algorithm.age_data.length).not_to eq 0
    end

  end
 
# it should place the JSON values into an array. 

# it should provide the sum of all the JSON values. 


end