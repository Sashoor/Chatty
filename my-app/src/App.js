import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <div className="app__body">

  <Sidebar />
  <Chat />

</div>

      </header>
    </div>
  );
}

export default App;
