import "./app.postcss";
import App from './App.svelte'

const rootElement = document.getElementById('app')

// if(rootElement) {
//     throw new Error('Root element not found')
// }

const app = rootElement ? new App({
    target: rootElement,
}): null
export default app
