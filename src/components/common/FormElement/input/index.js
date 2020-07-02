import React, {Component} from 'react';
import ReactDom from 'react-dom';

class TextBox extends Component{
	render(){
		const {id,value,className,name,label,onChange,defaultValue} = this.props;
		return(
			<React.Fragment>
			<input
			id={id}
			value={value}
			defaultValue={defaultValue}
			className={className} 
			name={name}
			placeholder={label}
			onChange={onChange}
			/>
			</React.Fragment>
		);
	}
}
export default TextBox;