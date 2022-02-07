



const DisplayWithColor = (props) => {

    const { word, textColor, bkgdColor } = props;

    return(
        // <div>
        //     <h1 style={{ color:textColor, backgroundColor: bkgdColor }} >The word is: {word}</h1>
        // </div>

        <div>
        {
            (isNaN(word)) ?
            <h1 style={{ color:textColor, backgroundColor: bkgdColor }}>The word is: {word} </h1> 
            :
            <h1 style={{ color:textColor, backgroundColor: bkgdColor }}>The number is: {word} </h1>
        }
        </div>
    )
}

export default DisplayWithColor;