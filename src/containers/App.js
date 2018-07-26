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
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSortTable = this.handleSortTable.bind(this);
    }

    componentDidMount() {
    	const xhr = new XMLHttpRequest();
		xhr.overrideMimeType('application/json');
		xhr.onreadystatechange = () => {
		  if (xhr.readyState == XMLHttpRequest.DONE) {
		  	const json = JSON.parse(xhr.responseText);
		  	const res = json.data;
		  	this.setState({
		  		data: res
		  	});
		  }
		}
		xhr.open('GET', '../data.json');
		xhr.send();
    }

    handleToggle() {
    	if (this.state.view === 'result') {
    		this.setState({ view: 'conference' })
    	}
    	else {
    		this.setState({ view: 'result' })
    	}
    }

    handleSortTable() {

    }
 	
	render() {
		const { data, view } = this.state;
		return (
			<Fragment>
				<Header
					view={view}
					toggleHandler={this.handleToggle}
					/>
				<Table
					view={view} 
					data={data}
					sortHandler={this.handleSortTable}/>
			</Fragment>
		);
	}
};