import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux/es/exports';
import { toast } from 'react-toastify';


function DeletarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [tema, setTema] = useState<Tema>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
          toast.error("Você precisa estar logado", {
            position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
        });
            navigate("/login")
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                "Authorization": token
            }
        })
    }

    function sim() {
      navigate('/temas')
        deleteId(`/temas/${id}`, {
          headers: {
            'Authorization': token
          }
        });
        toast.success("Tema deletado com sucesso", {
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
    
      function nao() {
        navigate('/temas')
      }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;