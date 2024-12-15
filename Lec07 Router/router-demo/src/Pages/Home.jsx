import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(count, count2);
    });

    useEffect(() => {
        console.log('count2', count2);
    }, [count2]);

    useEffect(() => {
        console.log('did mount!');

        return () => {
            console.log('will unmount!');
        }
    }, []);


    const btnGo2UserWD = () => {
        let dataObj = {
            userId: 7,
            userName: 'avi'
        };

        navigate('user', { state: dataObj });

    }

    console.log('count', count);

    return (
        <div>
            <h3>Home Page</h3>
            <button onClick={btnGo2UserWD}>
                go 2 user page with data
            </button> <br /> <br />
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button> <br />
            <button onClick={() => setCount2((count2) => count2 + 1)}>
                count2 is {count2}
            </button>
        </div>
    )
}
