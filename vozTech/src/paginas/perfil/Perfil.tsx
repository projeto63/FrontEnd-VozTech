import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Perfil.css';
import { Grid, Typography, Avatar, Box, Button, Accordion, AccordionDetails, AccordionSummary, TextField, } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import User from '../../models/User';
import { buscaId, post, put } from '../../services/Service';
import { toast } from 'react-toastify';

function Perfil() {
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
    <div className="perfilContainer">
      <div className="perfilBanner">
        <div>
          <h2>Perfil de: {usuario.nome}</h2>
          <p>{usuario.usuario}</p>
          <p>Total de postagens feitas: {usuario.postagem?.length}</p>
        </div>
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />
      </div>
      <div className="perfilUpdate">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" style={{ margin: '0 auto' }}>
              Atualizar Perfil
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={atualizar}>
              <Box
                display={'flex'}
                width={'100%'}
                flexDirection={'column'}
                gap={2}
              >
                <TextField
                  name="nome"
                  label="Nome completo"
                  value={usuario.nome}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="usuario"
                  label="Endereço de e-mail"
                  disabled
                  value={usuario.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="foto"
                  label="URL da foto"
                  value={usuario.foto}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="senha"
                  label="Senha"
                  type="password"
                  value={usuario.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="confirmarSenha"
                  label="Confirmar senha"
                  type="password"
                  value={confirmarSenha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    confirmSenha(event)
                  }
                />
              <Button fullWidth variant={'contained'} type='submit'>Atualizar</Button>
              </Box>
            </form>
          </AccordionDetails>
        </Accordion>
      </div>
      <hr />
      <h3 style={{ textAlign: 'center' }}>Suas postagens</h3>
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
    </div>
  );
}

export default Perfil;