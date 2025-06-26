import React, { useEffect, useState } from 'react';

import { AirportsResponseType } from '@/domains/Flight';
import { optionsClass, optionsTrip } from '@/features/configs';
import { isEmpty } from '@/helpers/validation';
import { useDebounce } from '@/hooks/useDebounce';
import useQueryParams from '@/hooks/useQueryParams';

import { useSearchAirportsQuery, useSearchFlightsQuery } from '../hooks';
import { FlightContext } from './context';
import { FlightState } from './types';

const initialState: FlightState = {
    form: {
        origin: {
            skyId: '',
            label: '',
            entityId: '',
        },
        destination: {
            skyId: '',
            label: '',
            entityId: '',
        },
        departureDate: '',
        returnDate: '',
        passengers: 1,
        tripType: optionsTrip[1].key,
        cabinClass: optionsClass[0].key,
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US',
        sortBy: 'best',
    },
    query: {
        from: '',
        to: '',
    },
    flights: [],
    airports: [],
};

export const FlightProvider = ({ children }: { children: React.ReactNode }) => {
    const { getQueryParams, resetQueryParams } = useQueryParams({
        defaultParams: {
            search: '',
        },
    });
    const { search } = getQueryParams();

    const [state, setState] = useState<FlightState>(initialState);

    const query = useDebounce(search, 500);
    const isValid = search === query;

    const { data: airports, isLoading: isLoadingAirports } = useSearchAirportsQuery(query, !isEmpty(query) && isValid);
    const { data: flights, refetch: refetchFlights, isLoading: isLoadingFlights, isFetching } = useSearchFlightsQuery(state.form);

    const update = (data: Partial<FlightState>) => setState((prev) => ({ ...prev, ...data }));

    useEffect(() => {
        onReset();
    }, []);

    useEffect(() => {
        if (!isEmpty(airports)) {
            const newAirports = airports?.map((el: AirportsResponseType) => ({
                entityId: el.entityId,
                label: el.presentation.suggestionTitle,
                skyId: el.skyId,
            }));

            update({
                airports: newAirports ?? [],
            });
        }
    }, [airports]);

    useEffect(() => {
        if (!isEmpty(flights)) {
            update({
                flights: flights?.itineraries ?? [],
            });
        }
    }, [flights]);

    const onRefetch = () => {
        refetchFlights();
    };

    const onReset = () => {
        update(initialState);
        resetQueryParams();
    };

    return (
        <FlightContext.Provider
            value={{
                state,
                isLoading: isLoadingAirports || isLoadingFlights,
                isFetching,
                set: update,
                onRefetch,
                onReset,
            }}
        >
            {children}
        </FlightContext.Provider>
    );
};
