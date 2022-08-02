import './App.css';
import SoundPad from './sound-pad';

function App() {
  return (
      <div className="App-body">
      <header className="App-header">
        <h1>This will be a simple sampler app</h1>
      </header>
      <div className="App-main">
        <SoundPad /> <SoundPad /> <SoundPad /> <SoundPad /> <SoundPad />

      </div>
      </div>
  );
}

export default App;
