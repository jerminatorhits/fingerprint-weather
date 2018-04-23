# Weather

A simple Ruby on Rails application that enables users to search locations and view weather details made available by [MetaWeather](https://www.metaweather.com).

### Objectives for this project

- Implement caching where location query responses are stored in a *SQL* database to speed-up subsequent searches (note: cache invalidation is not a requirement).

- Add an appropriate weather icon to location weather result (`show` template). See MetaWeather API documentation for details: <https://www.metaweather.com/api/>

### To run this project locally

1. Clone this repository by running `git clone https://github.com/jerminatorhits/fingerprint-weather.git` in your terminal
2. Ensure your system is using both the Ruby (2.5.0) and Rails (5.2.0) versions of this project. If not, go ahead and update them accordingly.
3. `cd` into fingerprint-weather directory
4. Run `bundle install` to install gem dependencies
5. Run `rails s` and open your favorite browser to localhost:3000
