import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import { busca, post } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Box, CardActions } from '@material-ui/core';

export default function ActionAreaCard() {
    const [posts, setPosts] = React.useState<Postagem[]>([])
    const navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    React.useEffect(() => {
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
  
    async function getPost() {
      await busca("/postagens", setPosts, {
        headers: {
          'Authorization': token
        }
      })
    }
  
    React.useEffect(() => {
  
      getPost()
  
    }, [posts.length])
   
    return ( 
        <>
        {posts.length === 1 && <div className='alinhamento'><span className="loader"></span></div>}
    {
      posts.map(post => (
        
        <Grid container direction='row' justifyContent = 'center' >
    <Card sx={{ maxWidth: 600 }} >
      <CardActionArea >
        <CardMedia 
          component="img"
          height="85"
          image="https://ik.imagekit.io/1vxpqo8ju/f5784df8611e6be967ed54fd609761c651797052c82bfd66bc6d40f642c32fb7_1__2_-removebg-preview.png?updatedAt=1684942228835"
          alt="chopper"
        />
        <CardContent>
        <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
        </CardContent>
        <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
      </CardActionArea>
    </Card> </Grid>
      ))
}
    </>
  );
}