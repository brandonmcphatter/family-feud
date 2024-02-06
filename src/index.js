import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GameProvider} from "./context/GameContext";
import {FastMoneyProvider} from "./context/FastMoneyContext";
import {CustomGameProvider} from "./context/CustomGameContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CustomGameProvider>
            <GameProvider>
                <FastMoneyProvider>
                    <App/>
                </FastMoneyProvider>
            </GameProvider>
        </CustomGameProvider>
    </React.StrictMode>
);


