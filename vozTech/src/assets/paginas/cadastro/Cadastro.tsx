import React, { useState, useEffect, ChangeEvent } from "react";
import "./Cadastro.css";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { cadastro } from "../../../services/Services";
import User from "../../../models/User";

function Cadastro() {
    const navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<string>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })
    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user.senha.length >= 8) {
            if (confirmarSenha == user.senha) {
                try {
                    await cadastro("/usuarios/cadastrar", user, setUserResult);
                    alert("Usuário cadastrado com sucesso!")
                } catch (error) {
                    alert("Falha ao cadastrar usuário, verifique os campos")
                }
            } else {
                alert("Os campos de Senha e Confirmar Senha estão diferentes");
                setUser({ ...user, senha: "" });
                setConfirmarSenha("")
            }
        } else {
            alert("Os campos de Senha e Confirmar Senha precisam de, no mínimo, 8 caracteres");
            setUser({ ...user, senha: "" });
            setConfirmarSenha("")
        }
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem2"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box padding={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2">Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome completo" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Endereço de e-mail" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto" label="Foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="Confirmar Senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decoration-none">
                                <Button variant="contained" color="secondary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>


        </Grid>
    );
}

export default Cadastro