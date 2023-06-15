import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import User from '../../../models/User'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { buscaId } from '../../../services/Service'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const SidebarMenu = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #ee9d66;
  position: fixed;
  top: 0;
  left: 0;
`

const MenuItems = styled.li`
  list-style: none;
  display: block;
  align-items: center;
  justify-content: start;
  width: 100%;s
  height: 90px;
  padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #000000;

  &:hover {
    background-color: #ffebd6;
    color: #654236;
    width: 50%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`

const Sidebar: React.FunctionComponent = () => {
  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens)
  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id)

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    foto: '',
    nome: '',
    usuario: '',
    senha: '',
    postagem: null,
  })

  async function getUsuario() {
    try {
      await buscaId(`/usuarios/${usuario.id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])

  useEffect(() => {
    setUsuario({
      ...usuario,
      senha: '',
    })
  }, [usuario.usuario])

  let sidebarComponent;

  if(token !== '') {
    sidebarComponent = (

    <Container>
      <Grid container>
        <Grid item xs={2}>
          <SidebarMenu className="sidebarmenu">
          <Box className="posilogoside">
              <img
                className="logoside"
                src="https://ik.imagekit.io/projetovoztech/vozTech-center.png?updatedAt=1685468716232"
                alt="Logo do projeto VozTech"
              />
            </Box>
            <div className="perfilBanner">
              <div>
                <h2>{usuario.nome}</h2>
                <p>{usuario.usuario}</p>
                <p>{usuario.nome}</p> 
                {/* <p>Total de postagens feitas: {usuario.postagem?.length}</p> */}
              </div>
              <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />
            </div>



            {SidebarData.map((item, index) => {
              return (
                <MenuItems key={index}>
                  <MenuItemLinks to={item.path} >
                    {item.icon}
                    <span style={{ marginLeft: '10px' }}>{item.title}</span>
                  </MenuItemLinks>
                </MenuItems>
              )
            })}
          </SidebarMenu>
        </Grid>
        <Grid item xs={10}>

        </Grid>
      </Grid>
    </Container>
  )

}

return (
  <>
  {sidebarComponent}
  </>
)
}
export default Sidebar;