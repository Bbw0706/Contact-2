import React, {Component} from "react";
import {Platform, StyleSheet, View, FlatList, Alert} from 'react-native';
import {connect} from "react-redux"
import {List, ListItem, Text, Fab, Icon, Body, Right, Spinner} from "native-base"
import axios from "axios"
import {deleteList,loadMore} from "../../store/action/index.js";

class ContactList extends Component {
	handleDelete = (id) => {
		axios.delete(`http://192.168.0.23:5000/contact/person/${id}`)
		.then(res => {
			this.props.dispatch(deleteList(id))			
		})
	}

	_renderList(item){
	  return(
		<ListItem 
		avatar
		onPress={() => {
			this.props.navigation.navigate('Edit', {id : item._id})
		}}
		onLongPress={() => 
			{
				Alert.alert(
				'Are you sure ?',
				'delete this contact ?',
				[
					{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
					{text: 'OK', onPress: () => this.handleDelete(item._id)},
				],
					{ cancelable: false }
				)
			}}

		>
			<Body>
				<Text>{item.name}</Text>
				<Text note>{item.email}</Text>
				<Text note>{item.number}</Text>
			</Body>
		</ListItem>
	  )
	}

	handleLoadMore = () => {
		this.props.dispatch(loadMore(this.props.contact.page))
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.contact.page !== this.props.contact.page){
     		this.props.makeRemoteRequest()
     	}
  	}

  	_renderFooter = () => {
  		if(this.props.contact.loading === false){
  			return null
  		}
		
		return (
	        <View>
	          <Spinner color='#9c27b0' />
	          <Text 
	            style={{color:"#aaa", fontSize:12, textAlign:'center', bottom:10}}
	          >
	            Load more data
	          </Text>
	        </View>
	    )
  	}

	render() {
		return(
		  <List>
			<FlatList
			data={this.props.contact.people}
			onEndReached={() => this.handleLoadMore()}
			onEndReachedThreshold={0.1}
			ListFooterComponent={this._renderFooter()}
			renderItem={({item}) => this._renderList(item)}
			keyExtractor={(item, index) => item._id}
			/>
		  </List>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contact : state.contact
	}
}

export default connect(mapStateToProps)(ContactList)