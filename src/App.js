import './custom.css';
import Profile from './Components/aside';
import About from './Components/about';
import WorkExperience from './Components/work_experience';
import Skills from './Components/skills';

function App() {
  return (
    <div class='container'>
      <div class='aside'>
      <Profile />
      </div>
      <div class='main'>
      <About /> 
      <WorkExperience />  
      <Skills />
      </div>   
    </div>
  );
}

export default App;
