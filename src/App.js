import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Products from './component/Products/Products';
import Answers from './component/Answers/Answers';

function App() {
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <Answers></Answers>
    </div>
  );
}

export default App;
