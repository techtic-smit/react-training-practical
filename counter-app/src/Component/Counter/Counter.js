import React from "react";

class Counter extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    if (this.state.count === 0) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  }
  render(){ 
   return (
     <div>
       <div>
         <h4>Practical - 2 - Counter App</h4>
         <p>Count :- {this.state.count}</p>
         <p>My Prop : {this.props.name}</p>
       </div>
       <button onClick={this.decrement.bind(this)}> - </button>
       &nbsp;&nbsp;
       <button onClick={() => this.setState({ count: 0 })}>Reset</button>
       &nbsp;&nbsp;
       <button onClick={this.increment.bind(this)}> + </button>
     </div>
   );
  };
};

export default Counter;