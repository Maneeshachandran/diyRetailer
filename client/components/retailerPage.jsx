import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Segment , Tab} from 'semantic-ui-react'
import AddStores from './addStore.jsx';
import DeleteStores from './deleteStore.jsx';
import "../styles/retailer.css";

const panes = [
  { menuItem: 'Add Store', render: () => <Tab.Pane attached={false}><AddStores /></Tab.Pane> },
  { menuItem: 'Delete Store', render: () => <Tab.Pane attached={false}><DeleteStores /></Tab.Pane> },
]


class Retailer extends React.Component {
  constructor () {
      super();

    }

    render(){
      return(
        <Segment className="retailer">

              you can <b>Add </b> or <b>Delete</b> the store here.

          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

        </Segment>

      );
    }
  }
  export default Retailer;
