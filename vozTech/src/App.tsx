import { BrowserRouter as Router, Route, Routes} from '../node_modules/react-router-dom/dist/index';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './componentes/temas/listatemas/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastropost/CadastroPost';
import CadastroTema from './componentes/temas/cadastrotemas/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarpostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletartemas/DeletarTema';
import store from './store/store';
import { Provider, useSelector } from 'react-redux/es/exports';
import Perfil from './paginas/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from './componentes/estaticos/sidebar/Sidebar'
import MinhasPostagens from './componentes/postagens/meusposts/MinhasPostagens';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Parceiros from './paginas/parceiros/Parceiros';
import { TokenState } from './store/tokens/tokensReducer';


function App() {
  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens)
  return (
    <>
    <ToastContainer/>
    <Router>
    <Sidebar />
      


    <div className="apptsx" style={ token == ''?  {minHeight: '100vh'} : {minHeight: '100vh', width: 'calc(100vw-200px)', marginLeft: '200px' }}>
      <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/meusPosts' element={<MinhasPostagens />} />
          <Route path='/sobrenos' element={<Sobrenos />} />
          <Route path='/parceiros' element={<Parceiros/>} />

        </Routes>

        </div>
        <Footer />
        </Router>

    </>
  );
}

export default App;