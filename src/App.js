import './App.css';
import {useEffect} from "react";
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
// const tlg = window.Telegram.WebApp;
// window.Telegram.WebApp.

function App() {
  const {tlg, onToggleButton} = useTelegram();

  useEffect(() => {
    tlg.ready();
  }, []);

  return (
    <div className="App">
    <Header />
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
