import React,{useEffect,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {FaAngleDoubleRight} from "react-icons/fa"

import './App.css';
const url = "https://course-api.com/react-tabs-project"
function App() {
const [isLoading,setIsloading]=useState(true);
const [people,setPeople]= useState([]);
const [valueInd,setValueInd]=useState(0)
const fetchPeoples = async()=>{
  const response= await fetch(url);
  const data  = await response.json();
  setPeople(data);
  setIsloading(false);
}
useEffect(()=>{
  fetchPeoples();
},[]);
if(isLoading){
  return(
    <section className="section loading">
<h1>loading......</h1>

    </section>

  )
}
const {company,dates,duties,tittle}= people[valueInd];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="jobs-center">
          {people.map((person,ind)=>{
            return(
              <button className= {`job-btn ${ind === valueInd && "active-btn" }`} onClick= {()=>setValueInd(ind)} key={uuidv4()}   >
                {person.company}
              </button>
            )
          })}
        </div>
        <article className="job-info" >
          <h3> {tittle} </h3>
          <h4> {company} </h4>
          <p className="job-date"> {dates} </p>
          {duties.map((duty)=>{
            return(
              <div className="job-desc" key={uuidv4()} >
                <FaAngleDoubleRight className="jon-icon" />
                <p> {duty} </p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
