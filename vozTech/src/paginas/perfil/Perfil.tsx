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
import Cards from '../../componentes/estaticos/cards/Cards';

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
    <Grid className="background">
    <div className="perfilContainer">
      <div className="perfilBanner">
        <div>
          <h2>{usuario.nome}</h2>
          <p>{usuario.usuario}</p>
          <p>Total de postagens feitas: {usuario.postagem?.length}</p>
        </div>
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />
      </div>
      <Box className="formulario3">
      <Typography variant="h5" style={{ margin: '0 auto' }} display='flex' justifyContent='center' alignSelf='center' className="atualizarperfil">
              Atualizar Perfil
            </Typography>
      <div className="perfilUpdate">
            <form onSubmit={atualizar}>
              <Box
                display={'flex'}
                width={'100%'}
                flexDirection={'column'}
                gap={2}
              >
                <TextField
                  className="espacamento2"
                  name="nome"
                  label="Nome completo"
                  value={usuario.nome}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  className="espacamento2"
                  name="usuario"
                  label="Endereço de e-mail"
                  disabled
                  value={usuario.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  className="espacamento2"
                  name="foto"
                  label="URL da foto"
                  value={usuario.foto}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  className="espacamento2"
                  name="senha"
                  label="Senha"
                  type="password"
                  value={usuario.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  className="espacamento2"
                  name="confirmarSenha"
                  label="Confirmar senha"
                  type="password"
                  value={confirmarSenha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    confirmSenha(event)
                  }
                />
              <Button fullWidth variant={'contained'} type='submit' className="btnModal espacamento">Atualizar</Button>
              </Box>
            </form>
      </div>
      </Box>
    </div>
    </Grid>
  );
}

export default Perfil;