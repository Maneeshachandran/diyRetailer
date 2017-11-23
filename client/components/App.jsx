import React, {Component} from 'react';
import StoreList from './StoreList.jsx';
import AddStores from './addStore.jsx';
import Retailer from './retailerPage.jsx';
import DeleteStores from './deleteStore.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<StoreList />
        <Retailer />*/}
        <Retailer />
      </div>
    );
  }
}
