import { React } from 'react';


const Display = (props) => {
    
    const {thing} = props;
    
    // if(isNaN(thing)) {
    // return(
    //     <h1>The word is: {thing}</h1>
    //     )
    // }
    // else {
    //     return(
    //         <h1>The number is: {thing}</h1>
    //     )
    // }
        return(
            
            <div>

                {
                (isNaN(thing)) ?
                <h1>The word is: {thing}</h1> 
                :
                <h1>The number is: {thing}</h1>
                }

            </div>
            
        )

    
}

export default Display;