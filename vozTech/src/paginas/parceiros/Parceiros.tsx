import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Parceiros.css';

function Parceiros() {
  return (
    <>
      <Grid container flexDirection={'column'}>
        <div className="containerParceiros">
          <a
            href="https://front-end-projeto-integrador.vercel.app/"
            target="_blank"
            className="linkParceiros"
          >
            <img src="https://i.imgur.com/DMJSJjx.jpg" alt="Logo" />
          </a>
          <div className="containerTextoParceiros">
            <h5>Terra Verde</h5>
            <p>
              Nossa missão é conectar produtores agrícolas, consumidores
              conscientes e ONGs comprometidas com a sustentabilidade.
              Eliminamos intermediários tradicionais para oferecer produtos
              agrícolas de alta qualidade a preços acessíveis. Valorizamos
              alimentos "fora do padrão" que são desperdiçados pelas grandes
              redes de supermercados, dando-lhes a oportunidade de chegar até
              você. Além disso, proporcionamos cursos de agricultura
              sustentável, promovendo conhecimentos valiosos sobre práticas
              agrícolas responsáveis. Oferecemos opções de compra online e
              retirada pessoal, garantindo conveniência aos usuários. Junte-se a
              nós para fortalecer a comunidade, reduzir o desperdício de
              alimentos e promover uma economia local justa. Junte-se à essa
              causa e faça parte dessa mudança!
            </p>
          </div>
        </div>
        <div className="containerParceiros">
          <a
            href="http://pudim.com.br/"
            target="_blank"
            className="linkParceiros"
          >
            <img
              src="https://ik.imagekit.io/projetovoztech/Imagem_do_WhatsApp_de_2023-05-31_%C3%A0_s__10.32.02.jpg?updatedAt=1685671580852"
              alt="Fazenda"
            />
          </a>

          <div className="containerTextoParceiros">
            <h5>IncluiJobs</h5>
            <p>
              O objetivo do projeto é criar uma rede social que conecte grupos
              de pessoas que enfrentam dificuldades para ingressar ou
              reingressar no mercado de trabalho, como pessoas LGBTQIA+,
              mulheres, pessoas negras ou pardas, pessoas com deficiência,
              ex-presidiários, entre outros, com empresas que possuem vagas
              voltadas para esses grupos. A ideia é criar uma plataforma
              inclusiva e acessível para que essas pessoas possam encontrar
              oportunidades e se conectar com outras pessoas em situações
              similares.
            </p>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Parceiros;