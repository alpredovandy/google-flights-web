import { AirportsResponseType } from '@/domains/Flight';

export interface CustomAutocompleteProps {
    dataKey: string;
    label: string;
    options: AirportsResponseType[];
    state: Record<string, any>;
    disabled?: boolean;
    isLoading?: boolean;
    onChange: (data: Record<string, any>) => void;
    param: string;
    onParams: (param: string) => void;
}
