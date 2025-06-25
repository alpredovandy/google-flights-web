import React, { useEffect, useState } from 'react';

import { FlightsResponseType } from '@/domains/Flight';
import { optionsClass, optionsTrip } from '@/features/configs';
import { isEmpty } from '@/helpers/validation';
import { useDebounce } from '@/hooks/useDebounce';
import useQueryParams from '@/hooks/useQueryParams';

import { useSearchAirportsQuery } from '../hooks';
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
    },
    flights: [],
    airports: [],
};

export const FlightProvider = ({ children }: { children: React.ReactNode }) => {
    const { getQueryParams } = useQueryParams({
        defaultParams: {
            from: '',
            to: '',
        },
    });
    const { from, to } = getQueryParams();

    const [state, setState] = useState<FlightState>(initialState);

    const query = useDebounce(isEmpty(state.form.origin?.entityId) ? from : to, 1500);
    const isValid = isEmpty(state.form.origin?.entityId) ? from.length > 3 && from !== query : to.length > 3 && to !== query;

    const { data: airports, refetch: refetchAirports, isLoading: isLoadingAirports } = useSearchAirportsQuery(query, isValid);

    const update = (data: Partial<FlightState>) => setState((prev) => ({ ...prev, ...data }));

    useEffect(() => {
        if (!isEmpty(airports)) {
            const newAirports = airports?.map((el: FlightsResponseType) => ({
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
        if (isEmpty(query)) {
            update({
                flights: [],
                airports: [],
            });
        }
    }, [query]);

    const onRefetch = () => {
        refetchAirports();
    };

    return (
        <FlightContext.Provider
            value={{
                state,
                isLoading: isLoadingAirports,
                set: update,
                onRefetch,
            }}
        >
            {children}
        </FlightContext.Provider>
    );
};
