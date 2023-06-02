import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../componentes/postagens/modalpostagem/ModalPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import { Sidebar } from 'react-pro-sidebar';
import Cards from '../../componentes/estaticos/cards/Cards';
import ListaPostagem from '../../componentes/postagens/listapostagem/ListaPostagem';
import Carousel from '../../assets/carrosel/Carousel';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
            });
            navigate("/login")

        }
    }, [token])
    return (
        <>
        
        <Carousel/>
        
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
            
                {/* <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid> */}
                    <Grid xs={12} className='buttons'>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/postagens" className='text-decoration-none'>
                            <Button variant="outlined" className='botaopostagens'>Ver Postagens</Button>
                        </Link>
                    </Box>
                    </Grid>
                    <ListaPostagem/>
            </Grid>
            <Grid xs={12} className='postagens'>
                
                </Grid>
        </> 
        
    );
    
}

export default Home;