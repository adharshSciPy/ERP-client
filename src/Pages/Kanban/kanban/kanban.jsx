import './kanban.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../../Dummy datas/mockData'
import React, { useState } from 'react'
import Card from '../kanban_card/kanban_card'
import Popover from '@mui/material/Popover';

const Kanban = () => {

    // kanban controllers
    const [data, setData] = useState(mockData)

    const onDragEnd = result => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            setData(data)

        };
    }

    // popovers controllers
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;




    return (
        <div className="dashboardcontainer">
            <div className="kanban-item1">
                <div className="kanban-header">
                    <h1>Lead Generation</h1>
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="kanban">
                        {
                            data.map(section => (
                                <Droppable
                                    key={section.id}
                                    droppableId={section.id}
                                >
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            className='kanban__section'
                                            ref={provided.innerRef}
                                        >
                                            <div className="kanban__section__title">
                                                {section.title}
                                                {section.title === "To do" && <button className="add__todo" onClick={handleClick}>+</button>}
                                            </div>

                                            <Popover className='add_todo_container'
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left',
                                                }}
                                            >

                                              <div className="add_todo">
                                                <div className="add_todo_header">
                                                    <h3>Add Todo</h3>
                                                </div>
                                                
                                                <div className="add_todo_body">
                                                    <input type="text" placeholder='eg: Learn java' />
                                                </div>

                                                <div className="add_todo_btn">
                                                    <input type="submit" />
                                                </div>
                                              </div>
                                                
                                            </Popover>
                                            <div className="kanban__section__content">
                                                {
                                                    section.tasks.map((task, index) => (
                                                        <Draggable
                                                            key={task.id}
                                                            draggableId={task.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        ...provided.draggableProps.style,
                                                                        opacity: snapshot.isDragging ? '0.5' : '1'
                                                                    }}
                                                                >
                                                                    <Card>
                                                                        {task.title}
                                                                    </Card>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))
                                                }
                                                {provided.placeholder}
                                            </div>
                                        </div>
                                    )}
                                </Droppable>
                            ))
                        }
                    </div>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Kanban
