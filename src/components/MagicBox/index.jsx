import React from 'react';
import useColor from '../../customhooks/useColor';
import './MagicBox.scss';

function MagicBox() {
    const color = useColor();

    return (
        <div
            className="magic-box"
            style={{ backgroundColor: color }}
        >
        </div>
    );
}

export default MagicBox;