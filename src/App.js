import './App.css';
import NavBar from './components/navBar/navBar';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './containers/itemListContainer/itemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <ItemListContainer/>  */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
