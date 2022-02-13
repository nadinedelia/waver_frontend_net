
import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "./Player";

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read all todos
  useEffect(() => {
    axios.get('https://waver--backend.herokuapp.com/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('https://waver--backend.herokuapp.com/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};



  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"50px"}} >
      <h1 className="p-3 mb-2 bg-info text-white" styleName="max-width: 20rem;">the best Task Manager ever</h1>
      <h6 className="p-3 mb-2 bg-info text-white">with love from Nadine</h6>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">this isn't working yet babe. plz fix.</h5>
      <span className="card-text">
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/>
        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
      <button className="p-3 mb-2 bg-info text-white" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Task</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">Click for music!</h5>
      <div >
      <Player
        url={[
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
        ]} style={{"marginTop":"50px"}} 
      />
      </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >see you soon xx</h6>
    </div>
  );
}

export default App;
