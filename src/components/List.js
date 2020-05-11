import React from 'react';
import Pagination from './Pagination';

export default class List extends React.Component{
	updateDimensions = () => {
		this.forceUpdate();
	}
	componentDidMount() {
    	this.updateDimensions();
    	window.addEventListener("resize", this.updateDimensions);
	}
	render(){
		const results = this.props.tableValue.results;
		if( results !== undefined ){
			function headerRow() {
				if( window.innerWidth > 360 ){
					return <tr className="head series"><td>Personagem</td><td>Séries</td><td>Eventos</td></tr>
				}else{
					return <tr className="head series"><td></td><td>Nome</td></tr>
				}
			}

			function res(r) {
				if( window.innerWidth > 360 ){
					return r.map(function(i) {
						return <tr className="row" key={i.id}>
							<td className="personagem">
								<div><img src={i.thumbnail.path + "." + i.thumbnail.extension } alt="" /></div>
								<div className="tonyStark">{i.name}</div>
							</td>
							<td>
								{i.series.items.map(function(j) {
									return <div className="tonyStark" key={j.resourceURI}>{"- " + j.name.substring(0, j.name.indexOf(" (") )}</div>
								})}
							</td>
							<td>
								{i.events.items.map(function(k) {
									return <div className="tonyStark" key={k.resourceURI}>{k.name}</div>
								})}
							</td>
						</tr>
					})
				}else{
					return r.map(function(i) {
						return <tr className="row" key={i.id}>
							<td><img src={i.thumbnail.path + "." + i.thumbnail.extension } alt="" /></td>
							<td className="tonyStark">{i.name}</td>
						</tr>
					})
				}
			}

			return(
				<div className="tableContainer">
					<table className="table">
						<tbody>
							{headerRow()}
							{res(results)}
						</tbody>
					</table>
					<Pagination buttonQty={ window.innerWidth > 360 ? 6 : 3 } activePage={this.props.activePage} maxPage={this.props.maxPage} changeOffset={this.props.changeOffset} />
				</div>
			);
		}else{
			return (
				<div style={{textAlign:"center"}}>Cargando...</div>
				)
		}
	}
}