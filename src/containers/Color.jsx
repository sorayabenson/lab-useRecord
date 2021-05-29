import React, { useState, useEffect } from 'react';
import Buttons from '../components/color/Buttons';
import ColorPalette from '../components/color/ColorPalette';
import ColorSquare from '../components/color/ColorSquare';

const Color = () => {
    const [color, setColor] = useState('#4ecdc4');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);

    // const handleChange = (e) => {
    //     setColor(e.target.value);
    // }
    
    const undo = () => {
        //go back one index at a time starting at current index
        //every click + 1
        //set history limit???
        setColor(history[historyIndex])
        setHistoryIndex((historyIndex + 1))
    }

    const redo = () => {
        //go forward one index at a time starting at current index
        //every click - 1
        //stops if 0
        setColor(history[historyIndex])
        setHistoryIndex((historyIndex - 1))
    }

    const record = (e) => {
        if (history.length === 0) {
            setColor(e.target.value)
            setHistory([color])
        } else {
            setColor(e.target.value)
            setHistory([color, ...history])
        }
    }

    useEffect(() => {
        console.log('index', historyIndex)
        console.log(color)
        console.log(history)

    }, [color, history, historyIndex])
    
    return (
        <main>
            <ColorPalette 
                color={color}
                onChange={record}
            />
            <ColorSquare color={color}/>
            <Buttons onUndo={undo} onRedo={redo} index={historyIndex} history={history}/>
        </main>
    )
}

export default Color;

{/* <img src='https://www.freepnglogos.com/uploads/tiger-png/tiger-gallery-png-images-3.png' alt='tiger' style={{background: color}} /> */}