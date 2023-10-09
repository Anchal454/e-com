import { Image } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'


const Pricing = () => {
    return (
        <>
            <section>
                <Container className='container' maxWidth="xl">
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={4}>


                        <Grid item xs={6} lg={6} >
                            <Card sx={{ borderRadius: 'unset', boxShadow: 'none', background: '#CCCEA7', height: '100vh' }} >
                                <Box position={'relative'} className='bg-text'>
                                    <img src='/img/diamond.png' alt='diamond' className='img' style={{ width: '200px', height: '200px', paddingBottom: '2.5rem' }} />
                                    <Typography variant='h4' sx={{ mb: 2 }}>Hurry Up!</Typography>
                                    <Typography variant='h1' sx={{ my: 5 }}>85% OFF</Typography>
                                    <Typography variant='h5' sx={{ mb: 4 }}>Sale</Typography>

                                    <Button color='secondary' variant='outlined' size='large' >shop now</Button>
                                </Box>
                            </Card></Grid>
                        <Grid item xs={6} lg={6} >
                            <Card sx={{ borderRadius: 'unset', boxShadow: 'none', background: '#D6BEBE', height: '100vh' }} className='productCard'>
                                <Box position={'relative'} className='bg-text'>
                                    <img src='/img/discount.png' alt='discount' className='img' style={{ width: '200px', height: '200px', paddingBottom: '2.5rem' }} />
                                    <Typography variant='h4' sx={{ mb: 2 }}>Hurry Up!</Typography>
                                    <Typography variant='h1' sx={{ my: 5 }}>75% OFF</Typography>
                                    <Typography variant='h5' sx={{ mb: 4 }}>Sale</Typography>
                                    <Button color='secondary' variant='outlined' size='large' >shop now</Button>
                                </Box>
                            </Card></Grid>
                    </Grid>
                </Container>
            </section >

        </>
    )
}

export default Pricing