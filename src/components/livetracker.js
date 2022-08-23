
import "./tracker.css";
import { useState } from "react";
import { Button } from "@mui/material";


function Tracker(){
    const[getter,setter] = useState([]);

    const data = async() =>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const temp = await res.json();
            setter(temp.statewise[2]);

        }catch(err){
            console.log(err);
        }
    }
    return(
      <div>
        <h1>
        🔴 Live 
      </h1>
      <b><p>Track Andhra Pradesh live covid19 data</p></b>
      <fieldset>
      <div className="active_cases">
        <b><label>Active cases</label></b>
        <p className="para">👀{getter.active}</p>
      </div>
      </fieldset>
      <br></br>
      <fieldset>
      <div className="Deaths">
        <b><label>Deaths</label></b>
        <p className="para">💀{getter.deaths}</p>
      </div>
      </fieldset>
      <br></br>
      <fieldset>
      <div className="last_update_time"><label><b>Last Updated Time</b></label></div>
      <time className="para">☑️{getter.lastupdatedtime}</time>
      </fieldset>
      <br></br>
      <div className="btn">
      <Button variant="contained" onClick={data}>Get Data</Button></div>
      </div>
      
     
    );
}

export default Tracker;