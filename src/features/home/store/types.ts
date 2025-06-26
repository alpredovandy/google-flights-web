import { AirportsResponseType, FlightsResponseType } from '@/domains/Flight';

export interface FlightState {
    form: {
        origin: { skyId: string; label: string; entityId: string };
        destination: { skyId: string; label: string; entityId: string };
        departureDate: string;
        returnDate: string;
        passengers: number;
        tripType: string;
        cabinClass: string;
        currency: string;
        market: string;
        countryCode: string;
        sortBy: string;
    };
    query: {
        from: string;
        to: string;
    };
    airports: AirportsResponseType[];
    flights: FlightsResponseType[];
}

export interface FlightContextProps {
    state: FlightState;
    isLoading: boolean;
    isFetching: boolean;
    set: (data: object) => void;
    onRefetch: () => void;
    onReset: () => void;
}
