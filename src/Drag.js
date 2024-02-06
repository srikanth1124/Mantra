import React, {useState} from "react";
import './App.css';


 function Drag() {
    const [Text, setText] = useState('');
    const [Email, setEmail] = useState('');
    const [Number, setNumber] = useState(''); 
    const [Age, setAge] = useState('');
    const [div, setdiv] = useState(1);
    const [displayText, setdisplayText] = useState('Srikanth');
    const [displayEmail, setdisplayEmail] = useState('Srikanth@gmail.com');
    const [displayNumber, setdisplayNumber] = useState(598482);
    const [displayAge, setdisplayAge] = useState(24);
    const submitText = (event) =>{
        setText(event.target.value);
    }
    const submitEmail = (event) => {
        setEmail(event.target.value);
    }
    const submitNumber = (event) =>{
        setNumber(event.target.value);
    }
    const submitAgenumber = (event) => {
        setAge(event.target.value)
    }
    const formSubmit = () => {

        setdisplayText(Text);
        setdisplayEmail(Email);
        setdisplayNumber(Number);
        setdisplayAge(Age);
    }

      const allowDrop =(ev) =>
         {

            ev.preventDefault();
         }

       const drag = (ev) =>
       {
           ev.dataTransfer.setData("Text",ev.target.id);
        }

       const drop = (ev) =>
           {
            ev.preventDefault();
            
            if(ev.target.id === "div3"){

                setdiv(2)
            }
            else if(ev.target.id === "div2"){
                setdiv(3)
            }
            else if(ev.target.id === "div1"){
                setdiv(1);
            }
            else{
                setdiv(4);
            }
           }
 

   const formCancel = () =>{
    setAge('');
    setEmail('');
    setNumber('');
    setText('');
   }
 
  return (
    <div>
        
            <div className="mb-3">
                <input type="Text" value={Text} className="boxstyle" placeholder="Enter Name" onChange={submitText} 
                style={styles.section}/>
                <input type="email"  className="textInput" aria-describedby="emailHelp"  value={Email} placeholder="Enter Email" onChange={submitEmail}
                style={styles.section}/>
                </div>
                <div>
                <input type="number"  placeholder="Enter Phone number" value={Number}  onChange={submitNumber} 
                style={styles.section}/>

                <input type="number" placeholder="Enter Age" className="boxstyle" value={Age} onChange={submitAgenumber} 
                style={styles.section}/>
            </div>
            

            <button type="submit" className="btn btn-primary" onClick={formSubmit} style={styles.button}>Submit</button>
            <button type="submit" className="btn btn-primary my-3 mx-3"style={styles.button}  onClick={formCancel} >Cancel</button>
            <div>
         </div>

            <div className="container " style={{display: "flex"}}>
                
            <div id="div1" onDrop={drop} onDragOver={allowDrop} style={styles.div}>Age 1 - 18

            <span id="play" draggable="true" onDragStart={drag}>
                {div === 1?
                 <div className="card2"   
       
                draggable>
                <div className="container" 
                style={{ padding: "2px 16px"}}
                >
                    <h4><b>Name : {displayText}</b></h4> 
                    <p>Email : {displayEmail}</p> 
                    <p> Number : {displayNumber}</p> 
                    <p>Age : {displayAge <=18 ? 15 :displayAge}</p> 
                </div>
                 </div> : null }
                </span>
            </div>

            <div id="div3" onDrop={drop} onDragOver={allowDrop}  style={styles.div} >
                {div === 2?
                 <div className="card2"   
       
                draggable >
                <div className="container" 
                style={{ padding: "2px 16px"}}
                >
                    <h4><b>Name : {displayText}</b></h4> 
                    <p>Email : {displayEmail}</p> 
                    <p> Number : {displayNumber}</p> 
                    <p>Age : {displayAge <=19 ?23: displayAge }</p> 
                </div>
                 </div> : null }
                Age 19 - 25</div> 

            <div id="div2" onDrop={drop} onDragOver={allowDrop}  style={styles.div}> {div === 3?
                    <div className="card2"   
          
                   draggable>
                   <div className="container" 
                   style={{ padding: "2px 16px"}}
                   >
                       <h4><b>Name : {displayText}</b></h4> 
                       <p>Email : {displayEmail}</p> 
                       <p> Number : {displayNumber}</p> 
                       <p>Age : {displayAge <26 ? 30 : displayAge}</p> 
                   </div>
                    </div> : null }Age 25 to 45</div>

            <div id="div4" onDrop={drop} onDragOver={allowDrop}  style={styles.div}> {div === 4?
                    <div className="card2"   
          
                   draggable>
                   <div className="container" 
                   style={{ padding: "2px 16px"}}
                   >
                       <h4><b>Name : {displayText}</b></h4> 
                       <p>Email : {displayEmail}</p> 
                       <p> Number : {displayNumber}</p> 
                       <p>Age : {displayAge <45 ? 50 : displayAge}</p> 
                   </div>
                    </div> : null }Age 45+</div>       
                        
            </div>
    </div>
  );
}
const styles = {
    section: {
        alignContent: "center",
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    button: {
        height: 40,
        width: 140,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 2,
        textAlign: "center"
    },
    div:{
        width: "400px",
        height: "500px",
        borderWidth: "1px",
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: "10px",
        margin: "2px"
    }
  }
export default Drag;
