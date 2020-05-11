import React from 'react';
import './App.css';
import './font-awesome.css';

import Header from './components/Header';
import Line from './components/Line';
import Search from './components/Search';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends React.Component{
	state = {
		searchBoxValue: '',
		table: [],
		url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dc558e99e4fa7c403b266700f4067353&hash=42643551c6736c148684a490e6ba0cae&limit=4',
		activePage:1,
		maxPage: 0,
	}
	changeSearchText = (e) => {
		const extra = e.target.value.length > 0 ? '&nameStartsWith='+e.target.value : '';
		const newURL = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=dc558e99e4fa7c403b266700f4067353&hash=42643551c6736c148684a490e6ba0cae&limit=4'+extra;
		this.setState({
			activePage:1,
			searchBoxValue: e.target.value,
			url: newURL,
		})
		this.getList( newURL );
	}
	getList( newURL, offset ){
		const os = offset !== undefined ? offset : (this.state.activePage - 1) * 4;
		var url = newURL !== undefined ? newURL : this.state.url;
		url += "&offset="+os;
		return fetch( url )
			.then( response => response.json() )
			.then( json => { this.setState({
					table: json.data,
					maxPage: Math.ceil(json.data.total/4)
				}) 
			})
			.catch( error => console.log(error) )
	}
	componentDidMount(){
		this.getList();
	}
	changeOffset = (e) => {
		const page = parseInt( e.target.attributes.datavalue.value) < this.state.maxPage ? parseInt( e.target.attributes.datavalue.value ) : this.state.maxPage ;
		const offset = ( page -1 ) * 4 ;
		this.setState({
			activePage: page,
		})
		this.getList( this.state.url, offset );
	}
	render(){
		return(
			<div>
				<Header />
				<Line />
				<Search changeSearchText={this.changeSearchText} searchBoxValue={this.state.searchBoxValue} />
				<List activePage={this.state.activePage} maxPage={this.state.maxPage} tableValue={this.state.table} changeOffset={this.changeOffset} />
				
				<Footer />
			</div>
		);
	}
}