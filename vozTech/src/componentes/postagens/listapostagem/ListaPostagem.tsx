import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
<<<<<<< HEAD
import { busca, buscaId } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography, CardMedia, Avatar } from '@material-ui/core';
=======
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
import {Box, Grid} from '@mui/material';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
<<<<<<< HEAD
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

=======

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
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

<<<<<<< HEAD
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

=======
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
    {posts.length === 0 && <div className='alinhamento'><span className="loader"></span></div>}
      {
        posts.map(post => (
          <Box m={2} >
<<<<<<< HEAD
            <Grid container direction='row' justifyContent = 'center' maxWidth={600}> 
            <Grid>
            <Card variant="outlined" className='card1' >
              <CardContent >
              
=======
            <Grid container direction='row' justifyContent = 'center' maxWidth={990}> 
            <Card variant="outlined" className='card1' >
              <CardContent >
              <Typography variant="body2" component="p">
              Postado por: {post.usuario?.nome}
            </Typography>
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
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
<<<<<<< HEAD
                <Box display="flex" alignItems="center" mb={1}>
                 <Avatar
              src={usuario.foto}
              style={{ border: '1px solid black' }}
              alt="" className="fotoPosts"
            />
              <Typography variant="body2" component="p">
              Postado por: {post.usuario?.nome}
            </Typography>
            </Box>
=======
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
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
<<<<<<< HEAD
               
=======
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
              </CardActions>
              </CardContent>

            </Card>
            </Grid>
<<<<<<< HEAD
            </Grid>
=======
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
             </Box> 
        ))
      }
    </>
  )
}

export default ListaPostagem;