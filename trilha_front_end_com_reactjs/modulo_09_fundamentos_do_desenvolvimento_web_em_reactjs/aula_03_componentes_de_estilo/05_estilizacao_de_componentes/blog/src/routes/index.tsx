import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PostDetais } from '../pages/PostDetails';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/posts/:id',
        element: <PostDetais />,
    },
]);
