import React, { ChangeEvent, useState, useEffect  } from "react";
import "./Login.css";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { addId, addToken } from "../../store/tokens/actions";
import { useDispatch } from "react-redux/es/exports";
import { toast } from "react-toastify";

function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            usuario: "",
            foto: "",
            senha: "",
            token: ""
        }
        )

        const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
            {
                id: 0,
                nome: "",
                usuario: "",
                foto: "",
                senha: "",
                token: "",
            }
        );

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if(token !== ""){
                dispatch(addToken(token))
                navigate("/home")
            }
        }, [token])
// dsd
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault();
            try{
                await login ("/usuarios/logar", userLogin, setRespUserLogin)
                
                toast.success('Usuário logado com sucesso', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }catch(error){
                toast.error("Usuário e/ou senha inválido! Tente novamente.", {
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
        }

        useEffect(() => {
            if (respUserLogin.token !== "") {
                dispatch(addToken(respUserLogin.token))
                dispatch(addId(respUserLogin.id.toString()))
                navigate("/home");
            }
        }, [respUserLogin.token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="imagem">
                <Grid alignItems="center" item xs={8}>
                    <Box paddingX={20} className="formulario" justifyContent="center">
                        <form onSubmit={onSubmit}>
                        <Box className="posicaologo">
                            <img className="logo" src="https://ik.imagekit.io/projetovoztech/vozTech-center.png?updatedAt=1685468716232"/>
                        </Box>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Entrar</Typography>
                            <Box className="espacologin">
                            <TextField className="espaco" value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                            <TextField className="espaco" value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                            </Box>
                            <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" className="botao">
                                    Logar
                                </Button>
                                
                            </Box>
                        </form>
                        <Box display="flex" justifyContent="center" marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                            </Box>
                            <Link to="/cadastrousuario">
                            <Typography variant="subtitle1" gutterBottom align="center" className="cadastrese" >Cadastre-se </Typography>
                            </Link>   
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Login;