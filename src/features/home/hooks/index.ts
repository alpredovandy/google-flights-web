import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { FlightsRequestType } from '@/domains/Flight';
import flightService from '@/services/flightService';

export const useSearchFlightsQuery = (params: FlightsRequestType, enabled = false) => {
    const query = useQuery({
        queryKey: ['flightService.searchFlights', params],
        queryFn: async () => await flightService.searchFlights(params),
        enabled,
    });

    useEffect(() => {
        if (query.isError) {
            const error = query.error;
            let errorMessage = 'Oops, something went wrong!';

            if (error && 'isAxiosError' in error) {
                const axiosError = error as import('axios').AxiosError;

                const data = axiosError.response?.data as {
                    message?: string;
                };

                if (data?.message) {
                    errorMessage = String(data.message).slice(0, 44);
                }
            }

            toast.error(errorMessage, {
                position: 'top-right',
                id: 'flightService.searchFlights',
            });
        }
    }, [query.isError, toast.error]);

    return query;
};

export const useSearchAirportsQuery = (search: string, enabled = false) => {
    const query = useQuery({
        queryKey: ['flightService.searchAirports', search],
        queryFn: async () => await flightService.searchAirports(search),
        enabled,
    });

    useEffect(() => {
        if (query.isError) {
            const error = query.error;
            let errorMessage = 'Oops, something went wrong!';

            if (error && 'isAxiosError' in error) {
                const axiosError = error as import('axios').AxiosError;

                const data = axiosError.response?.data as {
                    message?: string;
                };

                if (data?.message) {
                    errorMessage = String(data.message).slice(0, 44);
                }
            }

            toast.error(errorMessage, {
                position: 'top-right',
                id: 'flightService.searchAirports',
            });
        }
    }, [query.isError, toast]);

    return query;
};
