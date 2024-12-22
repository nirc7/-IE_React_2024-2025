import { useState, createContext } from "react";

import { v4 as uuidv4 } from 'uuid';

export const HobbyContext = createContext();

const HobbiesInit = [
    { id: 1, name: 'play', times: 3 },
    { id: 2, name: 'filght', times: 2 }
];

export default function HobbyContextProvider(props) {
    const [hobbies, setHobbies] = useState(HobbiesInit);
    const [count, setCount] = useState(HobbiesInit.length);

    const AddHobby = (name, times) => {
        let newHobby = { id: uuidv4(), name, times };
        setHobbies([...hobbies, newHobby]);
    }

    const RemoveHobby = (id) => {
        setHobbies(hobbies.filter(hob => hob.id !== id));
    }

    return (
        <HobbyContext.Provider value={{hobbies, AddHobby , RemoveHobby}}>
            {props.children}
        </HobbyContext.Provider>
    )
}
