import React, { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    focusedInput: {
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#654236",
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: "#654236",
        },
    },
}));

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens);
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
    });
    const classes = useStyles();

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            navigate('/login');
        }
    }, [token, navigate]);

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('tema ' + JSON.stringify(tema));

        if (id !== undefined) {
            console.log(tema);
            put(`/temas`, tema, setTema, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success('Tema atualizado com sucesso', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success('Tema cadastrado com sucesso', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
        back();
    }

    function back() {
        navigate('/temas');
    }

    return (
        <Box className="todo">
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" component="h1" align="center" className="corCadastreTema">

                    {id !== undefined ? 'Atualize ' : 'Cadastre '} seu Tema
                </Typography>
                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="descricao"
                    label="descricao"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                    className={classes.focusedInput}
                />
                <Box className="containerbotao">
                <Box className="botaocadpost">
                <Button type="submit" variant="contained" className="botaoCadastreTema" disabled={tema.descricao.length < 4}>
                    Cadastrar Tema
                </Button>
                </Box>
            </Box>
            </form>
        </Container>
        </Box>
    );
}

export default CadastroTema;
