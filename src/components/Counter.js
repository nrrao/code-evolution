import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  handleIncrement(){
this.setState({
  count:this.state.count+1
},
()=>{
  console.log('increment click', this.state.count)
})
console.log(this.state.count)
}
  
  render() {
    return (
      <div>
        count-{this.state.count}
        <br />
        <button onClick={()=>this.handleIncrement()}>Increment</button>
      </div>
    )
  }
}

export default Counter;
