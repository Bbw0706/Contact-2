import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import {connect} from "react-redux"
import axios from "axios";
import {editList} from "../store/action/index.js";

class Editcontactscreen extends Component {
  state = {
    person : [],
    name : '',
    email : '',
    number : ''
  }

  componentDidMount(){
    axios.get(`http://192.168.0.23:5000/contact/person/${this.props.navigation.state.params.id}`)
    .then(res => {
      this.setState({
        person : [...this.state.person, res.data],
        name : res.data.name,
        email : res.data.email,
        number : res.data.number
      })
    })
  }

  handleEdit = () => {
    const {name, email, number} = this.state;

    axios.put(`http://192.168.0.23:5000/contact/person/${this.props.navigation.state.params.id}`, {
      name, email,number
    })
    .then(res => {
      this.props.dispatch(editList(res.data))
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
                    onPress={this.handleEdit}
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

export default connect(mapStateToProps)(Editcontactscreen);