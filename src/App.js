import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['rubel', 'bapparaz', 'chowdhur', 'algmir']

  const cinemas = [
    { nayok: 'koober', nayika: 'moushowmi' },
    { nayok: 'ronbel', nayika: 'moush' },
    { nayok: 'kobut', nayika: 'tino' },
    { nayok: 'rou', nayika: 'foo' },
    { nayok: 'jasim ', nayika: 'kobori' }
  ];




  return (
    <div className="App">
      <h2>hello</h2>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="j bond" nayika="cattina"></Cinema> */}
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }






    </div>
  );
}

{/* <h2>hello</h2>
      <Person name="rubel" naykia="tumimai"></Person>
      <Person name="pankha" naykia="chowdhury"></Person>
      <Person name="panyanka" naykia="fultu"></Person>
      <Person name="pagal" naykia="chagap"></Person>
      <Person name="bulbul" naykia="rai"></Person>
      <Person name="akhli" naykia="fivestar"></Person>
      <Person name="hello" naykia="chowdh"></Person> */}



function Person(props) {
  console.log(props)

  return (<div className='person'>
    <h2>name:{props.name}</h2>
    <h4>heron of : {props.naykia}</h4>
  </div>
  )


}
function Friend(props) {
  return (<div className="person">
    <h5>name : {props.name}</h5>
    <h2>ocupation: {props.ocuation} </h2>
  </div>

  )
}


function Cinema(props) {
  return (
    <div className="person">
      <h2>nayok: {props.nayok}</h2>
      <h2>nayika: {props.nayika}</h2>
    </div>
  )
}



export default App;


// // this the second way you can change the css style
// const singerStyle = {
//   backgroundColor: "red",
//   color: "white"
// }
// // this the second way you can change the css style
// const singerStyle = {
//   backgroundColor: "red",
//   color: "white"
// }
//  {/* this first way make css */}
//  <h1 className="first">hello</h1>
//  <h2 className="first">go t to hello</h2>
//  {/* this the third way make style or css */}
//  <p style={{
//    backgroundColor: "red",
//    color: "white",
//    fontSize: '25px'

//  }}>this my inside my number:{number}</p>
//  {/* this way you can take from object */}
//  <p style={singerStyle}>this taken for object : {singer.name + ' ' + singer.job}</p>
