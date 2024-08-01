import { useEffect, useState } from 'react'
import axios from "axios";


function App() {
const [idstate, setIdState] = useState(1);

  // useEffect(()=>{
  //   fetch("https://sum-server.100xdevs.com/todos")
  //     .then(async function(res){
  //       const json = await res.json();
  //       setTodos(json.todos);
  //     })
  // }, [])


  return <div>
    <button onClick={function (){
      setIdState(1)
    }}>1</button>
    <button onClick={function(){
      setIdState(2)
    }}>2</button>
    <button onClick={function(){
      setIdState(3)
    }}>3</button>
    <button onClick={function(){
      setIdState(4)
    }}>4</button>
    <Todo id={idstate}></Todo>
  </div>
}

function Todo({ id }) {
  const [todo, setTodos] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo/?id=${id}`)
      .then((response) => {
        setTodos(response.data.todo)
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h3>
      {todo.description}
    </h3>
  </div>
}


export default App
