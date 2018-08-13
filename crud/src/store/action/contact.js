import {GET_LIST, DELETE_LIST, ADD_LIST, EDIT_LIST, LOAD_MORE} from "./actionType.js";

export const getList = (request, loader) => {
	return {
		type : GET_LIST,
		payload : request,
		loader : loader
	}
}

export const deleteList = (id) => {
	return {
		type : DELETE_LIST,
		payload : id
	}
}

export const addList = (data) => {
	return {
		type : ADD_LIST,
		payload : data
	}
}

export const editList = (data) => {
	return {
		type : EDIT_LIST,
		payload : data
	}
}

export const loadMore = (data) => {
	return {
		type : LOAD_MORE,
		payload : data
	}
}