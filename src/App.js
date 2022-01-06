import { Sidebar } from "./Components/Sidebar";
import {Rightside} from './Components/Rightside'

function App() {
  return (
    <div className="wrapper">
      {/* this is main container that contains sidebar and rightside container */}
      <div className="main-container">
        <Sidebar/>
        <Rightside/>
      </div>
    </div>
  );
}

export default App;
