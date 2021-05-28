import React from 'react';
import PropTypes from 'prop-types';

const ColorPalette = ({ color }) => (
    <section>
        <label htmlFor='colorSelector'>رنگ رو انتخاب کنید</label>
        <input 
            id='colorSelector'
            type='color'   
            role='color'
            aria-label='color selector'
            value={color}/>            
    </section>
)

ColorPalette.propTypes = {
    color: PropTypes.string.isRequired,
}

export default ColorPalette;
