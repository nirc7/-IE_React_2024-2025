import React, { Component } from 'react'

export default class CCStudentsListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: null,
      students: [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }]
    };
  }

  render() {

    let studentsStr = this.state.students.map((stu, index) =>
      <div key={index}>id={stu.id} , name={stu.name}</div>
    );

    return (
      <div>
        ID:<input type="text" onChange={this.chID} /> <br />
        NAME:<input type="text" onChange={this.chName} /> <br /> <br />
        <button onClick={this.btnAddB}>Add Student</button> <br />
        <h2>Students List:</h2>
        {studentsStr}
      </div>
    )
  }
}
