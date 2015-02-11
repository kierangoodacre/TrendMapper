require 'directory'

describe 'Data pulling' do

  let(:data){Directory.new}

  it 'Will contain an array of London boroughs' do
    expect(data.borough_array.length).to eq 33
  end

  it 'Will contain an array of hipster keywords'do
  	expect(data.hipster_keyword_array.length).to eq 47
	end

end