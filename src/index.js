import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import r2wc from 'react-to-webcomponent';

const TestComponentWeb = r2wc(App, React, ReactDOM);

customElements.define("test-component-web", TestComponentWeb);