import { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCLifeDemo extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0, userName: '' };
    console.log('constructor');
    //code  2 DB Students....setState() //ERROR

    //before studenbts

    this.txt1;
  }

  componentDidMount() {
    console.log('componentDidMount - once - after the first render');
    //code  2 DB Students....setState() //GOOD:)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  btnAddCount = () => {
    let newCounter = this.state.counter + 1;
    console.log(newCounter);

    console.log('this.state.counter=', this.state.counter);
    this.setState({ counter: newCounter }, () => {
      console.log('counter was changed=', this.state.counter);
    });
    console.log('this.state.counter=', this.state.counter);
  }

  chgName = (e) => {
    if (Number(e.target.value)) {
      this.setState({ userName: e.target.value });
    }
    //this.setState({ userName:  e.target.value.toUpperCase() });  
  }

  btnFocus = () => {
    this.txt1.focus();
    this.txt1.size = 10;
    this.setState({ userName: this.txt1.value });
  }

  btnDivClicked = (e) => {
    console.log('div clicked!', e.target.dataset.divnumber);
  }

  btnDivClicked2 = (id) => {
    console.log('div clicked2!', id);
  }

  render() {
    console.log('render');
    console.log('redner -  this.state.counter=', this.state.counter);

    return (
      <div>
        Lisfe Cycle Demo <br />
        <button onClick={this.btnAddCount} >Add</button> <br />
        counter={this.state.counter} <br />
        <input type="text" value={this.state.userName} /> <br />
        <input type="text" value={this.state.userName}
          onChange={this.chgName}
          placeholder="insert the story" />

        <input type="text" ref={ref1 => this.txt1 = ref1} /> <br />
        <button onClick={this.btnFocus} >Focus</button> <br />
        <div data-divnumber={1} onClick={this.btnDivClicked}>One</div>
        <div data-divnumber={2} onClick={this.btnDivClicked}>Two</div>
        <div data-divnumber={3} onClick={this.btnDivClicked}>Three</div>
        <br /><br />
        <div onClick={() => this.btnDivClicked2(1)}>One</div>
        <div onClick={() => this.btnDivClicked2(2)}>Two</div>
        <div onClick={() => this.btnDivClicked2(3)}>Three</div>
        <br />
        <button onClick={() => {
          console.log(1);
          this.setState(prev => ({ counter: prev.counter + 1 }))
          console.log(2);
        }
        }
        >AddInline</button> <br />
      </div>
    )
  }
}

CCLifeDemo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};


