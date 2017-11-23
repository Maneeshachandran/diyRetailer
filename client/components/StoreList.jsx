import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Dropdown, Menu, Card, Form, Button, Grid } from "semantic-ui-react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "../styles/StoreList.css";
import Header from "./header.jsx";
const countryOptions = [
  { key: "United states", value: "United states", flag: 'us', text: "United states" }
];
const stateOptions = [
  { key: "Alaska", value: "Alaska", text: "Alaska" },
  { key: "California", value: "California", text: "California" },
  { key: "Florida", value: "Florida", text: "Florida" },
  { key: "Georgia", value: "Georgia", text: "Georgia" },
  { key: "Hawaii", value: "Hawaii", text: "Hawaii" },
  { key: "New Jersey", value: "New Jersey", text: "New Jersey" },
  { key: "Ohio", value: "Ohio", text: "Ohio" },
  { key: "Texas", value: "Texas", text: "Texas" },
  { key: "Washington", value: "Washington", text: "Washington" },
  { key: "Virginia", value: "Virginia", text: "Virginia" }
];
const storeOptions = [
  { key: "Costco", value: "Costco", text: "Costco" },
  { key: "Walmart", value: "Walmart", text: "Walmart" }
];

export default class StoreList extends Component {
  constructor(){
    super();
    this.state = {
      storeStatus:true,
      buttonStatus:true,
      submitBtn:false
    }
  }
  /*To enable store dropdown if state dropdown is selected*/
  stateChange(){
    this.setState({storeStatus:false});
  }

  /*To enable proceed button if store dropdown is selected*/
  storeChange(){
      this.setState({buttonStatus:false});
  }

  onSubmitBtn(){
    this.setState({submitBtn:true});
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Grid stackable>
          <Card raised style={{ marginTop: "8%", marginLeft: "72%" }}>
            <Card.Header
              style={{ fontWeight: "bold", fontSize: "180%", margin: "6%" }}
            >
              Fill Your Details
            </Card.Header>
            <Form>
              <Grid.Row style={{ margin: "6%" }}>
                <Grid.Column>
                  <Button
                    content='United states'
                    icon='globe'
                    labelPosition='left'
                    style={{ border: "1px solid black", width: "75%" }}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ margin: "6%" }}>
                <Grid.Column>
                  <Dropdown
                    button
                    className="icon "
                    floating
                    labeled
                    icon="circle outline"
                    options={stateOptions}
                    search
                    placeholder="Select a State"
                    style={{ border: "1px solid black", width: "75%",textAlign:'center' }}
                    onChange = {this.stateChange.bind(this)}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ margin: "6%" }}>
                <Grid.Column>
                  <Dropdown
                    button
                    className="icon "
                    floating
                    labeled
                    icon="shopping basket"
                    options={storeOptions}
                    search
                    placeholder="Select a Store"
                    style={{ border: "1px solid black", width: "75%",textAlign:'center'}}
                    disabled = {this.state.storeStatus}
                    onChange = {this.storeChange.bind(this)}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ margin: "10%" }}>
                <Grid.Column>
                {this.state.buttonStatus?
                  <Button style={{ marginLeft: "40%" }} secondary type="submit" disabled={this.state.buttonStatus} onClick = {this.onSubmitBtn.bind(this)}>
                    {" "}
                    Proceed
                  </Button>:
                  (<Link to="/ingredients">
                    <Button style={{ marginLeft: "40%" }} secondary type="submit" onClick = {this.onSubmitBtn.bind(this)}>
                      {" "}
                      Proceed
                    </Button>
                  </Link>)}
                </Grid.Column>
              </Grid.Row>
            </Form>
          </Card>
        </Grid>
      </div>
    );
  }
}





/* using region-country-selector */
{/*import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Dropdown, Menu, Card, Form, Button, Grid } from "semantic-ui-react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "../styles/StoreList.css";
import Header from "./header.jsx";
const countryOptions = [
  { key: "United states", value: "United states", flag: 'us', text: "United states" }
];
const stateOptions = [
  { key: "Alaska", value: "Alaska", text: "Alaska" },
  { key: "California", value: "California", text: "California" },
  { key: "Florida", value: "Florida", text: "Florida" },
  { key: "Georgia", value: "Georgia", text: "Georgia" },
  { key: "Hawaii", value: "Hawaii", text: "Hawaii" },
  { key: "New Jersey", value: "New Jersey", text: "New Jersey" },
  { key: "Ohio", value: "Ohio", text: "Ohio" },
  { key: "Texas", value: "Texas", text: "Texas" },
  { key: "Washington", value: "Washington", text: "Washington" },
  { key: "Virginia", value: "Virginia", text: "Virginia" }
];
const storeOptions = [
  { key: "Costco", value: "Costco", text: "Costco" },
  { key: "Walmart", value: "Walmart", text: "Walmart" }
];

export default class StoreList extends Component {
  constructor(){
    super();
    this.state = {
      storeStatus:true,
      buttonStatus:true,
      submitBtn:false,
      country: '',
      region: ''
    }
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val,storeStatus:false});
  }
  /*To enable store dropdown if state dropdown is selected
  stateChange(){
    this.setState({storeStatus:false});
  }

  /*To enable proceed button if store dropdown is selected
  storeChange(){
      this.setState({buttonStatus:false});
  }

  onSubmitBtn(){
    this.setState({submitBtn:true});
  }
  render() {
    const { country, region } = this.state;
    return (
      <div className="App">
        <Header />
        <Grid stackable>
          <Card raised style={{ marginTop: "8%", marginLeft: "72%" }}>
            <Card.Header
              style={{ fontWeight: "bold", fontSize: "180%", margin: "6%" }}
            >
              Fill Your Details
            </Card.Header>
            <Form>
              <Grid.Row style={{ margin: "6%" }}>
                <Grid.Column>
                  <CountryDropdown
                    value={country}
                    icon='globe'
                    labelPosition='left'
                    className = "country"
                    onChange={(val) => this.selectCountry(val)} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ margin: "6%" }}>
                <Grid.Column>
                  <RegionDropdown
                    country={country}
                    value={region}
                    className="icon "
                    floating
                    labeled
                    icon="circle outline"
                    options={stateOptions}
                    search
                    placeholder="Select a State"
                    style={{ border: "1px solid black", width: "75%",textAlign:'center' }}
                    onChange={(val) => this.selectRegion(val)} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ margin: "6%" }}>
                <Grid.Column>
                  <Dropdown
                    button
                    className="icon "
                    floating
                    labeled
                    icon="shopping basket"
                    options={storeOptions}
                    search
                    placeholder="Select a Store"
                    style={{ border: "1px solid black", width: "75%",textAlign:'center'}}
                    disabled = {this.state.storeStatus}
                    onChange = {this.storeChange.bind(this)}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ margin: "10%" }}>
                <Grid.Column>
                {this.state.buttonStatus?
                  <Button style={{ marginLeft: "40%" }} secondary type="submit" disabled={this.state.buttonStatus} onClick = {this.onSubmitBtn.bind(this)}>
                    {" "}
                    Proceed
                  </Button>:
                  (<Link to="/ingredients">
                    <Button style={{ marginLeft: "40%" }} secondary type="submit" onClick = {this.onSubmitBtn.bind(this)}>
                      {" "}
                      Proceed
                    </Button>
                  </Link>)}
                </Grid.Column>
              </Grid.Row>
            </Form>
          </Card>
        </Grid>
      </div>
    );
  }
}*/}
