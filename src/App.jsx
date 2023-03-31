import { Body } from "./Components/Body/index.jsx";
import {Header} from "./Components/Header/index.jsx"
import "./app.css"

function App() {
  return (
    <div className="App">
       <Header/>
       <div className="body">
       <Body/>
       </div>
       
    </div>
  );
}

export default App;
