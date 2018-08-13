const initialState = {
	people : [],
	page : 1,
	perpage: 7,
	sort : 1,
	loading : false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "GET_LIST":
			return {
				...state,
				people : state.people.concat(action.payload),
				loading : action.loader
			};

		case "DELETE_LIST":
			return {
				...state,
				people : state.people.filter((item, index) => item._id != action.payload)
			}

		case "ADD_LIST":
			return {
				...state,
				people : state.people.concat(action.payload)
			}

		case "EDIT_LIST":
			return {
				...state,
				people : action.payload
			}
		case "LOAD_MORE":
			return {
				...state,
				page : state.page + 1
			}

		default :
			return state;
	}
}

export default reducer