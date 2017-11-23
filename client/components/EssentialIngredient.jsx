import React, {Component} from 'react';
import { List, Label, Tab, Table, Icon, Modal } from "semantic-ui-react";

export default class EssentialIngredient extends Component {
  render() {
    return (
      <div >
      {/*}  <Modal trigger={<a>{this.props.essentialIngredient}</a>} closeIcon>

          <Modal.Header>Walmart </Modal.Header>
          <Modal.Content image scrolling />
        </Modal>
        */}

        <Table padded>
          <Table.Body>
          <Table.Row>
            <Table.Cell>
            <Modal trigger={<a className="anchor">{this.props.essentialIngredient}</a>} closeIcon>
            <Modal.Content>
             <p>ors</p>
            </Modal.Content>
            </Modal>
          </Table.Cell>
          </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}
