import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from '../../../redux/store';

const renderConnected = (ui, renderOptions) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}><Router>{children}</Router></Provider>
  );
  return render(ui,{wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;
