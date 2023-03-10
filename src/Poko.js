import React, { useEffect, useState } from "react";
import axios from "axios";

const Poko = () => {
    const [num, setNum]= useState();
    const [name, setName]= useState();
    const [moves, setMoves]= useState();

    useEffect(()=>{
      async function getdata(){
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name)
        setMoves(res.data.moves.length);

      } 
      getdata()
    });

    return (
    <>
    <h1>
      you choose <span style={{color:"red"}}> {num} value </span>
      </h1>
    <h1>
      my name is <span style={{color:"red"}}> {name} </span> 
      </h1>
    <h1>
      i have <span style={{color:"red"}}>{moves} moves</span> 
      </h1>
    <select 
    value ={num} onChange={(e) =>{
      setNum(e.target.value)

    }}
    >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="25">25</option>
        </select>
    </>
    );
};

export default Poko;