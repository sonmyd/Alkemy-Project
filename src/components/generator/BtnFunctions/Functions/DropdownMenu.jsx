import styled from "styled-components";
import { useState,useContext } from "react";
import ColorContext from "../../../../context/ColorContext";
export default function FontMenu(){
const {setFontSize}=useContext(ColorContext)
    return(
        <Container>
            <List>
               <ListProducts >
                   <button className="eachfont" onClick={()=>setFontSize('14px')}>font 14</button>
                   <button className="eachfont" onClick={()=>setFontSize('16px')}>font 16</button>
                   <button className="eachfont" onClick={()=>setFontSize('18px')}>font 18</button>
               </ListProducts>
            </List>
        </Container>
    )
}
const Container=styled.div`
    width: 100%;
    height: 100%;
    outline: 2px solid red;
    text-align: center;
    display: flex;
    
    justify-content: center;
    .content-opt{
        list-style-type: none;
        margin: auto;
    }
    .options{        
        display: grid;
        }
    p{
        color:red;
        font-size: 10px;
    }
    .btn-list{
        border: 1px solid black;
        background: rgb(62, 62, 114);
        width: auto;
        color: white;
        cursor: pointer;
        border-radius: 2px;
        padding: 8px 5px;   
    }
    .eachfont{
        border: none;
        background: #d4d4fe;
        :hover{
            color: white;
            background: #3e3e72;
        }
    }
`
function List(props){
    return(
        <ul className="content-opt">
            {props.children}
        </ul>
    )
}
function ListProducts(props){
   
    const[open,setOpen]=useState(false)
   
    return(
        <li  className="options"><button className="btn-list"  onClick={()=>setOpen(!open)}>Tamaño de fuente </button>
            {open && props.children}
        </li>
    )
}