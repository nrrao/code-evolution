import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StylSheet';
import Inline from './components/Inline'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component{
  render(){
  return (
    <div className="App">
    <Table/>
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <Inline/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/*<ParentComponent/>*/}
      {/* <EventBind />
      <Classclick />
      <FunctionClick/>
      <Counter/>
      <Message/>
      <Greet name='Bruce' heroName='Superman'>
        <p>This is children prop</p>
      </Greet>
      <Greet name='Diana' heroName='wonderwoman'>
        <button>Action</button>
      </Greet>
      <Welcome name='Bruce' heroName='Superman' />
      <Hello/> */}
    </div>
  );
  }
}

export default App;
