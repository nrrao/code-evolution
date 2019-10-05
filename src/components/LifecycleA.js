import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Nandana'
    }
    console.log('lifecycleA constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  
  render() {
    console.log('LifecycleA render')
    return (
      <div>
              <div>
        LifecycleA 
      </div>
      <LifecycleB/>
      </div>

    )
  }
}

export default LifecycleA
