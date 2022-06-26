import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../store/index';
import { useDispatch } from 'react-redux';
import { increment } from '../store/slices/counter/index';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const WrappedBlueButton = () => {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        console.log('*** handleClick');
        dispatch(increment());
    }, []);

    return (
        <>
        <Title>Hello World</Title>
        <button style={{ background: 'blue' }} onClick={handleClick}>
            I'm not BLUE
        </button>
        </>
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
