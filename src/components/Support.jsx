import { Image } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Support = ({ height, image }) => {
    return (
        <><section style={{ position: 'relative', background: '#F5F4F2' }} >
            <img src='/img/banner/Ellipse1.png' alt='Ellipse1' className='Ellipse Ellipse1' />
            <div className='container'>
                <Grid container spacing={2} py={5} sx={{ px: { xs: 0, lg: 10 } }} className='support'>
                    <Grid item xs={6} lg={3} textAlign={'center'}>
                        <img src={'/img/icon/return.png'} alt="iconBanner" />
                        <Typography py={2}>7 Days Return</Typography>
                    </Grid>
                    <Grid item xs={6} lg={3} textAlign={'center'}>
                        <img src={'/img/icon/quality.png'} alt="iconBanner" />
                        <Typography py={2}>Quality Products</Typography>
                    </Grid>
                    <Grid item xs={6} lg={3} textAlign={'center'}>
                        <img src={'/img/icon/safe.png'} alt="iconBanner" />
                        <Typography py={2}>Safe Payment</Typography>
                    </Grid>
                    <Grid item xs={6} lg={3} textAlign={'center'}>
                        <img src={'/img/icon/support.png'} alt="iconBanner" />
                        <Typography py={2}>24x7 Helpline</Typography>
                    </Grid>
                </Grid>
            </div>
            <img src='/img/banner/Ellipse2.png' alt='Ellipse1' className='Ellipse Ellipse2' />
        </section>

        </>
    )
}

export default Support