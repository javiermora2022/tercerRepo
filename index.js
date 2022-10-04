import React from 'react'

function Home(){
    const listItems = [1,2,3,4]

    const addItem = () => {
        const variableA = 1;
        const variableB = 3;
        const variableC = 2;
            //You, 4 hours ago * add new function
        return variableA*3 + variableC*variableB
    }
    return (
        <><div>Home</div>
        <p>Hola Mundo</p>
        <buttom onClick={addItem}/></> 
    )
}

export default Home