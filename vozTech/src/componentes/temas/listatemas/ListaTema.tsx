import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token ==""){
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

  function getTema() {
    busca("/temas", setTemas, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(()=>{
    getTema()
  }, [temas.length])
 
  return (
    <>
    {temas.length === 0 && <div className='alinhamento'><span className="loader"></span></div>}
    {
      temas.map(tema =>(
      <Box m={2} className="margemtemas">
        <Card variant="outlined" className="card3">
          <CardContent className="ajusteTema">
            <Typography color="textSecondary" gutterBottom className="temacard">
              Tema
            </Typography>
            <Typography variant="h5" component="h2" className="temaprincipal">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex"  alignItems='center' >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className="botaopostagens" >
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box >
                  <Button variant="contained" size='small' className="botaopost2">
                    Deletar
                  </Button>

                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;