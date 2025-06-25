import { Suspense } from 'react';

import { CircularProgress } from '@mui/material';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/home';
import NotFoundPage from '@/pages/not-found';

const router = createBrowserRouter([
    // Main routes
    {
        path: '/',
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<CircularProgress />}>
                        <HomePage />
                    </Suspense>
                ),
            },
        ],
    },

    // Error routes
    { path: '/404', Component: NotFoundPage },

    // Fallback 404 route
    { path: '*', Component: NotFoundPage },
]);

export default router;
