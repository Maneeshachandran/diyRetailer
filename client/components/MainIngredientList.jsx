import React, {Component} from 'react';
import { List, Label, Tab, Table, Icon, Modal } from "semantic-ui-react";

export default class MainIngredientList extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:this.props.quantity,
      unit:this.props.unit
    }
  }
  componentWillMount(){
    if(this.props.quantity == undefined){
      this.setState({quantity:"As required"});
    }
    if(this.props.unit == undefined){
      this.setState({unit:"-"});
    }
  }

  render() {
    console.log(this.props.ingredients,"adadd");
      console.log(this.state.quantity,"quan");
    return (
    {/*  <div >
          <Modal
            trigger={
              <Table.Cell>
                <p className="ingredientName" ><a>{this.props.ingredients}</a></p>
              </Table.Cell>
            }closeIcon
          >
            <Modal.Header>Walmart </Modal.Header>
            <Modal.Content image scrolling />
          </Modal>
          <Table.Cell>{this.props.quantity}</Table.Cell>
          <Table.Cell>{this.props.unit}</Table.Cell>
      </div>
      */}
    );
  }
}
