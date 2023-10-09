import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, Fab, Grid } from '@mui/material';

export default function ProductCard({ item }) {
    return (
        <>

            <Card sx={{ maxWidth: 345, borderRadius: 'unset', boxShadow: 'none' }} className='productCards'>
                <Box>
                    <CardMedia
                        sx={{ position: 'relative' }}
                        component="img"
                        height="110"
                        image={item.image || "/img/p-1.png"}
                        alt="green iguana"
                        className='cardMedia'
                    />
                    <div class="fadedbox">
                        <div class="title text">
                            <Grid container spacing={2} mt={0} alignItems={'center'} justifyContent={'center'}>
                                <Grid item >
                                    <Fab color="secondary" p={2}>
                                        <img src="/img/icon/cart.png" alt="cart" className='hoverImageCard' />
                                    </Fab>
                                </Grid>
                                <Grid item >
                                    <Fab color="secondary">
                                        <img src="/img/icon/wishlist.png" alt="Wish list" className='hoverImageCard' />
                                    </Fab>
                                </Grid>
                                <Grid item >
                                    <Fab color="secondary">
                                        <img src="/img/icon/user.png" alt="user" className='hoverImageCard' />
                                    </Fab>
                                </Grid>

                            </Grid>
                        </div>
                    </div>
                    <CardContent>
                        <Typography variant="subtitle1" textAlign={'center'}>
                            {item.title}
                        </Typography>
                        <Typography variant="subtitle1" textAlign={'center'}>
                            {item.description}
                        </Typography>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Typography variant="h6" fontWeight={'bold'} textAlign={'center'}>
                                ₹{item.price}
                            </Typography>
                            <Typography color={'error'}> <s>{item.oldPrice}</s></Typography>
                        </Box>
                        <Grid container spacing={2} mt={0} alignItems={'center'} justifyContent={'center'}>
                            {item.size.map((s) =>
                                <Grid item >
                                    <Box className={'productSize'} sx={{ border: 1, }}>
                                        <span>{s}</span>
                                    </Box>
                                </Grid>
                            )}

                        </Grid>
                    </CardContent>
                </Box>
            </Card >
        </>
    );
}