import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

import TextForm from './Components/TextForm'
import MyAlert from './Components/Alert'
function App() {
    const [mode, setMode] = useState("light")
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({

            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1200)


    }


    const toggleMode = () => {
        if (mode == "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743"
            showAlert("done", "success")
        }
        else {
            setMode("light");
            document.body.style.backgroundColor = "white"
            showAlert("doneeeeeee light mode", "success")
        }

    }
    return (
        <>

            <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
            <MyAlert alert={alert} />
            <div className='container'>
                ASif
                <TextForm alert={showAlert} heading='Enter the text to analyze' mode={mode} />

            </div>
        </>
    )
}
export default App



