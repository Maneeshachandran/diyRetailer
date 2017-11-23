import React, {Component} from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery';
import { Grid, Dropdown ,Label, Form, Input ,Button} from "semantic-ui-react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


class AddStores extends React.Component {
  constructor (props) {
      super(props);
      this.state = { country: '', region: '' ,store: []};
    }

    selectCountry (val) {
      this.setState({ country: val },function(){
        console.log(this.state.country,"country");
      });
    }

    selectRegion (val) {
      this.setState({ region: val },function()
    {
      console.log(this.state.region,"region");
    });
    }

    storeDetails(event){
      let storeValue = event.target.value;
      this.setState({store:storeValue},function()
      {
        console.log(this.state.store,"store");
      });
    }

    handleSubmit(){
      let context = this;
      $.ajax({
        type:'POST',
        url:'/addstores',
        data:{
          country:context.state.country,
          region:context.state.region,
          store:context.state.store
        },
        success:function(data){

          alert(data);
          location.reload();
        },
        error:function(err){
          alert(err);
        }
      })
    }




    render () {
      const { country, region } = this.state;
      return (
        <div>

           <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column >
                <Label>Select the country</Label>
              </Grid.Column>
              <Grid.Column >
                <CountryDropdown
                defaultOptionLabel='Select your country'
                value={this.state.country}
                onChange={(val) => this.selectCountry(val)} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Label>Select the state</Label>
              </Grid.Column>
              <Grid.Column>
                <RegionDropdown
                blankOptionLabel='No country selected'
                defaultOptionLabel='Now select your state'
                country={country}
                placeholder='select state'
                value={this.state.region}
                onChange={(val) => this.selectRegion(val)} />
             </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Label>Enter the store</Label>
              </Grid.Column>
              <Grid.Column >
                <Input placeholder='Store' onChange={this.storeDetails.bind(this)}/>
             </Grid.Column>
            </Grid.Row>
            <Grid.Row>
               <Button positive onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </Grid.Row>
          </Grid>

        </div>
      );
    }
  }
export default AddStores;
