import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TodoTask } from '../../app/models/TodoTask';

interface Props {
    onTaskCreated: (createdTask: TodoTask) => void;
    cancelCreate: () => void;
}

export default function CreateTask({onTaskCreated, cancelCreate}: Props) {
    const initialFormData = Object.freeze({
        id: 10,
        name: "Task Nname",
        description: "Taskkk description"
    });
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const taskToCreate = {
            id: formData.id,
            name: formData.name,
            description: formData.description,
        };

        const url = 'http://localhost:5044/api/Task/createTask';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskToCreate),
        })
        .then(response => response.json())
        .then(responseFromServer => {
            console.log(responseFromServer);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });

        onTaskCreated(taskToCreate);
    };


    // const handleSubmit = (event: any) => {
    //     event.preventDefault()
    //     fetch('http://localhost:5044/api/Task/createTask')
    // }

  return (
    <>
        <Box>
            <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                Create Task
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        {/* <TextField name='Taskname' label='Task name' /> */}
                        {/* value={formData.Taskid} */}
                        <label>Task Id</label>
                        <input value={formData.id} type="number" name="id" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {/* <TextField name='Taskname' label='Task name' /> */}
                        {/* value={formData.Taskname} */}
                        <label>Task Name</label>
                        <input value={formData.name} type="text" name="name" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {/* <TextField name='Taskdescription' label='Task description' /> */}
                        {/* value={formData.Taskdescription} */}
                        <label>Task Description</label>
                        <input value={formData.description} type="text" name="description" onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Button onClick={cancelCreate} variant='contained' color='inherit'>Cancel</Button>
                <Button type='submit' onClick={handleSubmit} variant='contained' color='inherit'>Create</Button>
            </form>
        </Box>
    </>
  )
}
