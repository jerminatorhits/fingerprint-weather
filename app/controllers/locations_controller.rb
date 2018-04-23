class LocationsController < ApplicationController
  def index
  	#@locations = Location.fetch_locations(params[:query])
  	@locations = self.fetch_query
  end
  	#query = query.create(query_name: :query, response: MetaWeather.new(params).search)
    #@locations = MetaWeather.new(params).search if params[:query]

  def show
    @location = MetaWeather.new(params).location_data
  end

  def fetch_query
  	location = Location.find_by(query: params[:query])
  	location.nil? ? self.fetch_from_MW_API : self.fetch_from_cache(location)
  end

  def fetch_from_cache(location)
  	JSON.parse(location.result)
  end

  def fetch_from_MW_API
  	response = MetaWeather.new(params).search if params[:query]
		json_response = JSON.generate(response)
    new_entry = Location.new(query: params[:query], result: json_response)
    new_entry.save
    response
  end
end