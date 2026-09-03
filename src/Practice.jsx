import React from 'react'

const Practice = () => {
    const Student={
        id:1,
        name:'John',
        email:'xyz.com',
        role:"Student"
    }
    const tickets=[{
        id:101,
        title:'wifi not working',
        priority:'high',
        status:'open'
    },
    {
        id:102,
        title:'printer not working',
        priority:'medium',
        status:'in progress'
    }
]
    // console.log('Practice Component Rendered')
  return (
    <div >
      Hi I am Practice Component  
      <p>Student Name: {Student.name}</p>
      <p>Ticket title:{tickets[1].title}</p>
    </div>

  )
}

export default Practice
