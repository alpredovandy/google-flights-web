import { CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { CustomAutocompleteProps } from './types';

const CustomAutocomplete = ({
    dataKey,
    label,
    options,
    state,
    isLoading = false,
    disabled = false,
    onChange,
    param,
    onParams,
}: CustomAutocompleteProps) => {
    return (
        <Autocomplete
            options={options}
            loading={isLoading}
            disabled={disabled}
            onInputChange={(_event, value, reason) => {
                if (reason === 'input' && value !== param) {
                    onParams(value, true);
                }
            }}
            onChange={(_event, newValue) => {
                if (newValue) {
                    onParams(newValue?.label, false);
                    const selectedOption = options.find((opt) => opt.label === newValue?.label);
                    onChange({
                        form: {
                            ...state.form,
                            [dataKey]: selectedOption,
                        },
                    });
                } else {
                    // clear selection
                    onParams('');
                    onChange({
                        form: {
                            ...state.form,
                            [dataKey]: null,
                        },
                    });
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    disabled={disabled}
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
