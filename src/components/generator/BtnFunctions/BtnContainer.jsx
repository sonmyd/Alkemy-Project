import styled from "styled-components";
import FontMenu from "./Functions/DropdownMenu";
import ValuesBar from "./Functions/OpacityValues";
import Trimmings from "./Functions/ImageShape";
import ChekBack from "./Functions/BackgroundColors";
import ChangePicture from "./Functions/ChangeProfileImg";
import Shadow from "./Functions/ShadowEffect";
import BorderStyles from "./Functions/BordersAndStyles";
export default function GirdOfButtons(){
  return(
        <Cotnainer>
              <div className="ftn-container">
                <FontMenu/>
              </div>
              <div className="ftn-container">
                <ChangePicture/>
                </div>
              <div className="ftn-container">
                <ChekBack/></div>
              <div className="ftn-container">
                   <ValuesBar/>
              </div>
              <div className="ftn-container">
                <BorderStyles/>
              </div>
              <div className="ftn-container">
                <Shadow/>
              </div>
              <div className="ftn-container">
                <Trimmings/>
              </div>
              <div className="ftn-container">
                botones de rede sociales
              </div>
              <div className="ftn-container">
                vertical u horizontal
              </div>
        </Cotnainer>
    )
}
const Cotnainer=styled.div`
     width: 40%;
    height: 100%;
    border: 2px solid #3e3e72;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .ftn-container{
        outline: 2px solid black;
        width: 178px;
        height: 130px;
        text-align: center;
        :hover{
          box-shadow: inset 0 0 15px #fff;
        }
    }
`