import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleInverted extends Component {
  constructor() {
    super();
    this.state = { activeItem: "" };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          className="siteName"
          name="DIY Supplies Ordering Portal"
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            className="menu"
          >
          <img src='../assets/images/Wipro-Logo.png' title='powered by Wipro' alt='Wipro Logo'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
