
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [values, setValues] = useState({ num1: 0, num2: 0 });

  console.log('start');
  const btnAddCounter = () => {

    //setCount(count + 1); //ERROR!
    // setCount(count + 1); //ERROR!

    //opt1
    let newC = count + 1;
    setCount(newC);

    //opt2
    // setCount(prevC => prevC + 1);

    console.log('count', count);
    setValues({ ...values, num1: 1 });
  }

  useEffect(() => {
    console.log('useEffect count changed! ', count);
    console.log('useEffect count2 changed! ', count2);
  });

  useEffect(() => {
    console.log('useEffect count changed! only', count);
  }, [count]);

  useEffect(() => {
    console.log('component did mount!');

    return function cleanUp() { //componentWillUnmount
      console.log('cleaning up...componentWillUnmount');
    };
  }, []);



  console.log('return', count);
  return (
    <>
      <h1>Hooks Demo</h1>
      <div className="card">
        <button onClick={btnAddCounter}>Add count</button> <br />
        <button onClick={() => setCount2(prec => prec + 1)}>Add count2</button> <br />
        count={count} <br />
        count2={count2} <br />
        num1 = {values.num1} <br />
        num2 = {values.num2}
      </div>
    </>
  )
}

export default App
