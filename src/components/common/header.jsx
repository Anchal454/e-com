import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const pages = ["Home", "Products", "Blog", "About US"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ background: 'white', color: '#000' }}>
            <Container maxWidth="xl" className='container'>
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <img src={`${process.env.PUBLIC_URL}/img/icon/responsive.png`} alt="responsive" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO HERE
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Search" >
                            <IconButton sx={{ p: 0, mx: 1.5, display: { xs: "none", md: 'inline' } }}>
                                <img src="/img/icon/search.png" alt="search" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Wish list" >
                            <IconButton sx={{ p: 0, mx: 1.5 }}>
                                <img src="/img/icon/wishlist.png" alt="Wish list" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open Cart" >
                            <IconButton sx={{ p: 0, mx: 1.5 }}>
                                <img src="/img/icon/cart.png" alt="cart" />                         </IconButton>
                        </Tooltip>
                        <Tooltip title="User" >
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 1.5 }}>
                                <img src="/img/icon/user.png" alt="user" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;