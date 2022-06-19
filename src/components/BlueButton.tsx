import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import { useDispatch } from 'react-redux';
import { increment } from '../store/slices/counter/index';

const WrappedBlueButton = () => {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        console.log('*** handleClick');
        dispatch(increment());
    }, []);

    return (
        <Provider store={store}>
            <button style={{ background: 'blue' }} onClick={handleClick}>
                I'm not BLUE
            </button>
        </Provider>
    );
};

const BlueButton = () => {
    return (
        <Provider store={store}>
            <WrappedBlueButton />
        </Provider>
    );
};

export default BlueButton;
