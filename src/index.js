import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'
<link rel="icon" href="%PUBLIC_URL%./assets/mascote.png" type="image/png" />

const root = createRoot(document.querySelector("#root"))

root.render(
<>
    <App />
    <GlobalStyle />
</>
)