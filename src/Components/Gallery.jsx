import { sculptureList } from "../API/Data";
import { useState } from "react";

export default  function Gallery(){
const [index, setIndex]=useState(0);

function handleClick(){
    setIndex(index + 1);

    for( let i = index + 1;
        i < sculptureList.length; i++)

        {
         if ( i< sculptureList.length){
            setIndex(i);
            return
         }

        }
   setIndex(0)
}  
let sculpture = sculptureList[index]
 
function previousClick(){
    setIndex(index -1);

    if (index > 0) {
        setIndex( index -1);
    } else{
        setIndex(sculptureList.length -1);
    }
}


    return(
        <>
       <button onClick={handleClick}>Next</button> 
       <h2><i>{sculpture.name}</i>
       by <strong>{sculpture.name}</strong>
       </h2>
       <h3>
        ({index + 1} of {sculptureList.length})
     
       </h3>
       <img src={sculpture.url} alt={sculptureList.alt}/>
       <p>{sculpture.description}</p>

       <button onClick={previousClick}>Prev</button>


     
        </>

       
  
    )



     
}

