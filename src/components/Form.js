import React, { Component } from 'react'

 class Form extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        username:'',
        comments:'',
        topic:'React'
     }
   }

   handleUsernameChange = (event)=>{
this.setState({
 username:event.target.value
})
   }

   handleCommentsChange=(event)=>{
     this.setState({
       comments:event.target.value
     })
   }
   handleTopicChange =(event)=>{
    this.setState({
      topic:event.target.value
    })
   }
   handleSubmit=event=>{
     alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
     event.preventDefault()
   }
   
  render() {
    const{username,comments,topic}=this.state
    return (
<form onSubmit={this.handleSubmit}>
  <div>
    <label>Username</label>
    <input type='text' value={username} onChange={this.handleUsernameChange} />
  </div>
  <div><lable>Comments</lable>
  <textarea value={comments} onChange={this.handleCommentsChange}></textarea></div>
  <div><lable>Topic</lable>
  <select onChange={this.handleTopicChange}>
  <option value={topic}>React</option>
  <option value='Angular'>Angular</option>
  <option value='Vue'>Vue</option>
  </select>
  </div>
  <button>Submit</button>
</form>
    )
  }
}

export default Form
