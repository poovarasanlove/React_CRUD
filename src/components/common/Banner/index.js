import React, {Component} from 'react';
import ReactDom from 'react-dom';
import style from './style.scss';
class Banner extends Component{
	render(){
		const {className,imagename} = this.props;
		console.log(imagename);
		var images = {
			 width: "90%",
			 backgroundImage: `url(${imagename})`
		}
		return(
			<div className={className} style={images}>
			lol
			</div>
		);
	}
}
export default Banner;