import React, { Component } from 'react';
class ErrorBoundaries extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            HasError: false
        }
    }

    componentDidCatch(error,info)
    {
        this.setState({HasError :true})
    }

    render()
    {
        if(this.state.HasError)
        return <h1>ooops !! somthing went wrong</h1>
        else 
        return this.props.children
    }


}

export default ErrorBoundaries
