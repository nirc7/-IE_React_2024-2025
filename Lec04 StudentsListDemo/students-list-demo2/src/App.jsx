import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //this.num = 7;

    this.state = {
      students: [
        { id: 1, name: 'avi', grade: 100 },
        { id: 2, name: 'benny', grade: 101 }]
    };
  }

  chgId = (e) => { this.setState({ id: parseInt(e.target.value) }); }
  chgName = (e) => { this.setState({ name: e.target.value }); }
  chgGrade = (e) => { this.setState({ grade: Number(e.target.value) }); }

  btnAddStudent = () => {
    // this.num++;
    // console.log(this.num);

    let newStudents = [...this.state.students,
    {
      id: this.state.id,
      name: this.state.name,
      grade: this.state.grade
    }];
    console.log(newStudents);
    console.log('state.students before ',this.state.students);
    this.setState({ students: newStudents });
    console.log('state.students after ',this.state.students);

  }

  render() {

    let studentsStr = this.state.students.map(stu =>
      <div key={stu.id}>id={stu.id} name={stu.name} grade={stu.grade}</div>);

    return (
      <>
        <h1>Vite + React</h1>
        <div className="card">
          ID: <input type="text" onChange={this.chgId} /> <br />
          Name: <input type="text" onChange={this.chgName} /> <br />
          Grade: <input type="text" onChange={this.chgGrade} /> <br /> <br />
          <button onClick={this.btnAddStudent}>ADD Student</button> <br />
          {this.state.id ? this.state.id : '...'} <br />
          {/* num = {this.num} */}
          {studentsStr}
        </div>
      </>
    );
  }
}

export default App
