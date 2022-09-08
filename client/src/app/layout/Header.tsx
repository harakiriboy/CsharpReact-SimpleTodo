import { AppBar, Box, Button, FormControlLabel, IconButton, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    darkMode: boolean;
    handleMode: () => void;
}

export default function Header({handleMode, darkMode}: Props) {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <FormControlLabel control={<Switch checked={darkMode} onChange={handleMode} />} label="Mode"/>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
  )
}
