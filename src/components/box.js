import React, {Component} from 'react';
import './box.css'

class Box extends Component {

	render() {

		let colorbord;
		if(this.props.gender === "male")
			colorbord = {
				border: '3px solid blue'
			}
		else
			colorbord = {
				border: '3px solid yellow'
			}
		

		return(
			<div className="box" class='App-box'>
				<img src={require(`${this.props.image}`)} 
					class= 'App-img' alt="crew" style={colorbord}/>
				<h2> {this.props.title} </h2>
				<p> {this.props.desc} </p>
			</div>	
		);
	}
}

export default Box;