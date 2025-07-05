import './index.css'
import App from '../src/App.jsx'
import 'lenis/dist/lenis.css'
import 'animate.css';
import { createRoot } from 'preact/compat/client'
import { StrictMode } from 'preact/compat'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)