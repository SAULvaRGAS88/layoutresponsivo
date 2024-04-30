import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDirecionaMidiaSocial = (url) => {
    window.open(url, '_blank');
  };

  const handleEnviarEmail = () => {
    const emailUrl = 'mailto:saulvargascosta@hotmail.com';
    console.log(emailUrl)
    window.location.href = emailUrl;
  };

  return (
    <div>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          backgroundColor: 'white',
          marginLeft: 7,
          boxShadow: '5px 5px 5px 5px rgba(255, 255, 255, 0.5)',
          fontWeight: 'bold'
        }}
      >
        <p style={{ textTransform: 'none', color: 'grey' }}>
          Faça Contato
        </p>

      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}

      >
        <MenuItem
          onClick={() => handleDirecionaMidiaSocial('https://www.linkedin.com/in/saul-vargas-68a97347/')}>
          Linkedin
          <LinkedInIcon
            sx={{ color: '#0e76a8', marginLeft: 1 }} />
        </MenuItem>

        <MenuItem
          onClick={() => handleDirecionaMidiaSocial('https://github.com/SAULvaRGAS88')}>
          GitHub
          <GitHubIcon
            sx={{ color: '#171515', marginLeft: 1 }} />
        </MenuItem>

        <MenuItem
          onClick={() => handleDirecionaMidiaSocial('https://wa.me/5551985027412')}>
          WhatssApp
          <WhatsAppIcon
            sx={{ color: '#25D366', marginLeft: 1 }} />
        </MenuItem>

        <MenuItem onClick={handleEnviarEmail}>
          Email
          <EmailIcon sx={{ color: 'grey', marginLeft: 1 }} />
        </MenuItem>
      </Menu>

    </div>
  );
}