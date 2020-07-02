import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux'
import{adddataaction} from 'action/CrudAction'
import TextBox from 'components/common/FormElement/input';

class CrudFrom extends Component{
	constructor(props){
      super(props);
      this.state = {
         id: '',
         name:'',
         username:''
      };

   }
   onSubmitHandle = (e, id) => {
      e.preventDefault();
      if (this.state.name === '' || this.state.username === '') {
         alert('Please Fill Mandatory Field');
      }else{
         const Name = this.state.name;
         const UserName = this.state.username;
         let data = {
            id: Date.now(),
            Name: Name,
            UserName: UserName,
            editing:false
         };
         this.props.adddataaction(data);
         this.state.name = '';
         this.state.username = '';
         this.setState({
            [e.target.id] : e.target.value
         });
         this.props.history.push("/Dashboard");
      }
   }
   onClear = (e) => {
         this.state.name = '';
         this.state.username = '';
         this.state.id = '';
         this.setState({
            [e.target.id] : e.target.value
         })
   }
   handleChange = (e) => {
      this.setState({
         [e.target.id] : e.target.value
      })
   }
	render(){
		return(
			<React.Fragment>
				<form className="form" onSubmit={this.onSubmitHandle.bind(this)}>
               <TextBox id="name" className="form_element" name='name' label="Enter your Name"  value={this.state.name} onChange={this.handleChange}/>
           		<TextBox id="username" className="form_element" name='username' label="Enter your User Name" value={this.state.username} onChange={this.handleChange}/>
               <button className="data_submit">Submit</button>
            </form>
            <button className="data_clear" onClick={this.onClear}>Clear</button>
         </React.Fragment>
		);
	}
}

export default connect(null,{adddataaction})(CrudFrom);