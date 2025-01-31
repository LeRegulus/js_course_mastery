import { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import Container from '@mui/material/Container';
import './App.css'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get('http://localhost:3000/api/v1/todos').then(
      res => {
        console.log(res.data);
        setTodos(res.data);
      } 
    ).catch(err =>{
      console.log(err);
    });
  }
  useEffect(() => {
    fetchTodos();
  }, []);


  return (  
  <Container maxWidth="sm">
    <div>
    <h1>Regulus Todo App</h1>
    {todos && todos.length>0 ? todos.map((todo: any) => {
      return <div>
          <TodoCard {...todo} />
          <br />
      </div>
    }) : <h3>No todos found</h3>}
    </div>    
  </Container>
  )
}

export default App
