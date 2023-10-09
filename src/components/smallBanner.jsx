import { Image } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const smallBannerData = [{
    lg: 6,
    alt: 'Men’s T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/smallBanner1.png`
}, {
    lg: 6,
    alt: 'Women’s Wear',
    image: `${process.env.PUBLIC_URL}/img/smallBanner2.png`
}, {
    lg: 4,
    alt: 'Winter Collections',
    image: `${process.env.PUBLIC_URL}/img/smallBanner3.png`
}, {
    lg: 4,
    alt: 'Hooded T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/smallBanner4.png`
}, {
    lg: 4,
    alt: 'Polo Neck T-Shirts',
    image: `${process.env.PUBLIC_URL}/img/smallBanner5.png`
}]

const SmallBanner = () => {
    return (
        <>
            <section>
                <Container className='container' maxWidth="xl">
                    <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center" spacing={2}>
                        {smallBannerData.map((item) =>
                            <Grid item xs={6} lg={item.lg} key={item.name}>
                                <img src={item.image} alt={item.alt} />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </section>

        </>
    )
}

export default SmallBanner