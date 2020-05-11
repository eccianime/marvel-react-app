import React from 'react';

export default class ButtonPag extends React.Component{
	render(){
		const leftArrow = <i datavalue={this.props.datavalue} className={"fa fa-play fa-flip-horizontal playButton-2" + (this.props.datavalue === 0 ? " disabled" : "" ) }></i>;
		const rightArrow = <i datavalue={this.props.datavalue} className={"fa fa-play playButton" + (this.props.datavalue === (this.props.maxPage+1) ? " disabled" : "" )}></i>;
		const circle = "circle centerx2";
		const typeOfCircle = this.props.isActive === true ? " circle-full" : " circle-white";
		const buttonClass = this.props.toB === "circle" ? (circle + typeOfCircle) : "";
		var childs = this.props.toB === "leftArrow" ? leftArrow : ( this.props.toB === "rightArrow" ? rightArrow : this.props.children);
		const disen = this.props.datavalue === 0 || this.props.datavalue === this.props.maxPage+1 ? null : this.props.changeOffset;
		return(
			<div onClick={disen} datavalue={this.props.datavalue} className={buttonClass}>{childs}</div>
		);
	}
}