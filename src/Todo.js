import { ListItem,List, ListItemText,Button } from '@mui/material';
import './Todo.css';
import React from 'react';


function Todo(props) {
  return (
    <div className='main-div'>
        <List>
            <ListItem>
                <ListItemText primary={props.text} secondary="DeadLine"/>
                <Button onClick={() => props.onSelect(props.id)} >Delete ToDo</Button>
                
            </ListItem>
        </List>
    </div>
  )
}

export default Todo