import { useCallback } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import NavbarMenu from '@/components/NavbarMenu';
import PlusMinusSelect from '@/components/SelectPlusMinus';
import { optionsClass, optionsTrip } from '@/features/configs';
import { isEmpty } from '@/helpers/validation';
import useQueryParams from '@/hooks/useQueryParams';

import { useFlightContext } from '../../store/context';
import CustomAutocomplete from '../Autocomplete';
import * as Styled from './search.styles';

const SearchForm = () => {
    const { setQueryParams } = useQueryParams();

    const { state, set, isLoading } = useFlightContext();
    const today = new Date().toISOString().split('T')[0];

    const handleChange = useCallback(
        (e: any) => {
            set({
                form: {
                    ...state.form,
                    [e.target.name]: e.target.value,
                },
            });
        },
        [state]
    );

    // console.log('fox state', state);

    return (
        <>
            <Styled.SearchContainer>
                <Styled.TopContainer>
                    <NavbarMenu dataKey="tripType" options={optionsTrip} state={state.form} onChange={handleChange} />
                    <PlusMinusSelect dataKey="passengers" options={state.form} state={state.form} onChange={set} />
                    <NavbarMenu dataKey="cabinClass" options={optionsClass} state={state.form} onChange={handleChange} />
                </Styled.TopContainer>
                <div className="search-form" style={{ padding: '0', margin: '0' }} id="search-form">
                    <CustomAutocomplete
                        options={state?.airports ?? []}
                        label="Where from?"
                        state={state.form}
                        dataKey="origin"
                        onChange={set}
                        onParams={(param) => {
                            setQueryParams({
                                from: param,
                            });
                        }}
                        isLoading={isEmpty(state.form.origin?.entityId) && isLoading}
                    />
                    <CustomAutocomplete
                        options={state?.airports ?? []}
                        label="Where to?"
                        state={state.form}
                        dataKey="destination"
                        onChange={set}
                        onParams={(param) => {
                            setQueryParams({
                                to: param,
                            });
                        }}
                        isLoading={!isEmpty(state.form.origin?.entityId) && isLoading}
                    />
                    <TextField
                        type="date"
                        name="departureDate"
                        label="Departure"
                        value={state.form.departureDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        inputProps={{
                            min: today,
                        }}
                    />
                    {state.form.tripType === 'roundTrip' && (
                        <TextField
                            type="date"
                            name="returnDate"
                            label="Return"
                            value={state.form.returnDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            inputProps={{
                                min: state.form.departureDate || today,
                            }}
                        />
                    )}
                </div>
            </Styled.SearchContainer>
            <Button
                startIcon={<SearchIcon />}
                style={{
                    textTransform: 'none',
                    borderRadius: '24px',
                    padding: '0.5rem 1rem',
                    fontWeight: '600',
                    margin: 'auto',
                    bottom: '24px',
                    zIndex: '333',
                    boxShadow: '0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)',
                }}
                type="submit"
                variant="contained"
                form="search-form"
            >
                {isLoading ? 'Loading...' : 'Search'}
            </Button>
            <div
                style={{
                    position: 'relative',
                    marginTop: '-40px',
                    marginBottom: '24px',
                }}
            >
                <div className="overlay-container" />
            </div>
        </>
    );
};

export default SearchForm;
