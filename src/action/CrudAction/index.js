import {Crud_Add_Post, Crud_Delete_Post, Crud_Edit_Post, Crud_Update_Post, Crud_Cancel_Update_Post,FETCH_DATA} from 'action/type';
import {handleResponse} from 'action/utils';


export function fetchdata(data) {
	return{
		type: FETCH_DATA,
		data
	};
}
export function fetching(data){
	const url = 'https://codepen.io/jobs.json';
	return dispatch => 

		fetch(url,{method: 'GET'})
		.then(handleResponse)
		.then(jsonData =>  dispatch(fetchdata(jsonData)));
}

export function adddata(data){
	return{
		type: Crud_Add_Post,
		data
	};
}
export function adddataaction(data){
	return dispatch => dispatch(adddata(data));
}



export function deletedata(id){
	return{
		type: Crud_Delete_Post,
		id
	};
}
export function deletedataaction(id){
	return dispatch => dispatch(deletedata(id));
}



export function updatedata(id, data){
	return{
		type: Crud_Update_Post,
		id,
		data:data
	};
}
export function updatedataaction(id, data){
	return dispatch => dispatch(updatedata(id, data));
}



export function editdata(id){
	return{
		type: Crud_Edit_Post,
		id
	};
}
export function editdataaction(id){
	return dispatch => dispatch(editdata(id));
}



export function cancelupdatedata(id){
	return{
		type: Crud_Cancel_Update_Post,
		id
	};
}
export function cancelupdatedataaction(id){
	return dispatch => dispatch(cancelupdatedata(id));
}