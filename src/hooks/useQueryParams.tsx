import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

type QueryParams = Record<string, any>;

interface UseQueryParamsOptions {
    defaultParams?: QueryParams;
}

// Hook with internal defaults, overridable
function useQueryParams(options?: UseQueryParamsOptions) {
    const location = useLocation();
    const navigate = useNavigate();

    // Internal default params inside the hook
    const internalDefaults: QueryParams = {};

    // Use props defaults if provided, otherwise fallback to internal defaults
    const defaultParams = { ...internalDefaults, ...options?.defaultParams };

    // Initialize missing defaults in URL on first render
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        let shouldUpdate = false;

        Object.entries(defaultParams).forEach(([key, defaultValue]) => {
            if (!searchParams.has(key)) {
                searchParams.set(key, String(defaultValue));
                shouldUpdate = true;
            }
        });

        if (shouldUpdate) {
            navigate(`?${searchParams.toString()}`, { replace: true });
        }
    }, [location.search, defaultParams, navigate]);

    // Get current query params merged with defaults
    const getQueryParams = (): QueryParams => {
        const searchParams = new URLSearchParams(location.search);
        const params: QueryParams = { ...defaultParams };
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    };

    // Update query params
    const setQueryParams = (params: Partial<QueryParams>) => {
        const searchParams = new URLSearchParams(location.search);
        Object.entries(params).forEach(([key, value]) => {
            if (value === undefined || value === null || value === '') {
                searchParams.delete(key);
            } else {
                searchParams.set(key, String(value));
            }
        });
        navigate(`?${searchParams.toString()}`, { replace: true });
    };

    // Reset query params to default parameters
    const resetQueryParams = () => {
        const searchParams = new URLSearchParams();
        Object.entries(defaultParams).forEach(([key, defaultValue]) => {
            if (defaultValue !== undefined && defaultValue !== null) {
                searchParams.set(key, String(defaultValue));
            }
        });
        navigate(`?${searchParams.toString()}`, { replace: true });
    };

    return { getQueryParams, setQueryParams, resetQueryParams };
}

export default useQueryParams;
