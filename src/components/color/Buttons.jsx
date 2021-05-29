import React from 'react';
import PropTypes from 'prop-types';
import style from '../app/style.css'

const Buttons = ({ index, history, onUndo, onRedo }) => (
        <nav>
            <button 
                onClick={onUndo} 
                aria-label='undo' 
                className={style.undo}
                disabled={(history.length === 0 || index === history.length)}
            ></button>
            <button 
                onClick={onRedo} 
                aria-label='redo' 
                className={style.redo}
                disabled={index === 0}    
            ></button>
        </nav>
)

Buttons.propTypes = {
    index: PropTypes.number.isRequired,
    history: PropTypes.array.isRequired,
    onUndo: PropTypes.func.isRequired,
    onRedo: PropTypes.func.isRequired,
}

export default Buttons;
