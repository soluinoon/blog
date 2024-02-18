import './App.css';
import Article from './component/Article';
import Navigator from './component/Navigator';
import Sidebar from './component/Sidebar';
import { NavigatorProvider } from './component/NavigatorContext'; // NavigatorProvider 추가

function App() {
  return (
    <NavigatorProvider>
      <div className="App">
        <Navigator />
        <Sidebar />
        <Article />
      </div>
    </NavigatorProvider>
  );
}

export default App;
