import React, { Component } from 'react';
import Header from '../components/Header';
// import Year from '../components/Year';

export default class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            data: [],
            view: 'result'
        };
    }
	
	render() {
		return (
			<Header view={this.state.view}/>
		);
	}
};