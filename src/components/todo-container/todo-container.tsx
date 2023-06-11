import React, { ReactNode } from 'react';
import { ListGroup } from 'react-bootstrap';

type TTodoContainerProps = {
    children: ReactNode,
}

export const TodoContainer = ({ children }: TTodoContainerProps) => {
    return (
        <ListGroup variant="vertical" className="col-md-5 mx-auto">
            {children}
        </ListGroup>
    );
}