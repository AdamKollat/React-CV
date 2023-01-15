import './custom.css';
import Profile from './Components/aside';
import About from './Components/about';
import WorkExperience from './Components/work_experience';
import Skills from './Components/skills';
import Education from './Components/education';

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
      <Education />
      </div>   
    </div>
  );
}

export default App;
