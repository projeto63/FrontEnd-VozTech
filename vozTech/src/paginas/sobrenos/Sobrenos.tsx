import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import './Sobrenos.css'

function Sobrenos() {
return (

        <Grid>
            <Typography className="tituloprojeto" display='center' justifyContent='center' alignItems='center'> Projeto VozTech </Typography>

            
            <Box className="sobrenos" display={'flex'} textAlign={'center'} justifyContent={'space-around'} >
            <Typography> O VozTech é uma rede social que prioriza a comunidade e busca gerar oportunidades de profissionalização, além de enfrentar desafios sociais e de infraestrutura. Com base na meta 8.3 dos Objetivos de Desenvolvimento Sustentável da ONU, que visa reduzir substancialmente a proporção de jovens sem emprego, educação ou formação, nosso projeto tem como objetivo oferecer interações entre os usuários, fornecendo informações atualizadas sobre onde obter ajuda e parcerias disponíveis na comunidade.
            Nessa primeira versão, os usuários podem cadastrar, atualizar, publicar e excluir postagens relacionadas a temas e usuários, utilizando um sistema de CRUD. Além disso, o VozTech apresenta perfis personalizados, uma área de busca por cursos, oportunidades e contatos de canais de orientação e soluções de problemas. Desenvolvemos o sistema utilizando o Spring Boot para o back-end e o React para o front-end, garantindo uma experiência amigável e responsiva aos usuários. </Typography>
            </Box>
            <hr className="negocinho"></hr>
            <Typography className="conhecanossaequipe"> Conheça nossa equipe: </Typography>
            <Grid direction={'row'}>
            <Grid container direction='row' display={'flex'}>
                <Grid xs={12.6}>
                <Box className="fotoposicao" flexDirection="row">
              <a href="https://www.linkedin.com/in/adrianefelicio/" target= "_blank">
                <img className="fotoequipe" src="https://ik.imagekit.io/projetovoztech/DRI.png?updatedAt=1685666033015" alt="" />
              </a> 
            <Typography className="pitch">  Olá! Meu nome é Adriane, tenho 26 anos e sou desenvolvedora de software. Em 2022 entrei na Microsoft como analista de suporte técnico, desenvolvi habilidades como trabalho em equipe, persistência e mantive minha média de resolução de problemas acima de 97%. Através de alguns cursos desenvolvi conhecimento em python, Java, Typescript e react. Com isso estou pronta para colocar meus conhecimentos em práticas e me desenvolver ainda mais. </Typography>
            </Box>
            <Box className="fotoposicao" flexDirection="row">
              <a href="https://www.linkedin.com/in/bianca-melquiades/" target= "_blank">
                <img className="fotoequipe" src="https://ik.imagekit.io/projetovoztech/bia.png?updatedAt=1685666050366" alt="" />
              </a>
            <Typography className="pitch"> Bianca Melquiades é dedicada e ávida por aprendizado. Com 6 anos de experiência em eventos e desenvolvimento comercial, ela liderou projetos de criação de células de vendas e otimização de processos. Graduada em Processos Gerenciais e formada como Desenvolvedora Java Full Stack, Bianca tem expertise no desenvolvimento de sistemas, ciência de dados, inteligência artificial e melhoria de desempenho empresarial. Com habilidades em comunicação, análise de dados e relacionamento interpessoal, ela se destaca por sua capacidade de resolver problemas e buscar constantemente aprimoramento.</Typography>
            </Box>
            <Box className="fotoposicao" flexDirection="row">
              <a href="https://www.linkedin.com/in/bruna-santos-alencar-565a55193/" target= "_blank">
                <img className="fotoequipe" src="https://ik.imagekit.io/projetovoztech/bru.png?updatedAt=1685666033408" alt="" />
              </a>
            <Typography className="pitch">Olá, meu nome é Bruna, tenho 23 anos, sou mãe do Noah de 1 ano. Trabalhei com varejo, onde desenvolvi muita comunicação, organização e orientação aos detalhes. Depois de 1 ano, descobri minha gravidez, saí do emprego e me dediquei totalmente a minha família, mas decidi voltar ao mercado de trabalho como desenvolvedora, conheci a Generation e me formei como desenvolvedora java fullstack com conhecimentos em Java, SQL, STS e React. Estou empolgada para explorar novos desafios profissionais e contribuir com a sua empresa. Obrigada pela atenção.</Typography>
            </Box>
            <Box className="fotoposicao" flexDirection="row">
              <a href="https://www.linkedin.com/in/christian-bonetti-22648014/" target= "_blank">
                <img className="fotoequipe" src="https://ik.imagekit.io/projetovoztech/chris.png?updatedAt=1685666033275" alt="" />
              </a> 
            <Typography className="pitch" > Olá, sou o Christian, apaixonado por tecnologia desde criança. Cursei ensino médio técnico em informática, o que me deu uma base sólida. Tive a oportunidade de estagiar em uma clínica protética, onde ofereci suporte técnico e treinamento no software da empresa. Desenvolvi habilidades em trabalho em equipe, atenção aos detalhes e persistência. Também fiz um curso de desenvolvedor full stack, aprendendo Java, JavaScript, CSS, banco de dados e frameworks como Spring, Flutter e React. Minha trajetória é impulsionada pelo apoio dos meus pais, e minha formação técnica, estágio e curso me deram conhecimento e habilidades sólidas.</Typography>
            </Box>
            <Box className="fotoposicao" flexDirection="row">
              <a href="https://www.linkedin.com/in/gustavo-leal-traves/" target= "_blank">
                <img className="fotoequipe" src="https://ik.imagekit.io/projetovoztech/FOTO_DE_PERFIL_DA_GEEEN.png?updatedAt=1685666093960" alt="" />
              </a> 
            <Typography className="pitch"> Meu nome é Gustavo, tenho 24 anos e sou um profissional em transição de carreira. Trabalhei na área de auditoria médica, onde desenvolvi habilidades analíticas, resolução de problemas, atenção aos detalhes e o trabalho em equipe. Iniciei minha jornada acadêmica com o curso de História, mas decidi seguir minha paixão por tecnologia e inovação e comecei a estudar Análise e Desenvolvimento de Sistemas em 2022. Em março de 2023, comecei meu programa de formação na Generation Brasil, onde estou me capacitando em habilidades digitais para me tornar um desenvolvedor web completo. Sou movido por desafios e estou sempre em busca de novas oportunidades para aprender e crescer profissionalmente. Se você procura um profissional dedicado, curioso e capaz de se adaptar a novos desafios, estou aqui para contribuir com o sucesso da sua empresa. </Typography>
            </Box>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
)
}

export default Sobrenos;
