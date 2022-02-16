    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const Cars = () => {
        const [todos, setTodos] = useState([]);

        const getTodos = async () => {
        try {
            const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
            );
            setTodos(response.data);
        } catch (err) {
            console.log(err);
        }
        };

        useEffect(() => {
            getTodos();
          }, []);


        return (
            <div className='page-style' >
            <h2> Todos </h2>
            {todos.map((todo) => (
              <Car todo={todo} key={todo.id} />
            ))}
          </div>        
    )
    };
    const Car = ({ todo }) => {
        return (
          <div>
            <table>
              <tr>
                <h3> UserId: {todo.userId}</h3>
              </tr>
              <tr>
                <p> ID: {todo.id}</p>
              </tr>
              <tr>
                <p> Title: {todo.title}</p>
              </tr>
              <tr>
                <p> Body: {todo.body}</p>
              </tr>              
            </table>
          </div>
        )
      }

    export default Cars
