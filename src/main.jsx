import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import CollectionContextProvider from "./context/CollectionContextProvider.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <AuthContextProvider>
                <CollectionContextProvider>
                    <App/>
                </CollectionContextProvider>
            </AuthContextProvider>
        </Router>
    </StrictMode>,
)
