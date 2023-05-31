import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box, Grid} from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const navigate = useNavigate();
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
    {posts.length === 0 && <div className='alinhamento'><span className="loader"></span></div>}
      {
        posts.map(post => (
          <Box m={2} >
            <Grid container direction='row' justifyContent = 'center' maxWidth={990}> 
            <Card variant="outlined" className='card1' >
              <CardContent >
              <Typography variant="body2" component="p">
              Postado por: {post.usuario?.nome}
            </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
                <CardActions>
                <Box display="flex" justifyContent="center" mb={0}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={0} justifyContent = 'center'>
                      <Button variant="contained" className="botaopost1" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className='botaopost2'>
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
              </CardContent>

            </Card>
            </Grid>
             </Box> 
        ))
      }
    </>
  )
}

export default ListaPostagem;