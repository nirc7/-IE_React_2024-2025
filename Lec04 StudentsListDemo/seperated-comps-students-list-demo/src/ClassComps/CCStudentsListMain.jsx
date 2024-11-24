import { Component } from 'react';
import FCInputs from '../FuncComps/FCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';

export default class CCStudentsListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: 'avi', grade: 100 },
        { id: 2, name: 'benny', grade: 101 }]
    };
  }

  getStudentFromInp = (id, name, grade) => {
    console.log(id);
    let newStudents = [...this.state.students, { id, name, grade }];
    console.log(newStudents);
    this.setState({ students: newStudents });
  }

  render() {
    return (
      <div>
        <FCInputs sendStudent2Main={this.getStudentFromInp} />
        <FCStudentsList students={this.state.students} />
      </div>
    )
  }
}
