import logo from './logo.svg';
import './App.css';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <div>
        <div className='heading-container'>
          <h1 className='heading'>Cycle Corner</h1>
          <h3>Choose from cycle corner</h3>
        </div>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
