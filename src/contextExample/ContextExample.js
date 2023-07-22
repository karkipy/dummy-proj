import React,  { useContext, createContext, useState }  from "react";
import { RoomBoard } from "../components/RoomBoard";
import { ProjectBar } from "../components/ProjectBar";
import { Card } from "../components/Card";


const MyContext = createContext();



export function ContextExample() {
    const [items, setItems] = useState([{ value: 1 }, { value: 2 }, { value: 3}]);
    const [project, setProject] = useState();
    const [roomboard, setRoomboard] = useState();
    return (
        <MyContext.Provider value={{ items, project, roomboard, setItems, setProject, setRoomboard }}>
            <RoomBoard value={roomboard} updateFunc={() => {
                setRoomboard(Date.now())
            }} />
            <ProjectBar value={project} updateFunc={() => {
                setProject(Date.now())
            }} />

            {items.map((item, index) => {
                const functionToPass = () => {
                    setItems((prevItems) => {
                        const newItems = [...prevItems];
                        newItems[index] = { value: Date.now() };
                        return newItems;
                    })
                }
                return (
                    <Card
                        key={index}
                        index={index+1}
                        item={item}
                        updateFunc={functionToPass}
                    />
                )
            })}
            

        </MyContext.Provider>
    )
}