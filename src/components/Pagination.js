import React from 'react';
import ButtonPag from './ButtonPag';

export default class Pagination extends React.Component{
	render(){
		var buttons 	= [];
		const start 	= this.props.activePage !== this.props.maxPage ? ( this.props.buttonQty - this.props.activePage <= 0 ? this.props.activePage - this.props.buttonQty +2 : 1 ) : this.props.activePage - this.props.buttonQty +1;
		const end 		= this.props.activePage !== this.props.maxPage ? ( this.props.buttonQty - this.props.activePage > 0 ? this.props.buttonQty : this.props.activePage+1 ) : this.props.maxPage; 
		
		buttons.push( <ButtonPag toB="leftArrow" key="abc" changeOffset={this.props.changeOffset} datavalue={this.props.activePage-1} /> );		

		for( var i = start ; i <= end ; i++ ){
			if( i > 0 && i <= this.props.maxPage ){
				buttons.push( <ButtonPag changeOffset={this.props.changeOffset} datavalue={i} toB="circle" key={i} isActive={i === this.props.activePage ? true : false}>{i}</ButtonPag> );	
			}
		}

		buttons.push( <ButtonPag toB="rightArrow" key="xyz" changeOffset={this.props.changeOffset} datavalue={this.props.activePage+1} maxPage={this.props.maxPage} /> );

		return(
			<div className="pagination centerx2">{buttons}</div>
		);
	}
}