import { Component } from "react";

export default class CCStudent extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div style={{ borderWidth: 2,
        borderRadius: 5, backgroundColor: 'lightgrey',
        padding: 10, margin: 10 }}>
        name =  {this.props.name}<br />
        grade ={this.props.grade}
      </div>
    );
  }
}