import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';

export default class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            data: [],
            view: 'result'
        };
    }

    componentDidMount() {
    	const xhr = new XMLHttpRequest();
		xhr.overrideMimeType("application/json");
		xhr.onreadystatechange = () => {
		  if (xhr.readyState == XMLHttpRequest.DONE) {
		  	const json = JSON.parse(xhr.responseText);
		  	const res = json.data;
		  	this.setState({
		  		data: res
		  	});
		  }
		}
		xhr.open('GET', 'data.json');
		xhr.send();
    }
	
	render() {
		return (
			<Fragment>
				<Header view={this.state.view}/>
				<Table data={this.state.data}/>
			</Fragment>
		);
	}
};