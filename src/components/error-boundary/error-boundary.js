import React, { Component } from "react";

import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            errorInfo: errorInfo
        })
    }

    render() {
        if(this.state.hasError) {
            console.log(`ErrorBoundary caught an error: ${this.state.errorInfo.componentStack}`)
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}