import React,  {  useState }  from "react";
import { RoomBoard } from "../components/RoomBoard";
import { ProjectBar } from "../components/ProjectBar";
import { Card } from "../components/Card";
import { dispatch, projectRecord, roomboardRecord, useSelector, roomBoardItemsListSchema } from "../store";




function RoomBoardWrapper() {
    const roomboard = useSelector(state => state.roomboard.get());
    const updateFunc = () => {
        dispatch(roomboardRecord.update({ value: Date.now()}))
    }
    console.log(roomboard)
    return (
        <RoomBoard value={roomboard?.value} updateFunc={updateFunc} />
    )
}

function ProjectWrapper() {
    const project = useSelector(state => state.project.get());
    const updateFunc = () => {
        dispatch(projectRecord.update({ value: Date.now()}))
    }
    return (
        <RoomBoard value={project?.value} updateFunc={updateFunc} />
    )
}

function CardItemWrapper({ id }) {
    const item = useSelector(state => state.roomBoardItemsList.get(id));

    const updateFunc = () => {

        dispatch(roomBoardItemsListSchema.update({ id, value: Date.now() }));
    }

    return (
        <Card item={item} updateFunc={updateFunc} />
    )
}


function CardITems() {
    const allIDs = useSelector(state => state.roomBoardItemsList.allIds());

    return (
        <React.Fragment>
            {(allIDs || []).map((id) => {
                return (
                    <CardItemWrapper key={id} id={id} />
                )
            })}
        </React.Fragment>
    );
}


export function ReduxExample() {

    React.useEffect(() => {
        dispatch(roomBoardItemsListSchema.populate([{ value: 1, id: 1 }, { value: 2, id: 2 }, { value: 3, id: 3}]))
    })

    return (
        <React.Fragment>
            <RoomBoardWrapper />
            <ProjectWrapper />
            <CardITems />
            {/* <ProjectBar value={project} updateFunc={() => {
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
            })} */}
            

        </React.Fragment>
    )
}