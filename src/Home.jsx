import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrettyButton from "./components/buttons/pretty-1/index.js";
import CustomButton from "./components/buttons/test-button/index.js";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <PrettyButton onClick={() => setCount((count) => count + 1)} text={`count is ${count}`}/>

                <CustomButton text="Click Me"/>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
