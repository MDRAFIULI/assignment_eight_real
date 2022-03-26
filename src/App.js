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
      <div>
        <h1>Bonus number question solve:</h1>
        <h3>react kivabe kaj kre:</h3>
        <p>
          React browser e dom er moto hubuhu arekta dom toiri kre jaake ble vartual dom . eta emon vabe toiri je ei dom er sahajje js use kre jekono element modify kra jai kom somoyer modde.react chara dom e change asle pura dom k repaint ba re-randar kre , ekhetre react dui ta vartual dom toiri kre , ekta je change asche ta rakha hoi onno teete aager version ta rakha hoi , and dui tar modde tulona kre ki ki change asche shudu ta repaint kre.ete sohoje kaj hoi and valo performance dei.
        </p>
        <h3>props vs state:</h3>
        <p>
          <strong>props:</strong> props component e different in data toiri krte use hoi.eti jsx e component k call krar somoy attribute deyar moto kre lekhe. props unidirectional vabe pathano hoi.
          <strong>state: </strong> user interection krle kichu poriborton hbe , user kichu na krle poriborton hbe na esob khetre state use hoi. aabar api or baire theke data ante useState er shajjo neete hoi.
        </p>
      </div>
    </div>
  );
}

export default App;
