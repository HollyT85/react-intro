import React from "react";

class EventBinding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    };

    // handleClick(){
        // this.setState({
            // introduction: "Goodbye",
            // buttonText: "Enter"
        // })
        // this.handleClick = this.handleClick.bind(this)
    // }

    handleClick = () => {
        this.setState({
            introduction: "Goodbye",
            buttonText: "Enter"
        })

    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={this.handleClick}>{this.state.buttonText}</button> 
                
            </div>
        ) 
    }
};
// <button onClick={()handleClick.bind(this)}>{this.state.buttonText}</button>
// <button onClick={this.handleClick}</button> - with bit above
// <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
export default EventBinding;
