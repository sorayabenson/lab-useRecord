import React, { useState, useEffect } from 'react';
import Buttons from '../components/color/Buttons';
import ColorPalette from '../components/color/ColorPalette';
import ColorSquare from '../components/color/ColorSquare';

const Color = () => {
    const [color, setColor] = useState('#4ecdc4');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const undo = () => {
        setColor(history[historyIndex + 1])
        setHistoryIndex((historyIndex + 1))
    }

    const redo = () => {
        setColor(history[historyIndex - 1])
        setHistoryIndex((historyIndex - 1))
    }

    //instead of adding newColor to the front of the array, it needs to be inserted where ever the index is. Fix.
    const record = (newColor) => {
        setColor(newColor)
        setHistory([newColor, ...history])
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
                onChange={e => record(e.target.value)}
            />
            <ColorSquare color={color}/>
            <Buttons 
                onUndo={undo} 
                onRedo={redo} 
                index={historyIndex} 
                history={history}/>
        </main>
    )
}

export default Color;
