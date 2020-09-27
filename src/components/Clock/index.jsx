import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../customhooks/useClock';


Clock.propTypes = {};

function Clock() {
    const { timeString } = useClock();

    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default Clock;