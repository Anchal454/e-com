import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const data = [{
    image: '/img/cardBanner1.png',
    title: 'Streetwear Collections'
}, {
    image: '/img/cardBanner2.png',
    title: 'Striped T-Shirts'
}, {
    image: '/img/cardBanner3.png',
    title: 'Round Neck T-Shirts'
}, {
    image: '/img/cardBanner4.png',
    title: 'Printed T-Shirts'
}, {
    image: '/img/cardBanner5.png',
    title: 'Oversized T-Shirts'
}, {
    image: '/img/cardBanner6.png',
    title: 'Half Sleeves T-Shirts'
},]

export default function CardBanner() {
    return (
        <section>
            <div className='container'>
                <Grid container spacing={3} py={4}>
                    {
                        data?.map((item) => <Grid item lg={4} sm={6}>
                            <Card sx={{ borderRadius: 'unset', boxShadow: 'none' }} className='productCard'>
                                <Box position={'relative'}>
                                    <CardMedia
                                        sx={{ maxWidth: '100%!important', width: '100%' }}
                                        component="img"
                                        height="110"
                                        image={item.image || "/img/p-1.png"}
                                        alt={item.title}
                                    />
                                    <div class="content-box"><Typography variant='h5'>{item.title}</Typography></div>
                                </Box>
                            </Card></Grid>)
                    }
                </Grid>
            </div>
        </section>
    );
}