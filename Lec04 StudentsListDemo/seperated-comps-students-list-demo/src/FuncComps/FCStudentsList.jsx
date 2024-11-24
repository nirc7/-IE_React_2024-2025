import React from 'react'

export default function FCStudentsList(props) {

  let studentsStr = props.students.map(stu =>
    <div key={stu.id}>id={stu.id} name={stu.name} grade={stu.grade}</div>);

  return (
    <div style={{
      margin: 15,
      padding: 5,
      border: '2px grey dashed',
      borderRadius: 10
    }}>
      <h2>StudentsList</h2>
      {studentsStr}
    </div>
  )
}
