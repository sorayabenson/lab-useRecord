import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/style.css';

const ColorSquare = ({ color }) => (
        <section className={style.colorSquare}>
            <figure 
                style={{ backgroundColor: color }}
                aria-label='color square'
            ></figure>
            <figcaption className={style.label}>رنگ</figcaption>
        </section>
)

ColorSquare.propTypes = {
    color: PropTypes.string.isRequired,
}

export default ColorSquare;
