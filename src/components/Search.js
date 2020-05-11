import React from 'react';

export default class Search extends React.Component{
	render(){
		return(
			<div className="search">
				<label className="nomedopersonagem">Nome Do Personagem</label>
				<input ref="searchInput" className="Rectangle_8" onChange={this.props.changeSearchText} value={this.props.searchBoxValue} />
			</div>
		);
	}
}