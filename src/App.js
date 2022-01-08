import './App.css';
import Information from "./components/Information"
import Projects from "./components/Projects"

function App() {
  return (
    <div class="SplitScreen">
        <div className="LeftPanel">
          <Information />
        </div>
        <div className="RightPanel">
          <Projects />
        </div>
    </div>
  );
}

export default App;