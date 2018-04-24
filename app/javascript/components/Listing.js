import React from "react"
import PropTypes from "prop-types"

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          <a href={this.props.location_path}>{this.props.title}</a>
        </td>
        <td>
          {this.props.location_type}
        </td>
      </tr>
    );
  }
}

Listing.propTypes = {
  location_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location_type: PropTypes.string.isRequired
}

export default Listing
