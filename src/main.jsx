import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import CollectionContextProvider from "./context/CollectionContextProvider.jsx";
import {NoviIdProvider} from "./context/NoviIdProvider.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <NoviIdProvider>
                <AuthContextProvider>
                    <CollectionContextProvider>
                        <App/>
                    </CollectionContextProvider>
                </AuthContextProvider>
            </NoviIdProvider>
        </Router>
    </StrictMode>,
)
