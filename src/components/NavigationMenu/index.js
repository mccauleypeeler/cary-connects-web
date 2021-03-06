import React, { Component } from 'react'
import NavigationItem from './NavigationItem'
import PageDirectory from 'src/pages/PageDirectory'
import SearchInput from './SearchInput'
import filterLocation from './filterLocation'
import LocationResults from './LocationResults'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';


class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredLocation: filterLocation("", 0),
    };
  }

  handleSearchChange = event => {
    if (event.target.value == 0) {
      this.setState({
      filteredLocation: filterLocation(event.target.value, 0)
    });
  } else {
    this.setState({
      filteredLocation: filterLocation(event.target.value, 7, this.props.data)
    });
  }};

  settleName(name) {
      this.props.thirdNamePass(name);
      this.setState({
        filteredLocation: filterLocation("", 0)
      });
  }

  render () {
    return (
      <div>

          <NavigationItem title='Home' navigatesTo={PageDirectory.WELCOME_PAGE.path} />
          <NavigationItem title='Feedback' navigatesTo={PageDirectory.FEEDBACK_PAGE.path} />


        <SearchInput textChange={this.handleSearchChange} />
        <LocationResults locationData={this.state.filteredLocation} secondPassName={this.settleName.bind(this)}/>
      </div>
    )
  }
}

export default NavigationMenu;
