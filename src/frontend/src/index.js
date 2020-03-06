import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { env } from './configEnv';

ReactDOM.render(<App env={env} />, document.getElementById('appRoot'));

serviceWorker.unregister();
