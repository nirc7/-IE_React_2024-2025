
export default function FCPerson(props) {

    let myName = "...";
    if (props.id < 7) {
        return (
            <div>less than 7</div>
        );
    }

    function chgName(e) {
        myName = e.target.value;
        console.log(myName);
    }

    const btnAdd = () => { }

    return (
        <div style={{ margin: 5, padding: 5 }}>
            id: {props.id}
            name: {props.name} <br />
            <input type="text" onChange={chgName} /> {myName}
        </div>
    );
}