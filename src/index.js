// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <React.StrictMode>
            <App store={store} />
    </React.StrictMode>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Root />);

// Uncomment the line below to enable service worker for offline capabilities
// serviceWorker.register();
serviceWorker.unregister();
