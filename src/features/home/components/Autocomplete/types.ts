import { FlightsResponseType } from '@/domains/Flight';

export interface CustomAutocompleteProps {
    dataKey: string;
    label: string;
    options: FlightsResponseType[];
    state: Record<string, any>;
    isLoading: boolean;
    onChange: (data: Record<string, any>) => void;
    onParams: (param: string) => void;
}
