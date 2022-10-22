import { useState,useEffect } from "react";
import styled from "styled-components";
import Bubble from "./Blubble";
import ShakeIt from "./EarthQuake";
import GradientMotion from "./GradientMoves";
import Loop from "./LoopsUps";
import Letters from "./NeonLetters";
import DotsRotation from "./Spiral";


export default function Lauta (){
    const[show,setShow]=useState('')
    const[gradient,setGradient]=useState('')
    const[dots,setDots]=useState('')
    const[corner,setCorner]=useState('')
    const[neon,setNeon]=useState('')
    const[moving,setMoving]=useState('')
    const[allBubbles,setAllBubbles]=useState([])
    const[quakeStyle,setQuakeStyle]=useState([])
    const[gradientStyle,setGradientStyle]=useState([])
    const[loopsStyle,setLoopsStyle]=useState([])
    const[neonStyle,setNeonStyle]=useState([])
    const[spiralStyle,setSpiralStyle]=useState([])
    const fetchingSpiralStyles =async()=>{
        fetch('http://localhost:3000/Spiral.txt')
        .then(res=>res.text())
        .then(data=>setSpiralStyle(data))
    }
    const fetchingNeonStyles=async()=>{
        fetch('http://localhost:3000/NeonLetters.txt')
        .then(res=>res.text())
        .then(data=>setNeonStyle(data))
    }
    const fetchingBubbleStyles=async ()=>{
        fetch('http://localhost:3000/Bubbles.txt')
        .then(res=>res.text())
        .then(data=>setAllBubbles(data))
    }
    const fetchingQuakeStyles=async()=>{
        fetch('http://localhost:3000/EarthQuake.txt')
        .then(res=>res.text())
        .then(data=>setQuakeStyle(data))
    }
    const fetchingGradientStyles=async()=>{
        fetch('http://localhost:3000/GradientMoves.txt')
        .then(res=>res.text())
        .then(data=>setGradientStyle(data))
    }
    const fetchingLoopsStyles=async()=>{
        fetch('http://localhost:3000/LoopsUps.txt')
        .then(res=>res.text())
        .then(data=>setLoopsStyle(data))
    }
    useEffect(()=>{
        fetchingSpiralStyles()
    },[dots])
    useEffect(()=>{
        fetchingNeonStyles()
    },[neon])
    useEffect(()=>{
        fetchingLoopsStyles()
    },[corner])
    useEffect(()=>{
        fetchingGradientStyles()
    },[gradient])
    useEffect(()=>{
        fetchingBubbleStyles()
    },[show])
    useEffect(()=>{
        fetchingQuakeStyles()
    },[moving])
    function seeBubbles(){
        if(show === ''){
            setShow('yes')
            setGradient('')
            setDots('')
            setCorner('')
            setNeon('')
        }else{
            setShow('')
        }
    }
    function seeGradient(){
        if(gradient === ''){
            setGradient('yes')
            setShow('')
            setNeon('')
            setDots('')
            setCorner('')
        }else{
            setGradient('')
        }
    }
    function seeDots(){
        if(dots === ''){
            setDots('yes')
            setGradient('')
            setShow('')
            setNeon('')
            setCorner('')
        }else{
            setDots('')
        }
    }
    function visibleCorner(){
        if(corner === ''){
            setDots('')
            setGradient('')
            setShow('')
            setNeon('')
            setCorner('yes')
        }else{
            setCorner('')
    }}
    function seeNeons(){
        if( neon === ''){
            setDots('')
            setGradient('')
            setShow('')
            setNeon('yes')
            setCorner('')
        }else{
            setNeon('')
        }
    }
    function seeQuake(){
        if( moving === ''){
            setDots('')
            setGradient('')
            setShow('')
            setMoving('yes')
            setNeon('')
            setCorner('')
        }else{
            setMoving('')
        }
    }

    const showCode = () =>{
        // {show === 'yes' ? allBubbles :null}
        // {moving === 'yes' ? quakeStyle :null}
        // {gradient === 'yes' ? gradientStyle :null}
        // {corner === 'yes' ? loopsStyle : null}
        // {neon === 'yes' ? neonStyle : null}
        // {dots === 'yes' ? spiralStyle : null}

        if(show === 'yes'){
            return allBubbles;
        } else if(moving === 'yes'){
            return quakeStyle;
        } else if(gradient === 'yes' ){
            return gradientStyle;
        } else if( corner === 'yes'){
            return loopsStyle;
        } else if(neon === 'yes' ){
            return neonStyle;
        } else if( dots === 'yes'){
            return spiralStyle;
        } else{
            return(<p>Elija una animación. Su código aparecerá aquí</p>)
        }
    }

    return(<Container>
    <Example>
        <div className="ani-container">
     
            <article className="info-container">
                <header>Lautaro aniamciones </header>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt='imagen-de-muestra'/>
                    <hr />
                    <div className="text-description">
                    <p>Desarrollador de aplicaciones Front-end con mas de 1 año de experiencia</p>
                    </div>
                    <footer className="social-media"><button>1</button>
                    <button>2</button>
                    <button>3</button></footer>
            </article>
        <Bubble  ver={show}/>          
        <GradientMotion ver={gradient}/>
        <DotsRotation ver={dots} />
        <Loop ver={corner}/>
        <Letters ver={neon}/>
        <ShakeIt  ver={moving}/>
        </div>
        <div  className="btn-display">
   
        <button onClick={()=>seeBubbles()}>Burbujas </button>
        <button onClick={()=>seeGradient()}>Gradiente</button>
        <button onClick={()=>seeDots()}>Espiral</button>
        <button onClick={()=>visibleCorner()}> Esquinas</button>
        <button onClick={()=>seeNeons()}>Neon</button>
        <button onClick={()=>seeQuake()}>Piezas</button>
        <button>3</button>
        <button>4</button>
        </div>
    </Example>
    <div className="code" >
        <div className="boxcode">
        {/* {show === 'yes' ? allBubbles :null}
        {moving === 'yes' ? quakeStyle :null}
        {gradient === 'yes' ? gradientStyle :null}
        {corner === 'yes' ? loopsStyle : null}
        {neon === 'yes' ? neonStyle : null}
        {dots === 'yes' ? spiralStyle : null} */}
        {showCode()}
        </div>
    </div>
    </Container>
    )
}
const Container=styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    width: 100%;
    .code{
        height: 100%;
        width: 50%;
       margin: auto;
        outline: 2px solid blue;
    }
    .boxcode{
            margin-top: 10%;
            width: 90%;
            outline: 2px solid red;
            color: blue;
        }
