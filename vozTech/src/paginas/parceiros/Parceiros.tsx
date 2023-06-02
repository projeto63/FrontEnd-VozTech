import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import './Parceiros.css';

function Parceiros() {
    return (
        <>
            <Box display='flex' alignItems='center' >
            </Box>
            <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>

                <Grid item xs={5}>
                    <Box display="flex" alignItems="center" justifyContent="center" className="imgposicao">
                        <img src="https://i.imgur.com/DMJSJjx.jpg" alt="Logo" className="img1" />
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <img src="https://ik.imagekit.io/projetovoztech/Imagem_do_WhatsApp_de_2023-05-31_%C3%A0_s__10.32.02.jpg?updatedAt=1685671580852" alt="Fazenda" className='img2'/>
                    </Box>
                </Grid>
                <Grid item xs={7} alignItems={'center'}>
                    <Box paddingX={10} className="margin">

                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='textTitle'> Terra Verde</Typography>
                        <Typography  gutterBottom  align='center' className='textStyle'> Nossa missão é conectar produtores agrícolas, consumidores conscientes e ONGs comprometidas com a sustentabilidade. Eliminamos intermediários tradicionais para oferecer produtos agrícolas de alta qualidade a preços acessíveis. Valorizamos alimentos "fora do padrão" que são desperdiçados pelas grandes redes de supermercados, dando-lhes a oportunidade de chegar até você. Além disso, proporcionamos cursos de agricultura sustentável, promovendo conhecimentos valiosos sobre práticas agrícolas responsáveis. Oferecemos opções de compra online e retirada pessoal, garantindo conveniência aos usuários. Junte-se a nós para fortalecer a comunidade, reduzir o desperdício de alimentos e promover uma economia local justa. Junte-se à essa causa e faça parte dessa mudança! </Typography>

                    </Box>
                    <Box paddingX={10} className="margin">

                        <Typography variant='h5' gutterBottom  align='center' className='textTitle'>Quem Somos Nos?</Typography>
                        <Typography  gutterBottom   align='center' className='textStyle'> Bem-vindo à nossa plataforma de E-commerce agrícola. Conectamos produtores e consumidores, eliminando intermediários. Aqui, você pode adquirir produtos agrícolas de alta qualidade diretamente dos produtores, a preços acessíveis. Valorizamos alimentos "fora do padrão" que estão em perfeitas condições de consumo. Além disso, oferecemos cursos de agricultura sustentável, proporcionando conhecimentos valiosos sobre práticas agrícolas responsáveis. Compras online com entrega em casa ou retirada pessoal estão disponíveis. Junte-se a nós para fortalecer a comunidade entre agricultores, consumidores conscientes e ONGs comprometidas com a sustentabilidade e a redução do desperdício de alimentos. Faça parte dessa iniciativa por uma economia local justa e um estilo de vida sustentável. </Typography>

                    </Box>
                </Grid>

            </Grid>
        </>
    )
} 

export default Parceiros;