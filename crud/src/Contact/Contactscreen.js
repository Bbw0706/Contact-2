import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from "react-redux"
import {Text, Fab, Icon} from "native-base"
import axios from "axios"

import {getList} from "../store/action/index.js";
import ContactList from './component/ContactList.js'

class Contactscreen extends Component {
	makeRemoteRequest = () => {
		const {page, perpage, sort} = this.props.contact
		this.props.dispatch(getList([], true))

		setTimeout(() => {
			axios.get(`http://192.168.0.23:5000/contact/?page=${page}&perpage=${perpage}&sort=${sort}`)
			.then(res =>{
				this.props.dispatch(getList(res.data, false));			
			})
		}, 1500)
		
	}

	componentDidMount(){
		this.makeRemoteRequest()
	}


	render() {
		return(
			<View style={{flex : 1}}>
				<ContactList 
				  navigation={this.props.navigation}
				  makeRemoteRequest={this.makeRemoteRequest}
				/>

				<Fab
		            style={{ backgroundColor: '#9c27b0' }}
		            position="bottomRight"
		            onPress={() => this.props.navigation.navigate("Add")}
		        >
		            <Icon name="add" />
	          	</Fab>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contact : state.contact
	}
}

export default connect(mapStateToProps)(Contactscreen);