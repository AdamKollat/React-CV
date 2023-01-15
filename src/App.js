import './App.css';
import Profile from './Components/aside';
import About from './Components/about';

function App() {
  return (
    <div>
    <aside>
      <Profile />
      </aside>
      <main>
        <About />
      </main>
      </div>
  );
}

export default App;
