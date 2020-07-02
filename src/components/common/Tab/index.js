import React, {Component} from 'react';
import ReactDom from 'react-dom';
import styles from './style.scss';

class TabNav extends Component{
	onTab(id){
		this.props.onTab(id);
	}
	render(){
		const {links}= this.props
		const listitem = links.map((el) => <li className={this.props.value === el.id ? 'current': null} onClick={this.onTab.bind(this,el.id)} key={el.id}>{el.label}</li>);
		return(
			<ul className="tab">{listitem}</ul>
		);
	}
}
export default TabNav;