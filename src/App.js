import React, {useState, useEffect} from "react"
import './App.css';
import Information from "./components/Information"
import Projects from "./components/Projects"

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1400)
  }, [])

  return (
    loading ? 
    <div className="Loading">
    Hello.
    </div>
    :
    <div className="SplitScreen">
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