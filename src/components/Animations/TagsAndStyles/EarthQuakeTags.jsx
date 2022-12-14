export default function TagsforEarthQuake(){
    return (
        <div>
            <pre>
                {
                    `
             <div clas='container'>
                 <div>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>
                </div>
            </div>
        
        .container{
            height: 500px;
            width: 400px;
            position: absolute;
            display: flex;
            justify-content: center;
        }
           div{
                width: 100%;
                height: 100%;
                position: relative;
                }
                div:hover span:nth-child(1){
                    transform: translateX(110px) translateY(-100px) scale(0.4)  ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(2){
                    transform: translate(25px,-150px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(3){
                    transform: translate(110px,100px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(4){
                    transform: translate(35px,150px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(5){
                    transform: translate(-35px,150px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(6){
                    transform: translate(-110px,100px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(7){
                    transform: translate(-110px,-100px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
                div:hover span:nth-child(8){
                    transform: translate(-25px,-150px) scale(.4) ;
                    transition: 1s;
                    border-radius: 100%;
                }
           
            span{
            inset: 0;
            transition: 3s;
            background-size: cover;
            position: absolute;
            background: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
           }
           span:nth-child(1){
            clip-path: polygon(100% 50%, 100% 0, 50% 50%);;
           }
           span:nth-child(2){
            clip-path: polygon(100% 0, 50% 0, 50% 50%);
           }
           span:nth-child(3){
            clip-path: polygon(100% 50%, 100% 100%, 50% 50%);
           }
           span:nth-child(4){
            clip-path: polygon(50% 50%, 100% 100%, 50% 100%);
           }
           span:nth-child(5){
            clip-path: polygon(50% 50%, 0% 100%, 50% 100%);
        
           }
           span:nth-child(6){
            clip-path: polygon(50% 50%, 0 50%, 0 100%);
           }
           span:nth-child(7){
            clip-path: polygon(50% 50%, 0 50%, 0 0);
           }
           span:nth-child(8){
            clip-path: polygon(50% 50%, 50% 0, 0 0);
         }
        
                    `
                }
            </pre>
        </div>
    )
}