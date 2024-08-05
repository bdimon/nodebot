import './App.css';
import {useEffect} from "react";
const tlg = window.Telegram.WebApp;
// window.Telegram.WebApp.

function App() {

  useEffect(() => {
    tlg.ready();
  }, []);

  const onClose = () => {
  tlg.close();
  }

  return (
    <div className="App">
      Work<br></br>
     <br></br>
    <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
