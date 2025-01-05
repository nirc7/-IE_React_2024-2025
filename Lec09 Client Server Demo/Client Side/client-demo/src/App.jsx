import './App.css'

const apiUrl = 'https://localhost:7022/api/Students/';

function App() {

  const btnGetAll = () => {
    debugger;
    let num = 7;
    num++;
    console.log(num);

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.name));
          console.log('result[0].FullName=', result[0].name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }


  const btnGetByID = () => {
    fetch(apiUrl + '3', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.FullName=', result.name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPost = () => {

    const data = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 0,
      Name: 'nir',
      grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.grade);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPut = () => {

    const data = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 3,
      Name: 'nir',
      grade: 77
    };

    fetch(apiUrl + "3", {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res=', res.status);
      }),
      (error) => {
        console.log("err post=", error);
      };
  }

  const btnDelete = () => {

    fetch(apiUrl + "3", {
      method: 'DELETE',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res=', res.status);
      }),
      (error) => {
        console.log("err post=", error);
      };
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={btnGetAll} >Get ALL</button> <br />
        <button onClick={btnGetByID} >Get By ID</button> <br />
        <button onClick={btnPost} >Post</button> <br />
        <button onClick={btnPut} >Put</button> <br />
        <button onClick={btnDelete} >Delete</button> <br />
      </div>
    </>
  )
}

export default App
