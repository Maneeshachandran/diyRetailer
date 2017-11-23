import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { List, Label, Tab, Table, Icon, Modal ,Button } from "semantic-ui-react";
import Header from "./header.jsx";
import MainIngredientList from "./MainIngredientList.jsx";
import EssentialIngredientList from "./EssentialIngredient.jsx";


class Ingredients extends React.Component {

  constructor(){
    super();
    this.state = {
      procedure:'',
      mainIngredient:'',
      essentialIngredient:''
    }
    // this.dispalyStore=this.dispalyStore.bind(this);
  }

  componentWillMount(){
    var that = this;
    $.ajax({
      type:'GET',
      url:'/ingredients',
      data:{'url':'www.youtube.com/qwe'},
      success:function(data){

        that.setState({procedure:data.procedure});
        var mainIngredient = data.MainIngredient;
        var mainIngredientList = mainIngredient.map((row,index)=> {
               return <MainIngredientList ingredients={row.name} quantity={row.quantity} unit={row.unit}  key = {index}/>
        });
        var essentialIngredient = data.EssentialIngredient;
        var essentialIngredientList = essentialIngredient.map((row,index)=>{
                return <EssentialIngredientList essentialIngredient={row.name} key = {index}/>
        })
        that.setState({mainIngredient:mainIngredientList,essentialIngredient:essentialIngredientList},function(){
          console.log("qqqq",this.state.mainIngredient);
        });

      },
      error:function(err){
        alert("error");
      }
    })
  }

//  displayStore(){
  //  console.log("onclick is calling");
    //  window.location="http://www.google.co.in";
  //}

  render(){
  //  var aa = window.location="http://www.google.co.in";
    console.log('main',JSON.stringify(this.state.mainIngredient));
    console.log(this.state.mainIngredient,"ocutccccc");
    if(this.state.mainIngredient.length!=0){
var dd=(
     this.state.mainIngredient.map((item)=>{
       return(<Table.Row>
         <Table.Cell>
         <Modal trigger={<a className="anchor" >{item.props.ingredients}</a>} closeIcon>
         <Modal.Content>
         {/*aa*/}
         </Modal.Content>
         </Modal>
       </Table.Cell>
       <Table.Cell>
         {item.props.quantity}
       </Table.Cell>
       <Table.Cell>
         {item.props.unit}
         </Table.Cell>
      </Table.Row>)
     })
   )
    }
    else{
  var dd = (<div>No item to Display</div>)
    }
    const panes = [
      {
        menuItem: "Essential Ingredients",
        pane: (
          <Tab.Pane key="tab1">
            <p>This tab has ingredients which you can add to cart.</p>
            <Table padded>
              <Table.Header >
                <Table.Row >
                  <Table.HeaderCell style={{"backgroundColor":"#d1cfcf"}}>Ingredients</Table.HeaderCell>
                  <Table.HeaderCell style={{"backgroundColor":"#d1cfcf"}}>Quantity</Table.HeaderCell>
                  <Table.HeaderCell style={{"backgroundColor":"#d1cfcf"}}>Units</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {dd}
              </Table.Body>
            </Table>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Main Ingredients",
        pane: (
          <Tab.Pane key="tab2">
            <p>This tab has a additional ingredients which you can add to cart.</p>
            {this.state.essentialIngredient}
          </Tab.Pane>
        )
      },
      {
        menuItem: "Procedure",
        pane: {
          key: "tab3",
          content: (
            <List bulleted>
              <List.Item>
                {this.state.procedure}
              </List.Item>
              {/*<List.Item>
                Fry tomatoes with salt for 3 minutes. Cook covered till the mixture
                turns soft and mushy.
              </List.Item>
              <List.Item>
                Add garam masala, coriander powder, cashews, red chili powder and
                sugar
              </List.Item>
              <List.Item>
                When the mixture cools, blend it with 1 cup water in a blender to
                very smooth.
              </List.Item>*/}
            </List>
          )
        }
      }
    ];

   return (
     <div  className="Ingredients">
     <Header/>
     <div className="abc">
     <Tab  panes={panes} renderActiveOnly={false} />;
      </div>
   </div>);
  }
}

export default Ingredients;
