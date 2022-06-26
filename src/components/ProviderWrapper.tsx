import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';

const ProviderWrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
