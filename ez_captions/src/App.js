import './App.css';
import Header from './containters/Header.js' // imports from container directory
// ^ imports the header file with the simple <h1> tag
function App() {
  return ( // the application that is loaded to the site
    <div className="App"> 
      <Header />
    </div>
  );
}

export default App;
