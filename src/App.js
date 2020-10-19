import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list:[],
       newitem:""
    }
  }

  addItem(todo){
    if(todo!==""){
      const newitem={
        id:Date.now(),
        value:todo,
        isdone:false
      }
      const list = [...this.state.list];
      list.push(newitem);
      this.setState({
        list:list,
        newitem:""
      })
    }
  }

  updateInput(input){
    this.setState({
      newitem:input
    })
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item=>item.id !==id);
    this.setState({
      list:updatedlist
    })
  }
  
  render(){
  return (
    <div className="App container">
      <h1>Todo list</h1>
      <input 
        type="text" 
        className="mr-5" 
        value={this.state.newitem}
        onChange={e=>this.updateInput(e.target.value)}/>
      <button className="btn btn-primary" onClick={()=>this.addItem(this.state.newitem)}>enter</button>
      <div className="list">
        {this.state.list.map(item => {
          return(
            <div className="row">
              <div className="col-sm-6"><li key={item.id}>{item.value}</li></div>
              <div className="col-sm-6">
                <button className="btn btn-danger" onClick={()=>this.deleteItem(item.id)}>delete</button>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )};
}
export default App;