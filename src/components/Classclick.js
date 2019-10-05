import React, { Component } from 'react'

 class Classclick extends Component {
   handleClick() {
     console.log('clicked the button');
   }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default Classclick
