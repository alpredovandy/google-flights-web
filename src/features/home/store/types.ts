import { FlightsResponseType } from '@/domains/Flight';

export interface FlightState {
    form: {
        origin: { skyId: string; label: string; entityId: string } | null;
        destination: { skyId: string; label: string; entityId: string } | null;
        departureDate: string;
        returnDate: string;
        passengers: number;
        tripType: string;
        cabinClass: string;
    };
    airports: FlightsResponseType[];
    flights: object[];
}

export interface FlightContextProps {
    state: FlightState;

    isLoading: boolean;

    set: (data: object) => void;

    onRefetch: () => void;
}
