import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { ITask } from '../../types/types'

type TTodoProps = {
    task: ITask,
    handleComplete: (index : number) => void,
    index: number
}

export const Todo = ({ task, handleComplete, index } : TTodoProps):JSX.Element => {
    return (
        <ListGroupItem style={{ textAlign: 'center' }}  action onClick={() => handleComplete(index)}>
            <s>{task.completed ? task.text : null}</s>
            <span data-testid={`task-${index+1}`}>{!task.completed ? task.text : null}</span>
        </ListGroupItem>
    );
}