import React, { useEffect, useState, useRef } from 'react';

export function Logo() {
    const [animation, setAnimation] = useState(true);
    const previousAnimation = usePrevious(animation);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (animation) {
            setTimeout(() => setAnimation(false), 3000);
        } else {
            if (animation === false && animation === previousAnimation) {
                setAnimation(true);
            }
        }
    });

    return (
        <div className={animation ? 'logo animating' : 'logo'}>
            <i className="fas fa-chess-board"></i>
        </div>
    );
}

const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};