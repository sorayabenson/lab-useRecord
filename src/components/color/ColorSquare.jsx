import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/style.css';
import pizzaGhostLine from '../ghosts/pizza-ghost-layer-1.png';
import pizzaGhostColor from '../ghosts/pizza-ghost-layer-2.png';
import toastGhostLine from '../ghosts/toast-ghost-layer-1.png';
import toastGhostColor from '../ghosts/toast-ghost-layer-2.png';
import transparentPizzaGhostLine from '../ghosts/transparent-pizza-ghost-layer-1.png';
import transparentPizzaGhostColor from '../ghosts/transparent-pizza-ghost-layer-2.png';
import transparentToastGhostLine from '../ghosts/transparent-toast-ghost-layer-1.png';
import transparentToastGhostColor from '../ghosts/transparent-toast-ghost-layer-2.png';
import pizzaVector from '../ghosts/pizzavector.svg'

const ColorSquare = ({ lineColor, bgColor }) => (
        <section className={style.colorSquare}>
            {/* <figure 
                style={{ backgroundColor: color }}
                aria-label='color square'
            ></figure> */}
            <div className={style.ghost}> 
                <img 
                    // style={{ fill: lineColor }}
                    src={pizzaVector} 
                    alt='pizza ghost line work'
                    className={style.ghostLine}/>
                {/* <img 
                    style={{ backgroundColor: bgColor }}
                    src={transparentPizzaGhostColor}
                    alt='pizza ghost color'
                    className={style.ghostColor}/>     */}
            </div>
            
            <label className={style.label}>رنگ</label>
        </section>
)

ColorSquare.propTypes = {
    lineColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
}

export default ColorSquare;
