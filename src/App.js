import './App.css';
import {useEffect} from "react";
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
// import Button from './components/Button/Button';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

// const tlg = window.Telegram.WebApp;

function App() {
  const {tlg, onToggleButton} = useTelegram();

  useEffect(() => {
    tlg.ready();
  }, []);

  return (
    <div className="App">
    <Header />
      {/* <Button onClick={onToggleButton}>Toggle</Button> */}
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>

      </Routes>
    </div>
  );
}

export default App;
