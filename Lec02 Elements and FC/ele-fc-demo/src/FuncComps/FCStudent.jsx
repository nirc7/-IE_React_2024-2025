
export default function FCStudent(props) {

  let gradewBomnus = props.grade + 5;
  let mycolor = "...";
  // if (gradewBomnus < 105) {
  //     return (
  //         <>
  //             <div>not good engouhth</div>
  //         </>
  //     );
  // }

  function btnAddGrade() {
    console.log(gradewBomnus);
    gradewBomnus++;
    console.log(gradewBomnus);
  }

  function chgColor(event) {
    console.log(event.target.value);
    mycolor = event.target.value;
  }

  return (
    <div style={{
      borderWidth: 2,
      borderRadius: 5, backgroundColor: 'grey',
      padding: 10, margin: 10
    }}>
      id={props.id} <br />
      name={props.name} <br />
      gradewb = {gradewBomnus} <br />
      <button onClick={btnAddGrade} >+</button> <br />
      color <input type="text " onChange={chgColor} /> <br />
      col = {mycolor}
    </div>
  );
}