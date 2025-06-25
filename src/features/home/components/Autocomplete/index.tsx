import { CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { toPascalCase } from '@/helpers/string';
import { isEmpty } from '@/helpers/validation';
import useQueryParams from '@/hooks/useQueryParams';

import { CustomAutocompleteProps } from './types';

const CustomAutocomplete = ({ dataKey, options, state, isLoading, onChange, onParams }: CustomAutocompleteProps) => {
    const { getQueryParams } = useQueryParams();
    const { from, to } = getQueryParams();

    return (
        <Autocomplete
            inputValue={isEmpty(state.origin?.entityId) ? from : to}
            options={options}
            loading={isLoading}
            onInputChange={(_event, value, reason) => {
                if (reason === 'input') {
                    onParams(value);
                }

                const selectedOption = options.find((opt) => opt.label === value);

                onChange({
                    form: {
                        ...state,
                        [dataKey]: selectedOption,
                    },
                });
            }}
            onChange={(_event, newValue: any) => {
                onParams(newValue?.label);

                const selectedOption = options.find((opt) => opt.label === newValue?.label);

                onChange({
                    form: {
                        ...state,
                        [dataKey]: selectedOption,
                    },
                });
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={toPascalCase(dataKey)}
                    variant="outlined"
                    required
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: <>{isLoading ? <CircularProgress color="inherit" size={20} /> : params.InputProps.endAdornment}</>,
                    }}
                />
            )}
        />
    );
};

export default CustomAutocomplete;
