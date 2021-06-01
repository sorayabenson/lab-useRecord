import { useState, useEffect } from 'react';

export const useRecord = () => {
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
        // if (history.length === 0) {
        //     setHistory([newColor])
        // } else {
        //     setHistory(historyArray => [...historyArray.slice(0, historyIndex), newColor, ...historyArray.slice(historyIndex + 1, historyArray.length)])
        //     setHistory(history => [...history.splice(0, historyIndex), newColor, ...history.splice(historyIndex + 1, history.length)])
        // }
    }

    useEffect(() => {
        console.log('index', historyIndex)
        console.log(color)
        console.log(history)

    }, [color, history, historyIndex])

    return { color, history, historyIndex, record, undo, redo };
}