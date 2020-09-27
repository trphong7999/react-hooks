import { useEffect, useState } from 'react';
import { useRef } from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'blue', 'black', 'purple', 'yellow', 'gray'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 6);
    }

    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            //console.log('Fist Color: ', color);
            console.log('Change Color: ', colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 3000);

        return () => {
            clearInterval(colorInterval);
        }

    }, []);

    return color;
}

export default useColor;

