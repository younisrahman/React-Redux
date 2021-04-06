import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {anotherName, addwish} from './actions/myaction'

function App(props) {

  const Mywish = props.mywish.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>
  })

  console.log(props)
  return (
    <div className="App">
      <h1>My name is {props.myname}</h1>
      {Mywish}
      {/* <button onClick={()=>{props.changeName("Younis Rahman")}}>Change It</button> */}
      <button onClick={()=>{props.changeName()}}>Change It</button>
      <button onClick={()=>{props.addwish()}}>Add Wish</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    myname: state.name,
    mywish: state.wish,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeName:()=>{dispatch(anotherName())},
    addwish:()=>{dispatch(addwish())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
