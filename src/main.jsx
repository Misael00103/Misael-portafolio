import './index.css'
import App from './app.jsx'
import 'lenis/dist/lenis.css'
import { createRoot } from 'preact/compat/client'
import { StrictMode } from 'preact/compat'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>
)