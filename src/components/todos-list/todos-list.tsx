import React from 'react';
import {  useState } from 'react';
import { Container, InputGroup, Button, Form, FormControl, Tabs, Tab } from 'react-bootstrap';
import { TodoContainer } from '../todo-container/todo-container';
import { Todo } from '../todo/todo';
import { ITask } from '../../types/types'

export function TodosList():JSX.Element {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [select, setSelect] = useState<string>('All');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!newTask) return;
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    };
  
    const handleComplete = (index: number) => {
        const updTasks = [...tasks];
        if((select === 'Active') || (select === 'Completed')) {
            return;
        }
        updTasks[index].completed = !updTasks[index].completed;
        setTasks(updTasks);
    };

    const completedTasks = tasks.filter(element => element.completed === true);
    const activeTasks = tasks.filter(element => element.completed !== true);
  
    return (
      <Container>
        <h2>todos</h2>
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-2 mt-4">
                <FormControl type='text' placeholder="Add a task..." value={newTask} onChange={handleChange}/>
                <Button type='submit' variant='primary'>Add</Button>
            </InputGroup>
        </Form>
        <Tabs onSelect={(evt) => evt && setSelect(evt)} defaultActiveKey="All" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Completed" title="Выполненные" data-testid='completed'>
                <TodoContainer>
                    {completedTasks.map((task, index) => (
                        <Todo key={index} task={task} index={index} handleComplete={handleComplete} />
                    ))}
                </TodoContainer>
            </Tab>
            <Tab eventKey="Active" title="Активные" data-testid='active'>
                <TodoContainer>
                    {activeTasks.map((task, index) => (
                        <Todo key={index} task={task} index={index} handleComplete={handleComplete} />
                    ))}
                </TodoContainer>
            </Tab>
            <Tab eventKey="All" title="Все" data-testid='all'>
                <TodoContainer>
                    {tasks.map((task, index) => (
                        <Todo key={index} task={task} index={index} handleComplete={handleComplete} />
                    ))}
                </TodoContainer>
            </Tab>
        </Tabs>
      </Container>
    );
  }