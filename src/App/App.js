import Course from './Course/Course';
import React, { useState } from 'react';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  //Arreglo que almacena la cantidad de ejercicios de cada curso
  var array = []
  for (let i = 0; i< courses[0].parts.length; i++) {
    array.push(courses[0].parts[i].exercises)
  }
  for (let i = 0; i< courses[1].parts.length; i++) {
    array.push(courses[1].parts[i].exercises)
  }
  console.log(array)
  //Metodo reduce
  var sumatoria = (array.reduce((acumulador,actual)=> acumulador + actual))
  console.log(sumatoria)
    
    
    return (
      <div style={{backgroundColor:'aquamarine', padding:30}}>
        <Course courses={courses} /> 
        <div style={{backgroundColor:'crimson', color:'white', padding:10, width:200}}>
          <p><strong>Total:</strong> {sumatoria} exercises</p>
        </div>
      </div>
    )
  }
export default App;