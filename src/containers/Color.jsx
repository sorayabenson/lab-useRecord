import React from 'react';
import Buttons from '../components/color/Buttons';
import ColorPalette from '../components/color/ColorPalette';
import ColorSquare from '../components/color/ColorSquare';

const Color = () => {
    return (
        <main>
            <ColorPalette />
            <ColorSquare />
            <Buttons />
        </main>
    )
}

export default Color;
