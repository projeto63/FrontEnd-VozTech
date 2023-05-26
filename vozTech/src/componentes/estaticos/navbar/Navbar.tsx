import React from 'react';
import { AppBar, Box, Link, Toolbar, Typography } from '../../../../node_modules/@material-ui/core/index';
import { useDispatch, useSelector } from '../../../../node_modules/react-redux/es/exports';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./Navbar.css"

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(""));
        alert("Usuário deslogado")
        navigate("/login")
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    VozTech
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                <Link to="/login" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                </Link>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
        {navbarComponent}
            
        </>
    )
}

export default Navbar;