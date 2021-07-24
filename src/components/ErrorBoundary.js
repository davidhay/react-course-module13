import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  //this lifecycle method makes this an 'ErrorBoundary'
  componentDidCatch(error) {
    console.log("error", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>ops - something went wrong</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
