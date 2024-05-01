import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import '../menuModal/MenuModal.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const MenuModal = () => {

    const [open, setOpen] = useState(false);
    const [zoomLinkedIn, setZoomLinkedIn] = useState(false);
    const [zoomGitHub, setZoomGitHub] = useState(false);
    const [zoomWhatsApp, setZoomWhatsApp] = useState(false);
    const [zoomEmail, setZoomEmail] = useState(false);

    const handleMouseEnter = (icon) => {
        switch (icon) {
            case 'LinkedIn':
                setZoomLinkedIn(true);
                break;
            case 'GitHub':
                setZoomGitHub(true);
                break;
            case 'WhatsApp':
                setZoomWhatsApp(true);
                break;
            case 'Email':
                setZoomEmail(true);
                break;
            default:
                break;
        }
    };

    const handleMouseLeave = (icon) => {
        switch (icon) {
            case 'LinkedIn':
                setZoomLinkedIn(false);
                break;
            case 'GitHub':
                setZoomGitHub(false);
                break;
            case 'WhatsApp':
                setZoomWhatsApp(false);
                break;
            case 'Email':
                setZoomEmail(false);
                break;
            default:
                break;
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
        <div className='divModal'>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{
                    backgroundColor: 'transparent',
                    marginLeft: 7,
                    boxShadow: '5px 5px 5px 5px rgba(255, 255, 255, 0.5)',
                    fontWeight: 'bold',
                    margin: 0,
                    color: 'white'
                }}
                onClick={handleOpen}>
                <p style={{ textTransform: 'none', color: 'white' }}>
                    Faça Contato
                </p>
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-describedby="modal-modal-description"
            >
                <div className='modalContent'>
                    <p style={{ margin: 0, padding: 0 }}>Entre em Contato</p>

                    <div className='divBox'>
                        <LinkedInIcon
                            onMouseEnter={() => handleMouseEnter('LinkedIn')}
                            onMouseLeave={() => handleMouseLeave('LinkedIn')}
                            onClick={() => handleDirecionaMidiaSocial('https://www.linkedin.com/in/saul-vargas-68a97347/')}
                            sx={{
                                color: '#0e76a8',
                                fontSize: zoomLinkedIn ? 60 : 40,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                transform: zoomLinkedIn ? 'scale(1.2)' : 'scale(1)'
                            }}
                        />
                        <GitHubIcon
                            onMouseEnter={() => handleMouseEnter('GitHub')}
                            onMouseLeave={() => handleMouseLeave('GitHub')}
                            onClick={() => handleDirecionaMidiaSocial('https://github.com/SAULvaRGAS88')}
                            sx={{
                                color: '#171515',
                                fontSize: zoomGitHub ? 60 : 40,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                transform: zoomGitHub ? 'scale(1.2)' : 'scale(1)'
                            }}
                        />
                        <WhatsAppIcon
                            onMouseEnter={() => handleMouseEnter('WhatsApp')}
                            onMouseLeave={() => handleMouseLeave('WhatsApp')}
                            onClick={() => handleDirecionaMidiaSocial('https://wa.me/5551985027412')}
                            sx={{
                                color: '#25D366',
                                fontSize: zoomWhatsApp ? 60 : 40,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                transform: zoomWhatsApp ? 'scale(1.2)' : 'scale(1)'
                            }}
                        />
                        <EmailIcon
                            onMouseEnter={() => handleMouseEnter('Email')}
                            onMouseLeave={() => handleMouseLeave('Email')}
                            onClick={handleEnviarEmail}
                            sx={{
                                color: 'grey',
                                fontSize: zoomEmail ? 60 : 40,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                transform: zoomEmail ? 'scale(1.2)' : 'scale(1)'
                            }}
                        />
                    </div>
                    <div className='divBtnFechar'>
                        <Button
                            onClick={handleClose}
                            sx={{
                                backgroundColor: '#f44336',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                border: 'none',
                                cursor: 'pointer',
                                textTransform: 'none',
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#683c3b',
                                }
                            }}
                        >
                            Fechar
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
