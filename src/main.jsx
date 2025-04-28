import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import AnimatedCursor from 'react-animated-cursor'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <App />
    <AnimatedCursor 
    innerSize={13}
    outerSize={17}
    color='251, 188, 4'
    outerAlpha={0.7 }
    innerScale={0.7}
    outerScale={2}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
      {
        target: '.custom',
        options: {
          innerSize: 12,
          outerSize: 12,
          color: '255, 255, 255',
          outerAlpha: 0.3,
          innerScale: 0.7,
          outerScale: 5
        }
      }
    ]}
    />
    </ThemeContextProvider>
    
  </StrictMode>,
)
