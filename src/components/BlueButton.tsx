import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { increment } from '../store/slices/counter/index';
import ProviderWrapper from './ProviderWrapper.js';
// import { Provider } from 'react-redux';
// import store from '../store/index';

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

// const ProviderWrapper = ({children}) => {
//     return (
//         <Provider store={store}>
//             {children}
//         </Provider>
//     );
// }

const BlueButton = () => {
    return (
        <ProviderWrapper>
            <WrappedBlueButton />
        </ProviderWrapper>
    );
};

export default BlueButton;
