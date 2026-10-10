import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import GlobalStyles from './styles/global';
import { ThemeProviderComponent } from './contexts/ThemeContext';

export function App() {
    return (
        <ThemeProviderComponent>
            <GlobalStyles />
            <RouterProvider router={routes} />
        </ThemeProviderComponent>
    );
}
