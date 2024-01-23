
import './App.css';
import image from'./1.jpg';
import { Todo } from './Todo';

function App(){
  return(
    <div>
    <div className='app'>
      <h1>СПИСОК ДЕЛ</h1>
      <div></div>
      <Todo/>
      </div>
      <div className='foto'>
        <img src={image}alt="foto"/>
      </div>
   </div>
  )
}

export default App;
