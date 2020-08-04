import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import DadosIniciais from './data/dados_marcao.json';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import PaginaCadastroVideo from './pages/cadastro/video';
import PaginaPadrao from './pages/padrao';

function App() {
  return (
    <div className="App">
      <PaginaPadrao>
      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Teste"}
      />
      <Carrousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
        />
      
      <Carrousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
        />
      <Carrousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[2]}
        />
      </PaginaPadrao>

    </div>
  );
}

export default App;
