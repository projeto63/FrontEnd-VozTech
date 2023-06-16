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
                    <Box>
                        <img src="/src/assets/logo-bege.svg" alt="" />
                    </Box>
                </Grid>
                <Grid alignItems="center" direction='column' justifyContent='center' container xs={4}>
                    <Box marginBottom={2} display='flex' gap={2}>
                        <a href="https://github.com/projeto63">
                        <GitHubIcon className='iconeInd1' />
                        </a>
                        <a href="https://linktr.ee/voztech">
                        <LinkedInIcon className='iconeInd2' />
                        </a>
                    </Box>
                        <Typography className="frasefooter">Projeto VozTech</Typography>
                        <Typography className="frasefooter">Em parceria com Generation Brasil</Typography>
                </Grid>
                <Grid alignItems="center"  justifyContent='center' container xs={4}>
                    <Box display='flex' gap={1}>
						{/* <Link className='reset-link' to='/loja'>
							{/* <Box mx={1} style={{ cursor: 'pointer' }}>
							</Box> */}
						{/* </Link> */}
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