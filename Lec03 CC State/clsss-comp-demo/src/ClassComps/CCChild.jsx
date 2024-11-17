import { Component } from 'react'

export default class CCChild extends Component {
    constructor(props) {
        super(props);
    }

    btnSend2P = () => {
        this.props.sendData(7);
    }

    render() {
        return (
            <div>
                <h4>CHILD</h4>
                <button onClick={this.btnSend2P}>Send2Parent</button>
            </div>
        )
    }
}
