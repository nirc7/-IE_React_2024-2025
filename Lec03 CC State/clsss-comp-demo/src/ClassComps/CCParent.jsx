
import { Component } from 'react';
import CCChild from './CCChild';

export default class CCParent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    getDataFromChild = (data) => {
        console.log('getDataFromChild', data);
        this.setState({ numFromC: data });
    }

    render() {
        return (
            <div style={{
                margin: 10, padding: 10,
                borderRadius: 10, border: 'solid green 3px',
                backgroundColor: 'grey'
            }}>
                <h3>Parent</h3>
                numFomC= {this.state.numFromC} <br />
                <CCChild sendData={this.getDataFromChild} />
            </div>
        );
    }
}
