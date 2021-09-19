import logo from './logo.svg';
import './App.css';

function App() {

  // this is you excahnge to there 
  const number = 5555;
  const singer = {
    name: 'palash',
    job: 'exchange company',
    work: '8hour'
  }
  // this the second way you can change the css style
  const singerStyle = {
    backgroundColor: "red",
    color: "white"
  }

  return (
    <div className="App">

      {/* this first way make css */}
      <h1 className="first">hello</h1>
      <h2 className="first">go t to hello</h2>
      {/* this the third way make style or css */}
      <p style={{
        backgroundColor: "red",
        color: "white",
        fontSize: '25px'

      }}>this my inside my number:{number}</p>
      {/* this way you can take from object */}
      <p style={singerStyle}>this taken for object : {singer.name + ' ' + singer.job}</p>

    </div>
  );
}

export default App;
