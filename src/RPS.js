import { useState } from "react";
export function RPS(){
    const signs=[
        {
            id:0,
            url:'images/rock.jpg',
            alt:'rock'
        },
        {
            id:1,
            url:'images/paper.png',
            alt:'paper'  
        },
        {
            id:2,
            url:'images/scissor.png',
            alt:'scissor'
        }
    ];
    const [img,setImg] =useState(null);
    const [rimg,setRimg]=useState(null);
    const [res,setRes]=useState(null);
    function handleClick({sign,signs}){
        setImg(sign.url)
        let x=Math.floor(Math.random()*3);
        let rurl=signs[x].url;
        setRimg(rurl);
        let a=sign.id,b=x;
        if(a===0){
            if(b===1){
                setRes(`Paper beat's Rock,You Lose`);
            }
            else if(b===2){
                setRes(`Rock beats Scissor,You win`);
            }
            else{
                setRes(`Tie!`);
            }
        }
        else if(a===1){
            if(b===0){
                setRes(`Paper beat's Rock,You Win`);
            }
            else if(b===2){
                setRes(`Scissor beats Paper,You Lose`);
            }
            else{
                setRes(`Tie!`);
            }
        }
        else if(a===2){
            if(b===0){
                setRes(`Rock beat's Scissor,You Lose`);
            }
            else if(b===1){
                setRes(`Scissor beats Paper,You win`);
            }
            else{
                setRes(`Tie!`);
            }
        }
    }
    return <>
            <button className="btn d-block mx-auto bg-warning mt-3">Rock-Paper-Scissor</button>
            <h1 className="text-center mt-5">Select One:</h1>
            <div className="signs mt-2 mb-5">{
            signs.map((sign)=>{
                return <>
                <button onClick={()=>handleClick({sign,signs})}>
                    <img src={sign.url} alt={sign.url} key={sign.id}></img>
                    <h1 className="text-style-bold">{sign.alt}</h1>
                </button>
                </>    
            })
            }
            </div>
            <p className="output text-center">{res}</p>
            <div className="result mt-2">
                <div>
                    <img src={img}></img>
                    <h2 className="text-center">You</h2>
                </div>
                <div>
                    <img src={rimg}>
                    </img>
                    <h2 className="text-center">Computer</h2>
                </div>
                
            </div>
            
    </>
}