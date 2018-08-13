import {createStackNavigator} from "react-navigation";

import Contactscreen from "../Contact/Contactscreen.js"
import Addcontactscreen from "../Addcontact/Addcontactscreen.js"
import Editcontactscreen from "../Editcontact/Editcontactscreen.js"

const RootStack = createStackNavigator(
	{	
		Contact : {
			screen : Contactscreen,
			navigationOptions: {
				title: "Contact List",
				headerTitleStyle: {
			      left : 110
			    },
			}
		},
		Add : {
			screen : Addcontactscreen,
			navigationOptions: {
				title: "Add Contact",
				headerTitleStyle: {
			      left : 55
			    },
			}
		},
		Edit : {
			screen : Editcontactscreen,
			navigationOptions: {
				title: "Edit Contact",
				headerTitleStyle: {
			      left : 55
			    },
			}
		}
	},
	{
		initialRouteName: 'Contact',
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#9c27b0',
	      },
	      headerTintColor: '#fff',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)

export default RootStack;