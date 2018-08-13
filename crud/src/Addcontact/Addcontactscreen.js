import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import {connect} from "react-redux"
import axios from "axios";
import {addList} from "../store/action/index.js";

class Addcontactscreen extends Component {
  state = {
    name : '',
    email : '',
    number : ''
  }
  
  handlePost = () => {
    const {name, email, number} = this.state;

    axios.post("http://192.168.0.23:5000/contact", {
      name, email, number
    })
    .then(res => {
      this.props.dispatch(addList(res.data))
      this.props.navigation.popToTop()
    })
  }

  handleName = (val) => {
    this.setState({
      name : val
    })
  }

  handleEmail = (val) => {
    this.setState({
      email : val
    })
  }

  handleNumber = (val) => {
    this.setState({
      number : val
    })
  }


  render() {
    let ButtDis = <Button 
                    disabled
                    block 
                    style={{margin:30}}
                  >
                    <Text>Add List</Text>
                  </Button>

    if(this.state.name !== "" && this.state.email !== "" && this.state.number !== ""){
      ButtDis = <Button 
                    onPress={this.handlePost}
                    block 
                    style={{backgroundColor: "#9c27b0", margin:30}}
                  >
                    <Text>Add List</Text>
                  </Button>
    }
    return (
      <Container>
        <Content>
          <Form style={{marginRight:30, marginLeft:15, marginTop:20}}>
            <Item stackedLabel>
              <Label style={{fontSize:12, fontWeight:"900"}}>NAMA</Label>
              <Input value={this.state.name} onChangeText={this.handleName}/>
            </Item>
            <Item stackedLabel>
              <Label style={{fontSize:12, fontWeight:"900"}}>E-MAIL</Label>
              <Input value={this.state.email} onChangeText={this.handleEmail}/>
            </Item>
            <Item stackedLabel>
              <Label style={{fontSize:12, fontWeight:"900"}}>NUMBER</Label>
              <Input value={this.state.number} onChangeText={this.handleNumber}/>
            </Item>
          </Form>
          {ButtDis}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact : state.contact
  }
}

export default connect(mapStateToProps)(Addcontactscreen);