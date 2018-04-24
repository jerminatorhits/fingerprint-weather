import React from "react"
import PropTypes from "prop-types"
import Listing from "./Listing"

class HomePage extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    	value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchLocations();
  }

  fetchLocations() {
  	var that = this;
  	$.ajax({
		  type: "GET",
		  url: that.props.locationsPath,
		  dataType: "json",
		  data: {query: that.state.value},
		  success:function(result){
		    that.setState({
		    	locations: result
		    });
		  }
		});
  }

  renderTable(locations) {
    if (locations == null) {
      return <h3>Nothing to see here... :( Try search again.</h3>;
    }
    return (
    	<table className="table table-striped">
    		<thead>
    			<tr>
    				<th>Title</th>
    				<th>Location Type</th>
    			</tr>
    		</thead>
    		<tbody>
    			{this.renderListings(locations.locations)}
    		</tbody>
    	</table>
    );
  }

  renderListings(listings) {
    return listings.map(listing => {
      return (
        <Listing
          key={listing.woeid}
          woeid={listing.woeid}
          title={listing.title}
          location_type={listing.location_type}
          latt_long={listing.latt_long} 
          location_path={this.props.locationsPath + "/" + listing.woeid} />
      );
    });
  }


  render () {
  	const containerStyle = {
  		"marginTop": "1rem"
  	}
    return (
    	<React.Fragment>
	    	<div className="container" style={containerStyle}>
	    		<form onSubmit={this.handleSubmit}>
	    			<div className="form-row align-items-center">
	    				<div className="col-auto">
		          	<input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Location..." />
		          </div>
		          <div className="col-auto">
			        	<input type="submit" value="Search..." className="btn btn-primary" />
			        </div>
	      		</div>
      		</form>
	    	</div>
    		<div className="container" style={containerStyle}>
    			{this.renderTable(this.state.locations)}
    		</div>
    	</React.Fragment>
    );
  }
}

export default HomePage
