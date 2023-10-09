import { Image } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const Hero = ({ height, image }) => {
    return (
        <>
            <Box sx={{
                height: height ?? "92vh",
                backgroundImage: `url(${image ?? "/img/banner/heroBanner.png"})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
            </Box>
        </>
    )
}

export default Hero