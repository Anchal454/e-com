import React, { lazy } from 'react'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
const Hero = lazy(() => import('../hero'));
const IconBanner = lazy(() => import('../IconBanner'));
const SmallBanner = lazy(() => import('../smallBanner'));
const ProductCard = lazy(() => import('../ProductCard'));
const CardBanner = lazy(() => import('../CardBanner'));
const Pricing = lazy(() => import('../Pricing'));
const Support = lazy(() => import('../Support'));
const Subscribe = lazy(() => import('../subscribe'));

const data = [
    {
        title: 'Men Henley Neck',
        description: 'Full Sleeve Red Wine',
        image: '/img/p-1.png',
        price: "399",
        oldPrice: "1299",
        size: ['S', 'M', 'L', 'XL', 'XXL']
    }, {
        title: 'Men Henley Neck',
        description: 'Full Sleeve Red Wine',
        image: '/img/p-2.png',
        price: "399",
        oldPrice: "1299",
        size: ['S', 'M', 'L', 'XL', 'XXL']
    }, {
        title: 'Men Henley Neck',
        description: 'Full Sleeve Red Wine',
        image: '/img/p-3.png',
        price: "399",
        oldPrice: "1299",
        size: ['S', 'M', 'L', 'XL', 'XXL']
    }, {
        title: 'Men Henley Neck',
        description: 'Full Sleeve Red Wine',
        image: '/img/p-4.png',
        price: "399",
        oldPrice: "1299",
        size: ['S', 'M', 'L', 'XL', 'XXL']
    },
]
const Home = () => {
    return (
        <>
            <Hero />
            <IconBanner />
            <SmallBanner />
            <section>
                <div className='container'>
                    <Divider spacing={3} >
                        <Typography variant='h3' className='heading1' textAlign={'center'}>Trending T-Shirts</Typography></Divider>
                    <Grid container spacing={3} py={4}>
                        {data.map((dt) =>
                            <Grid item sm={6} lg={3}>
                                <ProductCard item={dt} />
                            </Grid>
                        )}
                        {data.map((dt) =>
                            <Grid item sm={6} lg={3}>
                                <ProductCard item={dt} />
                            </Grid>
                        )}

                    </Grid>
                    <Box justifyContent={'center'} display={'flex'} py={3}>
                        <Button color='primary' variant='contained' sx={{ borderRadius: '1px', py: 1.3, px: 6, fontSize: '17px' }}>View all</Button>
                    </Box>
                </div>
            </section>
            <section>
                <div className='container'>
                    <Divider spacing={3} >
                        <Typography variant='h3' className='heading1' textAlign={'center'}>Featured Products</Typography></Divider>
                    <Grid container spacing={3} py={4}>
                        {data.map((dt) =>
                            <Grid item sm={6} lg={3}>
                                <ProductCard item={dt} />
                            </Grid>
                        )}
                    </Grid>
                    <Box justifyContent={'center'} display={'flex'} py={3}>
                        <Button color='primary' variant='contained' sx={{ borderRadius: '1px', py: 1.3, px: 6, fontSize: '17px' }}>View all</Button>
                    </Box>
                </div>
            </section>
            <Hero height={'70vh'} image={'/img/banner/banner1.png'} />
            <section>
                <div className='container'>
                    <Divider spacing={3} >
                        <Typography variant='h3' className='heading1' textAlign={'center'}>New Products</Typography></Divider>
                    <Grid container spacing={3} py={4}>
                        {data.map((dt) =>
                            <Grid item sm={6} lg={3}>
                                <ProductCard item={dt} />
                            </Grid>
                        )}
                    </Grid>
                    <Box justifyContent={'center'} display={'flex'} py={3}>
                        <Button color='primary' variant='contained' sx={{ borderRadius: '1px', py: 1.3, px: 6, fontSize: '17px' }}>View all</Button>
                    </Box>
                </div>
            </section>

            <section>
                <div className='container'>
                    <Divider spacing={3} >
                        <Typography variant='h3' className='heading1' textAlign={'center'}>Best Selling Products</Typography></Divider>
                    <Grid container spacing={3} py={4}>
                        {data.map((dt) =>
                            <Grid item sm={6} lg={3}>
                                <ProductCard item={dt} />
                            </Grid>
                        )}
                    </Grid>
                    <Box justifyContent={'center'} display={'flex'} py={3}>
                        <Button color='primary' variant='contained' sx={{ borderRadius: '1px', py: 1.3, px: 6, fontSize: '17px' }}>View all</Button>
                    </Box>
                </div>
            </section>


            <CardBanner />

            <Hero height={'70vh'} image={'/img/banner/banner2.png'} />
            <Pricing />
            <Support />
            <Subscribe />
        </>
    )
}

export default Home