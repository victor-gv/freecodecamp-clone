import './App.css';
import { Testimony }from './components/testimonials.js';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:
        </h1>
     <Testimony />
      </div>
    </div>
  );
}

export default App;
