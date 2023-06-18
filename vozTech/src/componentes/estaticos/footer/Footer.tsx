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
        footerComponent = 
        <Box display={'flex'} className='footer'>
            <Grid container direction="row" justifyContent='flex-end' alignItems="center">
                <Grid alignItems="center" justifyContent='center' container xs={4}>
                <Box className="frasefooter1">
                        <Typography className="frasefooter">Projeto VozTech</Typography>
                        </Box>
                </Grid>
                <Grid alignItems="center" direction='column' justifyContent='center' container xs={4}>
                    <Box marginBottom={2} display='flex' gap={2}>
                        <a href="https://github.com/projeto63" target='_blank'>
                        <GitHubIcon className='iconeInd1' />
                        </a>
                        <a href="https://linktr.ee/voztech"  target='_blank'>
                        <LinkedInIcon className='iconeInd2' />
                        </a>
                    </Box>
                </Grid>
                <Grid alignItems="center"  justifyContent='center' container xs={4}>
                    <Box display='flex' gap={1}>
                    <Box className="frasefooter1">
                        <Typography className="frasefooter">Em parceria com Generation Brasil</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Box>
    
    }
    return (
        <>
        {footerComponent} 
        </>
    )
}

export default Footer;