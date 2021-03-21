
import './App.css';

//Components
import Header from './components/Header';
import Person from './components/Person';


function App() {
  return(
    <>
      <Header></Header>
      <Person nombre='luis' edad={30}></Person>
      <Person nombre='angel' edad={29}></Person>
      <Person nombre='zepeda' edad={28}></Person>


    </>
  )
}

export default App;
