import React from "react"
import PropTypes from "prop-types"

class DailyWeather extends React.Component {
  render () {
    return (
    	<React.Fragment>
	      <hr/>
		  		<dt>Applicable Date</dt>
		  		<dd>{this.props.applicable_date}</dd>
		  		<dt>Min Temp</dt>
		  		<dd>{this.props.min_temp}</dd>
		  		<dt>Temp</dt>
		  		<dd>{this.props.the_temp}</dd>
		  		<dt>{this.props.weather_state_name}</dt>
		  		<dd><img src={this.props.img_url} /></dd>
		  		<dt>Max Temp</dt>
		  		<dd>{this.props.max_temp}</dd>
	  	</React.Fragment>
    );
  }
}

DailyWeather.propTypes = {
  applicable_date: PropTypes.string.isRequired,
  min_temp: PropTypes.number.isRequired,
  the_temp: PropTypes.number.isRequired,
  weather_state_name: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  max_temp: PropTypes.number.isRequired
};

export default DailyWeather
