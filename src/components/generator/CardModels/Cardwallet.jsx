import styled from "styled-components";

export default function Wallet(){
    return(
        <Container>
            <header>
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="hola"/>
            </header>
            <footer>
                <div className="positions">
                <div className="description">
                <div className="profileinfo"> nombre</div>
                    <hr className="verticaldiv"/>
                <div className="profileinfo"> apellido</div>
                </div>
                <hr className="line"/>    
                <div className="description">
                <div className="profileinfo"> nombre</div>
                    <hr className="verticaldiv"/>
                <div className="profileinfo"> apellido</div>
                </div>
                <hr className="line"/>
                <div className="description">
                <div className="profileinfo"> nombre</div>
                    <hr className="verticaldiv"/>
                <div className="profileinfo"> apellido</div>
                </div>
                </div>
            </footer>
        </Container>
    )
}
const Container=styled.article`
    width: 20%;
    height: 100%;
    outline: 2px solid blue;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    img{
        height: 15.1rem;
        width: 15.1rem;
        border-radius: 50%;
    }   
    footer{
        height:14.5rem;
        width: 84%;
        //outline: 2px solid green;
        position: absolute;
        border-radius: 0 0 10px 10px;
        top: 40%;
        z-index: -1;
        background: #650765dc;
        padding-top: 35%;
    }
    .positions{
        display: flex;
        flex-direction: column;
    }    
    .description{
        height: 40px;
        width: 100%;
        display: flex;  
        justify-content: space-between;
       
    }
    .profileinfo{
        height: 2rem;
        width: 12rem;
      // outline: 2px solid red;                
        text-align: center;
    }
    .verticaldiv{       
        transform: rotate(90deg);
        height: 1px;
        width: 19%;
        border: none;
        margin-top: 5%;
        background: #fff;
        }
    .line{
        border: none;
        height: 1px;       
        margin-bottom: 2%;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 253, 253, 0.75), rgba(0, 0, 0, 0));
    }
`