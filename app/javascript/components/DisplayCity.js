import React from "react"
import PropTypes from "prop-types"
import DailyWeather from "./DailyWeather"

class DisplayCity extends React.Component {
	renderCity(location) {
		if (location == null) {
			return <h2>Location not found</h2>
		}
		else {
			return (
				<dl>
					<dt>Title</dt>
					<dd>{location['title']}</dd>
					<dt>Location Type</dt>
					<dd>{location['location_type']}</dd>
					<dt>Latitude/Longitude</dt>
					<dd>{location['latt_long']}</dd>
					<dt>Location Type</dt>
					<dd>{location['location_type']}</dd>
					<dt>Time</dt>
					<dd>{location['time']}</dd>
					<dt>Sunrise</dt>
					<dd>{location['sun_rise']}</dd>
					<dt>Sunset</dt>
					<dd>{location['sun_set']}</dd>
					<dt>Timezone</dt>
					<dd>{location['timezone_name']}</dd>
					{this.renderConsolidatedWeather(location['consolidated_weather'])}
				</dl>
			)
		}
	}

	renderConsolidatedWeather(reports) {
    return reports.map(report => {
      return (
      	<DailyWeather
      		key={report['id']}
      		applicable_date={report['applicable_date']}
      		min_temp={report['min_temp']}
      		the_temp={report['the_temp']}
      		weather_state_name={report['weather_state_name']}
      		img_url={"https://www.metaweather.com/static/img/weather/png/64/" + report['weather_state_abbr'] + ".png"}
      		max_temp={report['max_temp']}
      	/>
      );
    });
	}

  render () {
  	const containerStyle = {
  		"marginTop": "1rem"
  	}
    return (
      <div className="container" style={containerStyle}>
      	{this.renderCity(this.props.props.location)}
      </div>
    );
  }
}

export default DisplayCity
