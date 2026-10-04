import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import GlobalStyles from './styles/global';

import themes from './themes';
import { ThemeProvider } from 'styled-components';

export function App() {
    return (
        <ThemeProvider theme={themes.light}>
            <GlobalStyles />
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
}
