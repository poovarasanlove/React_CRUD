import React, { Component } from "react";
import ReactDom from "react-dom";
import Title from "./title";
import style from "./header.scss";

class Header extends Component{
	constructor(){
		super();
		this.state = {
			title :	"BASIC CRUD" ,
		}
	}
	render(){
		const list = ['Home','Form','Dashboard','Contact']
		return(
			<div className="main_con">
				<Title title={this.state.title} list={list} />
			</div>
		);
	}
}

export default Header;