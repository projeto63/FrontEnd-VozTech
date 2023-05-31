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
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>
              <Link to="/perfil">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    perfil
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor" onClick={logout}>
                <Typography variant="h6" color="inherit">
                  logout
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