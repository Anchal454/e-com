import { Image } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const iconBannerData = [{
    title: 'Men’s T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/iconBanner1.png`
}, {
    title: 'Women’s Wear',
    image: `${process.env.PUBLIC_URL}/img/iconBanner2.png`
}, {
    title: 'Winter Collections',
    image: `${process.env.PUBLIC_URL}/img/iconBanner3.png`
}, {
    title: 'Hooded T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/iconBanner4.png`
}, {
    title: 'Polo Neck T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/iconBanner5.png`
}, {
    title: 'Full Sleeves T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/iconBanner6.png`
}]

const IconBanner = () => {
    return (
        <>
            <section>
                <Container className='container' maxWidth="xl">
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={2}>

                        {iconBannerData.map((item) =>
                            <Grid item xs={6} lg={2} key={item.name}>
                                <img src={item.image} alt="iconBanner" />
                                <Typography textAlign={'center'} >{item.title}</Typography>
                            </Grid>
                        )}

                    </Grid>
                </Container>
            </section>

        </>
    )
}

export default IconBanner