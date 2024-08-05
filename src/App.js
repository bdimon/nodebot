import './App.css';
import {useEffect} from "react";
import { useTelegram } from './hooks/useTelegram';
// const tlg = window.Telegram.WebApp;
// window.Telegram.WebApp.

function App() {
  const {tlg, onToggleButton} = useTelegram();

  useEffect(() => {
    tlg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
