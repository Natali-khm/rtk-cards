import { ThemeProvider } from '@mui/material'

import { RouterProvider } from 'react-router-dom'
import { router } from './common/routes/Routes'
import reportWebVitals from './reportWebVitals'
import { GlobalError } from 'common/components'
import 'react-toastify/dist/ReactToastify.css'
import { theme } from './common/styles/theme'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <GlobalError />
        </ThemeProvider>
    </Provider>
)

reportWebVitals()
