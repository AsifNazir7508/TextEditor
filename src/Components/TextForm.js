import React, {useState} from 'react'

export default function (props) {

    const [text,setText]=useState("Enter text here")

    const handleLowerText=()=>{
        console.log("Lowercase clicked")
        let newText2=text.toLowerCase();
        setText(newText2)
        props.alert("converted","success")
    }


    const handleText=()=>{
        console.log("uppercase clicked")
        let newText=text.toUpperCase();
        setText(newText)

        props.alert("yes converted","success")
    }

    const handleChange=(event)=>{
        console.log("handle changed")
        setText(event.target.value)
    }
    return (

        <>
        <div className='container' style={{color:props.mode=="dark"? "white" :"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
        
                <textarea className="form-control" id="mybox" rows="6" value={text} onChange={handleChange} style={{backgroundColor:props.mode=="dark"? "gray" :"white"}}></textarea>
            </div>

            <button className='btn btn-info' onClick={handleText} >Convert to Uppercase</button>

            <button className='btn btn-info mx-2' onClick={handleLowerText} >Convert to Lowercase</button>

            
        </div>
        <div className='container' style={{color:props.mode=="dark"? "white" :"black"}}>

            <h2 className='my-2'>Text Summary</h2>
            <p>You have entered={text.length} characters</p>

        </div>
        
        </>
    )
}

