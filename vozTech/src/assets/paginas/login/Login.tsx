import React, {ChangeEvent, useState, useEffect} from "react";
import "./Login.css";
import Logo from "../../imagens/voztech1.png" 
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../../models/UserLogin'
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../../services/Services'

function Login(){
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token'); //faz o controle do token dentro do localStorage
    const[userLogin, setUserLogin] = useState<UserLogin>({
  
      id: 0,          //valores zerados, pois não foi feito nenhum cadastro/login
      usuario: '',
      senha: '',
      token: '' 
    }
      )
  
      function updatedModel(e: ChangeEvent<HTMLInputElement>){
  
        setUserLogin({
          ...userLogin,
          //[e.target.name] : se referindo ao nome do campo, no caso onde será feia a mudança -> captura a propriedade
          // e.target.value : é o valor que é alterado de fato no momento que o usuário digitar algo -> captura o valor digitado
          [e.target.name]: e.target.value    //é utilizada para atualizar a model com o valor que o usuário digitar no campo de input | é um objeto com chave e valor [] representa o nome do campo e value -> o valor que o usuário digitou
        })
  
      }
  
      useEffect(()=>{                 
          if (token != ''){           
            navigate('/home')
          }                
      }, [token])                           
  
      async function onSubmit(e: ChangeEvent<HTMLFormElement>){
          e.preventDefault(); //impede que o botão atualize a tela
          try{
              await login(`/usuarios/logar`, userLogin, setToken)           //resposta da requisição da API
              // setToken(resposta.data.token) //responsável por gravar o token que vem da API no localStorage
  
              alert('Usuário logado com sucesso!');
          }catch(error){
              alert('Dados do usuário inconsistentes. Erro ao logar!')
          }
          // console.log('userLogin ' + Object.values(userLogin))                //verifica se os dados inseridos em login estão corretos - foi feito só para teste 
      }



    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="imagem">
                <Grid alignItems="center" item xs={8}>
                    <Box paddingX={20} className="formulario" justifyContent="center">
                    <form onSubmit={onSubmit}>
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Entrar</Typography>
                            <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                            <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                            <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" color="primary">
                                    Logar
                                </Button>
                            </Box>
                        </form>
                        <Box display="flex" justifyContent="center" marginTop={2}>
                            <Box marginRight={1}> 
                                <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                            </Box>
                            <Link to = "/cadastro">
                                <Typography variant="subtitle1" gutterBottom align="center" className="textos1">Cadastre-se </Typography>
                        </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Login 