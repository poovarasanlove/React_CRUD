import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class Title extends Component {
	render(){
		const {title, list} = this.props;
		const menu = list.map((el)=><li key={el}><Link to={el === "Home" ? '/' : el}>{el}</Link></li>);
		return(
			<div className="content">
				<h1>{title}</h1>
				<ul>{menu}</ul>
			</div>
		);
	}
}
export default Title;
