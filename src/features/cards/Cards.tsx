import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

export const Cards = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div style={{ border: '1px solid' }}>xs=12</div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ border: '1px solid' }}>xs=6</div>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ border: '1px solid' }}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ border: '1px solid' }}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ border: '1px solid' }}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ border: '1px solid' }}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper sx={{ border: '1px solid' }}>xs=3</Paper>
            </Grid>
        </Grid>
    )
}
