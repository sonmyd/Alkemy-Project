export default function TagsforSpiral(){
    return(
        <div>
            <pre>
        {
            `
            <div class='container'> 
            <div class='order'>        
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    <span></span>
                    <span></span>
                    <span></span>
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
            filter: blur(3px);
            overflow: hidden;
            }
        @keyframes rotate{
               0% {
                background-position: 0% 10%;
              
            }
            50% {
                background-position: 100% 50%;
               
            }
            100% {
                background-position: 0% 10%;
               
            }
        }
        .order{
            height: 500px;
            width: 500px;
            display: grid;
            grid-template-columns:  repeat(8, 1fr) ;
            gap: 8px;
            grid-template-rows:  repeat(8, 1fr);  
            background: linear-gradient(blue,red);
            animation: rotate  ease 4s infinite;
            background-size: 300% 300%;}
            
         span{
                height: 40px;
                width: 40px;
                background: transparent;
                border-width: 2px;
                border-style: dashed;
                border-color:black ;
                border-radius: 50%;
            }
            `
        }
            </pre>
        </div>
    )
}