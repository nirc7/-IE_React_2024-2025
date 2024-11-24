import React from 'react'

export default function FCInputs(props) {

  let myId, myName, myGrade;

  const chgId = (e) => { myId = parseInt(e.target.value); }
  const chgName = (e) => { myName = e.target.value; }
  const chgGrade = (e) => { myGrade = Number(e.target.value); }

  const btnAddStudent = () => {
    console.log(myGrade);
    props.sendStudent2Main(myId, myName, myGrade);
  }

  return (
    <div style={{ margin: 5, padding: 5, border: '2px green solid', borderRadius: 10 }}>
      ID: <input type="text" onChange={chgId} /> <br />
      Name: <input type="text" onChange={chgName} /> <br />
      Grade: <input type="text" onChange={chgGrade} /> <br /> <br />
      <button onClick={btnAddStudent}>ADD Student</button> <br />
    </div>
  )
}
