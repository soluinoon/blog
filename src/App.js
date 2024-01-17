import './App.css';
import Article from './component/Article';
import Navigator from './component/Navigator';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Sidebar />
      <Article />
    </div>
  );
}

export default App;
