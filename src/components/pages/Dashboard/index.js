import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { map, isEmpty } from 'lodash';
import {deletedataaction,cancelupdatedataaction,editdataaction,updatedataaction,fetchadataaction,fetching} from 'action/CrudAction'
import TextBox from 'components/common/FormElement/input'

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			name:'',
			username:''
		}
	}
	onEdit(id, Name, UserName){
		this.setState({
			name:Name,
			username:UserName
		});
		this.props.editdataaction(id);
	}
	componentDidMount(){
		this.props.fetching();
		console.log(this.props.fetching());
	}
	onUpdate(id){
		const data ={
			newname: this.state.name,
			newusername: this.state.username
		}
		this.props.updatedataaction(id, data)
	}
	onCancel(id){
		this.props.cancelupdatedataaction(id);
	}
	onDelete(id){
		this.props.deletedataaction(id);
	}
	handleChange = (e) =>{
		this.setState({
			[e.target.id] : e.target.value
		});
	}
	render() {
		let datacon = this.props.post;
		const dataList = !isEmpty(datacon) ? map(datacon, post =>
			<tr key={post.hashid}>
				<td>{post.hashid}</td>
				{post.editing ? <td><TextBox id="name" className="form_element" name='name'  value={this.state.name} onChange={this.handleChange}/></td> : <td className="data_name">{post.company_name}</td>}	
				{post.editing ? <td><TextBox id="username" className="form_element" name='username'   value={this.state.username} onChange={this.handleChange}/></td> : <td>{post.url}</td>}
				{post.editing ? <td><button className="data_submit" onClick={this.onUpdate.bind(this,post.hashid)}>Update</button></td> : <td><button className="data_update" onClick={this.onEdit.bind(this,post.hashid,post.company_name,post.url)}>Edit</button></td>}
				{post.editing ? <td><button className="data_cancel" onClick={this.onCancel.bind(this,post.hashid)}>Cancel</button></td> : <td><button className="data_delete" onClick={this.onDelete.bind(this,post.hashid)}>Delete</button></td>}
			</tr>
		) : <tr><td>N-O----D-A-T-A</td></tr>;
		return(
			<table className="data_table">
				<tbody>
						{dataList}
				</tbody>
			</table>
		);
	}
}
const mapStatetoProp = (state) => {
   return{
      post: state
   };
};
export default connect(mapStatetoProp, { deletedataaction, cancelupdatedataaction, editdataaction, updatedataaction,fetching }) (Dashboard);





