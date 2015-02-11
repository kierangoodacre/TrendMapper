require 'app'

describe 'Data pulling' do

  let(:data){Data.new}

  it 'Will contain an array of London boroughs' do
    expect(data.borough_array.length).to eq 32
  end

end