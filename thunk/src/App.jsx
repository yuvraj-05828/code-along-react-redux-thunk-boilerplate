import React from "react";
import Counter from "./components/Counter";

export default class App extends React.Component{

  render(){
    return (
      <div style={{textAlign:"center"}}>
        <Counter/>
      </div>
    )
  }
  
}