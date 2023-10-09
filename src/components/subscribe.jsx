import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup } from "@mui/material";

const Subscribe = ({ height, image }) => {
    return (
        <><section >
            <div className='container' >
                <div className='subscribe'>
                    <Box sx={{
                        height: "35vh",
                        backgroundImage: `url(${"/img/banner/mask.png"})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        textAlign: 'center',
                        color: '#fff',
                        py: 7,
                    }}>


                        <Box mt={3} >
                            <Typography mb={5} variant='h2'>Subscribe to get updates on exciting offers <br />
                                & deals</Typography>
                            <FormGroup row display={'flex'} sx={{ justifyContent: 'center' }} textAlign='center'>
                                <StyledTextField variant="outlined" placeholder="username" />
                                <StyledButton variant="contained" color={'secondary'}>
                                    Subscribe
                                </StyledButton>
                            </FormGroup>
                        </Box>
                    </Box>
                </div>
            </div>
        </section>

        </>
    )
}

export default Subscribe

const StyledTextField = ({ variant, placeholder }) => {
    return (
        <TextField
            // fullWidth
            variant={variant}
            placeholder={placeholder}
            sx={{
                width: '40%',
                "& fieldset": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                },
                background: ' #FFFFFF52',
                '& input': {
                    color: '#fff',
                },
                '& :hover': {
                    borderColor: '#FFFFFF52'
                }
            }}
        />
    );
};

const StyledButton = ({ variant, children, color }) => {
    return (
        <Button
            variant={variant}
            disableElevation
            color={color}
            sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                textTransform: 'capitalize',
                px: 5,
                fontFamily: ' Playfair Display',
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '29px',
                letterSpacing: '0em',
                textAlign: 'center',

            }}
        >
            {children}
        </Button >
    );
};