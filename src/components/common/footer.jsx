import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Email, Phone } from "@mui/icons-material";

const Footer = () => {
  const dummyData = [
    {
      title: "ONLINE SHOPPING",
      items: [
        {
          label: "Men’s T-Shirts",
          link: "#",
        },
        {
          label: "Winter Collections",
          link: "#",
        },
        {
          label: "Women’s Wear",
          link: "#",
        }, {
          label: "Winter Collections",
          link: "#",
        }, {
          label: "Hooded T-Shirts",
          link: "#",
        }, {
          label: "Streetwear Collections",
          link: "#",
        },
      ],
    },
    {
      title: "CUSTOMER POLICIES",
      items: [
        {
          label: "About Us",
          link: "#",
        },
        {
          label: "Terms & Conditions",
          link: "#",
        },
        {
          label: "Shipping & Returns Policy",
          link: "#",
        }, {
          label: "Cancellation & Refund Policy",
          link: "#",
        },
        {
          label: "Contact Us",
          link: "#",
        },],
    },
  ];

  return (
    <footer>
      <Box className='container'
        sx={{
          borderTop: "1px solid #eee",
        }}
      >
        <Grid container spacing={2} pb={5} pt={7}>
          <Grid item xs={6} sm={3} >
            <Typography variant="body1" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
            </Typography>
            <Grid container spacing={2} mt={0} >
              <Grid item >
                <Box className={'productSize'} >
                  <img src="/img/social/f.png" alt="facebook" />
                </Box>
              </Grid>
              <Grid item >
                <Box className={'productSize'} >
                  <img src="/img/social/t.png" alt="twitter" />
                </Box>
              </Grid>
              <Grid item >
                <Box className={'productSize'} >
                  <img src="/img/social/i.png" alt="insta" />
                </Box>
              </Grid>
              <Grid item >
                <Box className={'productSize'} >
                  <img src="/img/social/l.png" alt="linkdin" />
                </Box>
              </Grid>
              <Grid item >
                <Box className={'productSize'} >
                  <img src="/img/social/p.png" alt="p" />
                </Box>
              </Grid>

            </Grid>
          </Grid>
          {dummyData.map((item) => (
            <Grid item xs={6} sm={3} key={item.title}>
              <Typography className="footerTitle" variant="body2" gutterBottom>
                {item.title}
              </Typography>
              <ul>
                {item.items.map((subItem) => (
                  <li key={subItem.label}>
                    <a href={subItem.link}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          <Grid item xs={6} sm={3} >
            <Typography className="footerTitle" variant="body2" gutterBottom>
              STORE INFORMATION
            </Typography>
            <ul>

              <li style={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ color: 'gray', pr: 1 }} /> <a href='#'>Lorem Ipsum is simply dummy text </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ color: 'gray', pr: 1 }} /> <a href='#'>Call Us: 1234567890 </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ color: 'gray', pr: 1 }} /> <a href='#'>Email Us: info@yourmail.com</a>
              </li>

            </ul>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
