import { Delete, Edit } from '@mui/icons-material';
import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react'
import { TodoTask } from '../../app/models/TodoTask';

interface Props {
    task: TodoTask;
}

export default function TaskCard({task}: Props) {

    function editTask() {
        
    }

    function handleSelectTask() {

    }

  return (
    <>
        <ListItem key={task.id}>
            <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>
            <ListItemText>
                {task.name} - {task.description}
            </ListItemText>
            <ListItemText>
                <Button onClick={editTask} startIcon={<Edit/>}>Edit</Button>
            </ListItemText>
            <ListItemText>
                <Button onClick={editTask} startIcon={<Delete/>}>Delete</Button>
            </ListItemText>
        </ListItem>
    </>
  )
}
