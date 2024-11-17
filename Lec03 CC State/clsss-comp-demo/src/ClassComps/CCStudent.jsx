import { Component } from "react";

export default class CCStudent extends Component {
    constructor(props) {
        super(props);

        //this.myGarde = 80;


        this.state = {
            grade: 80,
            //name: this.props.name
        };


    }

    btnAddB = () => {
        console.log(2);
        //this.myGarde += 5;
        //console.log(this.myGarde);
        //this.state.grade = 100; //ERROR!!!
        //this.setState({ grade: 100 });
        this.setState(prevS => ({
            grade: prevS.grade + 5,
            name: "dora"
        }));
    }

    chName = (e) => {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                id={this.props.id} <br />
                name={this.state.name} <br />
                grade={this.props.grade} <br />
                <button onClick={this.btnAddB}>Add Bonus</button> <br />
                {/* {this.myGarde} */}
                state grade = {this.state.grade} <br />
                <input type="text" onChange={this.chName} /> {this.state.name}
            </div>
        );
    }
}
