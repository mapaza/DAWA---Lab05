import Course from './Course/Course';
import React, { useState } from 'react';

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }
  //Arreglo que almacena la cantidad de ejercicios de cada curso
  var array = []
  for (let i = 0; i< course.parts.length; i++) {
    array.push(course.parts[i].exercises)
  }
  //Metodo reduce
  var sumatoria = (array.reduce((acumulador,actual)=> acumulador + actual))
  console.log(sumatoria)
    
    
    return (
      <div>
        <h1>{course.name}</h1>
        <Course course={course} />
        <div>
          <p><strong>Total:</strong> {sumatoria} exercises</p>
        </div>
      </div>
    )
  }
export default App;