import React, {Component} from 'react';
import ReactDom from 'react-dom';
import style from './index.scss';
import Banner from 'components/common/Banner';

const bgimage = require('assets/images/homebg.jpg')
class Home extends Component{
	render(){
		return(
			<div>
				<Banner className="home-banner" imagename={bgimage}/>
			</div>
		);
	}
}
export default Home;
