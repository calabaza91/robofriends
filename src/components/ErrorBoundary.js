import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        const {hasError} = this.state
        if(hasError){
            return <h1 className="f1 tc pt4">Oops! Something went wrong.</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;