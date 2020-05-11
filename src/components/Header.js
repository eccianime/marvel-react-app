import React from 'react';

export default class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="headerLeft">
					<div className="buscamarvel">BUSCA MARVEL</div>
					<div className="testefrontend">TESTE FRONT-END</div>
				</div>
				<div className="headerRight">
					<div className="nomedocandidato"> JEAN PAUL ROJAS</div>
				</div>
			</div>
			
		);
	}
}