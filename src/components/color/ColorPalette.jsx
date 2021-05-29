import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/style.css'

const ColorPalette = ({ color, onChange }) => (
    <section className={style.colorPallete}>
        <p className={style.label}>رنگ رو انتخاب کنید</p>
        <label 
            htmlFor='colorSelector'
            className={style.colorSelector}
            style={{ backgroundColor: color }}>
            <input 
            id='colorSelector'
            type='color'   
            role='color'
            aria-label='color selector'
            value={color}
            onChange={onChange}/>
        </label>            
    </section>
) 

ColorPalette.propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default ColorPalette;
