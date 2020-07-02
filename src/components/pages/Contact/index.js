import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TabNav from 'components/common/Tab';


class Contact extends Component{
	constructor (props){
		super(props);
		this.state ={
			index:1
		}
	}
	onTab = (id) => {
		this.setState({index:id});
	}
	render(){
		const contactlist = 
         [{
            id:1,
            label:'Home'
         },
         {
            id:2,
            label:'Office'
         },
         {
            id:3,
            label:'Other'
         },
         {
            id:4,
            label:'Main'
         }];
		const value = this.state.index;
		return(
			<div>
				<h1>Contact</h1>
				<TabNav links={contactlist} onTab={this.onTab} value={value} />
				<div>	
				{value === 1 && <h1>This is my home address</h1>}
				{value === 2 && <h1>This is my office address</h1>}
				{value === 3 && <h1>This is my other address</h1>}
				{value === 4 && <h1>This is my main address</h1>}
				</div>
			</div>
		);
	}

}
export default Contact;