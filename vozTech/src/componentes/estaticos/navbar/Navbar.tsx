import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  const navigate = useNavigate();

  function logout() {
    alert('Usuário deslogado com sucesso');
    dispatch(addToken(''))
    navigate('/login');
  }

  let navbarComponent;

  if(token == '') {
    navbarComponent = (
<AppBar position="static" className="navbar">
        <Toolbar variant="dense" >
          <Grid container justifyContent={'space-between'} className='fonte'>
            <Box style={{ cursor: 'pointer' }}>

              <Typography variant="h5" color="inherit" className='fonte'>
                VozTech
              </Typography>

            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Página Inicial
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Cadastrar Tema
                  </Typography>
                </Box>
              </Link>
              <Link to="/sobrenos">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    Sobre Nós
                  </Typography>
                </Box>
              </Link>
              <Link to="/parceiros">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" color="inherit">
                    Parceiros
                  </Typography>
                </Box>
              </Link>
              <Link to="/perfil">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Perfil
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor" onClick={logout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;