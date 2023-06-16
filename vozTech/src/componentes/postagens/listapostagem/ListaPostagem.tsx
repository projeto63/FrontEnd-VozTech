import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca, buscaId } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography, CardMedia, Avatar } from '@material-ui/core';
import {Box, Grid} from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import User from '../../../models/User';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    foto: '',
    nome: '',
    usuario: '',
    senha: '',
    postagem: null,
  });

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

  async function getUsuario() {
    try {
      await buscaId(`/usuarios/${usuario.id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuario();
  }, []);

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
    {posts.length === 0 && <div className='alinhamento'><span className="loader"></span></div>}
      {
        posts.map(post => (
          <Box m={2} className="containerposts">
            <Grid container direction='row' justifyContent = 'center' maxWidth={600} className="gridprincipal"> 
            <Grid>
            <Card variant="outlined" className='card1' >
              <CardContent >
              
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
                <Box display="flex" alignItems="center" mb={1}>
              <Avatar
              src={post.usuario.foto}
              style={{ border: '1px solid black' }}
              alt="" className="fotoPosts"
            />
              <Typography variant="body2" component="p" className="postado">
              Postado por: {post.usuario?.nome}
            </Typography>
            </Box>
                <CardActions>
                <Box display="flex" justifyContent="center" mb={0}>

                 
                </Box>
              </CardActions>
              </CardContent>

            </Card>
            </Grid>
            </Grid>
          </Box> 
        ))
      }
    </>
  )
}

export default ListaPostagem;