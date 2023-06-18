import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import './MinhasPostagens.css'
import { Grid, Typography, Avatar, Box, Button, Accordion, AccordionDetails, AccordionSummary, TextField, } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from 'react-toastify';
import { buscaId, post, put } from '../../../services/Service';
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
            className="cardmeusposts"
          >
            <Typography className="postagemmeusposts">Postagem</Typography>
            <Typography className="fontemeusposts">{posts.titulo}</Typography>
            <Typography className="fontemeusposts">{posts.texto}</Typography>
            <Typography className="temameusposts">Tema: {posts.tema?.descricao}</Typography>
            <Avatar
              src={usuario.foto}
              style={{ border: '1px solid black' }}
              alt=""
            />
            <Typography className="dataposts">
              {new Intl.DateTimeFormat('pt-br', {
                dateStyle: 'full',
              }).format(new Date(posts.data))}
            </Typography>
            <Box display={'flex'} gap={4}>
            <Link to={`/formularioPostagem/${posts.id}`} className="text-decorator-none" >
                    <Box mx={0} justifyContent = 'center'>
                      <Button variant="contained" className="botaopost3" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${posts.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className='botaopost4'>
                        Deletar
                      </Button>
                    </Box>
                  </Link>
            </Box>
          </Grid>
        ))}
      </div>
  );
}

export default MinhasPostagens;
