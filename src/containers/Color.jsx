import React, { useState, useEffect } from 'react';
import Buttons from '../components/color/Buttons';
import ColorPalette from '../components/color/ColorPalette';
import ColorSquare from '../components/color/ColorSquare';
import { useRecord } from '../hooks/useRecord';

const Color = () => {
    const { color, history, historyIndex, record, undo, redo } = useRecord();
    
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
