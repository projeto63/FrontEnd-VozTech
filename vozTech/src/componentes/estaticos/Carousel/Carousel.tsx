// import React, { useEffect, useState } from 'react'
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import User from '../../../models/User';
// import Postagem from '../../../models/Postagem';
// import { buscaId } from '../../../services/Service';
// import { useSelector } from 'react-redux';
// import { TokenState } from '../../../store/tokens/tokensReducer';
// import { Grid, Typography, Avatar, Box, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// function Carousel() {
//   const token = useSelector<TokenState, TokenState['tokens']>(
//     (state) => state.tokens
//   );
//   const postId = useSelector<TokenState, TokenState['id']>((state) => state.id);
//   const [postagem, setPostagem] = useState<Postagem>({
//     id: +postId,
//     titulo: '',
//     texto: '',
//     foto: '',
//     data: '',
//     tema: null
//   });

//   async function getPostID() {
//     try {
//       await buscaId(`/postagens/${postagem.id}`, setPostagem, {
//         headers: {
//           Authorization: token,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   useEffect(() => {
//     getPostID();
//   }, []);



//   // site oficial https://maxmarinich.github.io/react-alice-carousel/#basic

//   const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

//   const items = [
//     <div className="Post">
//         {postagem.id(1)((post) => (
//           <Grid
//             item
//             border={1}
//             borderRadius={2}
//             borderColor={'lightgray'}
//             p={2}
//           >
//             <Typography>Postagem:</Typography>
//             <Typography>{post.titulo}</Typography>
//             <Typography>{post.texto}</Typography>
//             <Typography>
//               {new Intl.DateTimeFormat('pt-br', {
//                 dateStyle: 'full',
//               }).format(new Date(post.data))}
//             </Typography>
//             <Typography>Tema: {post.tema?.descricao}</Typography>
//             <Box display={'flex'} gap={4}>
//             </Box>
//           </Grid>
//         ))}
//       </div>,
//     <img src="https://github.com/julianalopesco.png" role="presentation" />,
//     <img src="https://github.com/alinesoglia.png" role="presentation" />,
//     <img src="https://github.com/alinesoglia.png" role="presentation" />,
//     <img src="https://github.com/alinesoglia.png" role="presentation" />,
//   ];

//   return (
//     <AliceCarousel mouseTracking items={items} autoPlay infinite responsive={responsive} />
//   )
// }

// export default Carousel