`
const Example=styled.div`
    display: grid;
    overflow-y: hidden;
    width: 700px;   
    height: 100vh;
    justify-content: center;   
    .ani-container{
        width: 600px;
        position: relative;
        margin-top: 4%;
        display: flex;       
        justify-content: center;
       .info-container{
        position: absolute;
        outline: 2px solid red;
        width: 240px;
        color: #fff;
        height: 380px;
        background: #000;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
        display: grid;
        transition: all .78s ease-in;
        justify-content: space-between;
        transition-property: background;
        &:hover{
            background: transparent;
            transition-delay: .78s;
        }
        .text-description{
            width: 200px;
            height: 80px;
            margin-left: 8%;
        }
        hr{
            background:linear-gradient(90deg, red,blue);
            height: 3px;
            border: none;
            margin-left:  8%;
            width: 200px;
        }
        img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-left: 5%;
        }
        header{
           // outline: 2px solid black;
            width: 200px;
            height: 30px;
            margin-left: 10%;
            margin-top: 5%;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: larger;
            letter-spacing: 0.5px;
            text-align: center;
        }
        .social-media{
            height: 50px;
            width: 120px;
           // outline: 2px solid black;
            margin-top: auto;
            margin-left: 14%;
            display: flex;
            justify-content: space-between;
            button{
                border-radius:50%;
                height: 35px;
                width: 35px;
                margin-top: auto;
                cursor: pointer;
                background: red;
                margin-bottom: 3%;
            }
        }

       }
    }
    .btn-display{
        width: 400px;
        outline: 2px solid blue;
        height: 100px;
        display: grid;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        button{
            margin-top: 8%;
            margin-left:10% ;
            height: 24px;
            width: 70px;
        }
    }
`