import React, { useState, useEffect, ChangeEvent } from "react";
import "./CadastroUsuario.css";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { cadastroUsuario } from "../../services/Service";
import User from "../../models/User";
import { toast } from "react-toastify";

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
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
                    await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
                    toast.success("Usuário cadastrado com sucesso", {
                        position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                    });
                } catch (error) {
                    toast.error("Falha ao cadastrar usuário, verifique os campos", {
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
                toast.error("Os campos de Senha e Confirmar Senha estão diferentes", {
                    position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                });
                setUser({ ...user, senha: "" });
                setConfirmarSenha("")
            }
        } else {
            toast.error("Os campos de Senha e Confirmar Senha precisam de, no mínimo, 8 caracteres", {
                position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
            });
            setUser({ ...user, senha: "" });
            setConfirmarSenha("")
        }
    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className="imagem2">
            <Grid item xs={8} alignItems="center">
                <Box paddingX={20} className="formulario2" justifyContent="center">
                    <form onSubmit={onSubmit}>
                        <Box className="ajuste">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2">Cadastrar</Typography>
                        <TextField className="espaco" value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome completo"  name="nome" margin="normal" fullWidth />
                        <TextField className="espaco" value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Endereço de e-mail" variant="outlined" name="usuario" margin="normal" fullWidth />
                        {/* <TextField className="espaco" value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto" label="URL da Foto" variant="outlined" name="foto" margin="normal" fullWidth /> */}
                        <TextField className="espaco" value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <TextField className="espaco" value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="Confirmar Senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decoration-none">
                                <Button variant="contained" color="secondary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary" className="btnCadastro">
                                Cadastrar
                            </Button>
                        </Box>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario