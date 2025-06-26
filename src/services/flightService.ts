import { FlightsRequestType } from '@/domains/Flight';

import httpClient from './interceptors/httpClient';

const searchFlights = async (params: FlightsRequestType) => {
    const newParams = {
        originSkyId: params.origin.skyId,
        destinationSkyId: params.destination.skyId,
        originEntityId: params.origin.entityId,
        destinationEntityId: params.destination.entityId,
        date: params.departureDate,
        returnDate: params.returnDate || '',
        adults: params.passengers,
        cabinClass: params.cabinClass,
        currency: params.currency,
        market: params.market,
        countryCode: params.countryCode,
        sortBy: params.sortBy,
    };

    try {
        const response = await httpClient.get('/v2/flights/searchFlights', {
            params: newParams,
        });
        return response.data.data ?? [];
    } catch (error: unknown) {
        throw error ?? new Error(`${error}`);
    }
};

const searchAirports = async (inputText: string) => {
    try {
        const response = await httpClient.get('/v1/flights/searchAirport', {
            params: {
                query: inputText,
                locale: 'en-US',
            },
        });
        return response.data.data ?? [];
    } catch (error: unknown) {
        throw error ?? new Error(`${error}`);
    }
};

export default { searchFlights, searchAirports };
