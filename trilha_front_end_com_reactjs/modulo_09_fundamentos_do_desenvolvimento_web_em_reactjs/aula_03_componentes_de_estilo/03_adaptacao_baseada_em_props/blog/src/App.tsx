import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

import GlobalStyles from './styles/global';

export function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={routes} />
        </>
    );
}
