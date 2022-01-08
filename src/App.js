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
    }, 2000)
  }, [])

  return (

    loading ? 
    <div>
    loading...
    </div>
    :
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