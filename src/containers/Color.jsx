import React, { useState, useEffect } from 'react';
import Buttons from '../components/color/Buttons';
import ColorPalette from '../components/color/ColorPalette';
import ColorSquare from '../components/color/ColorSquare';

const Color = () => {
    const [color, setColor] = useState('#4ecdc4')
    
    return (
        <main>
            <ColorPalette color={color}/>
            <ColorSquare />
            <Buttons />
        </main>
    )
}

export default Color;
