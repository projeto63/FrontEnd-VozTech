import React from 'react';

import "./Footer.css";
import { Box, Grid, Link, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid  item xs={12} className="footer">
 
        <Box display={'flex'}  gap={2}  className='iconesFooter' alignItems={'center'}  justifyContent={'space-around'}>
        <Box className="nomefooter">
        <Typography className="itemsfooter" variant='h6'>Projeto VozTech</Typography>
        <Typography className="itemsfooter" variant='h6'>Em parceria com Generation Brasil</Typography>
        </Box>
        <Box mx={10} justifyContent='center' display='flex' alignItems='center' className="icones">
            <a href="https://github.com/projeto63/FrontEnd-VozTech" target='_blank'>
            <GitHubIcon className='iconeInd1' />
            </a>
            <a href="https://linktr.ee/projetovoztech"target='_blank' >
            <LinkedInIcon className='iconeInd2' />
            </a>
            </Box>

        </Box>
        </Grid>
        </Grid>
    }
    return (
        <>
        {footerComponent} 
        </>
    )
}

export default Footer;