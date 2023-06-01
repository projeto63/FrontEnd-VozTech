<<<<<<< HEAD
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import './MinhasPostagens.css'
import { Grid, Typography, Avatar, Box, Button, Accordion, AccordionDetails, AccordionSummary, TextField, } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from 'react-toastify';
import { buscaId, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import User from '../../../models/User';

function MinhasPostagens() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    foto: '',
    nome: '',
    usuario: '',
    senha: '',
    postagem: null,
  });

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
    setUsuario({
      ...usuario,
      senha: ''
    })
  }, [usuario.usuario])

  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  async function atualizar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
      try {
        await put('/usuarios/atualizar', usuario, setUsuario, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Usuário cadastrado com sucesso', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setUsuario({ ...usuario, senha: '' });
        setConfirmarSenha('');
      } catch (error) {
        toast.error('Falha ao cadastrar o usuário, verifique os campos', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error('Os campos de Senha e Confirmar Senha estão diferentes', {
        position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }
  }

  console.log(usuario);

  return (
      <div className="perfilPosts">
        {usuario.postagem?.map((posts) => (
          <Grid
            item
            border={1}
            borderRadius={2}
            borderColor={'lightgray'}
            p={2}
          >
            <Typography>Postagem:</Typography>
            <Typography>{posts.titulo}</Typography>
            <Typography>{posts.texto}</Typography>
            <Avatar
              src={usuario.foto}
              style={{ border: '1px solid black' }}
              alt=""
            />
            <Typography>
              {new Intl.DateTimeFormat('pt-br', {
                dateStyle: 'full',
              }).format(new Date(posts.data))}
            </Typography>
            <Typography>Tema: {posts.tema?.descricao}</Typography>
            <Box display={'flex'} gap={4}>
              <Link to={`/formularioPostagem/${posts.id}`}>
                <Button fullWidth variant="contained" color="primary">
                  editar
                </Button>
              </Link>
              <Link to={`/apagarPostagem/${posts.id}`}>
                <Button fullWidth variant="contained" color="secondary">
                  apagar
                </Button>
              </Link>
            </Box>
          </Grid>
        ))}
      </div>
  );
}

export default MinhasPostagens;
=======
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './MinhasPostagens.css';
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
            <Card variant="outlined">
            <Typography variant="body2" component="p">
              Postado por: {post.usuario?.nome}
            </Typography>
              <CardContent>
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
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;
>>>>>>> ae33ce2b4e13fcf4b7d73c67f58ff105f70556e8
