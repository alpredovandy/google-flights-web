import { useCallback } from 'react';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
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
    const { setQueryParams, resetQueryParams } = useQueryParams();

    const { state, set, onRefetch, isLoading, isFetching } = useFlightContext();
    const today = new Date().toISOString().split('T')[0];

    const isValid = !isEmpty(state.form.origin?.entityId) && !isEmpty(state.form.destination?.entityId) && !isEmpty(state.form.departureDate);

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

    const handleSubmit = useCallback(
        (e: any) => {
            e.preventDefault();
            onRefetch();
        },
        [onRefetch]
    );

    return (
        <>
            <Styled.SearchContainer>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        marginBottom: '0.75em',
                    }}
                >
                    <Styled.TopContainer>
                        <NavbarMenu dataKey="tripType" options={optionsTrip} state={state.form} onChange={handleChange} />
                        <PlusMinusSelect dataKey="passengers" options={state.form} state={state.form} onChange={set} />
                        <NavbarMenu dataKey="cabinClass" options={optionsClass} state={state.form} onChange={handleChange} />
                    </Styled.TopContainer>
                    <Button
                        startIcon={<RestartAltIcon />}
                        sx={{
                            textTransform: 'none',
                            fontWeight: '600',
                        }}
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={resetQueryParams}
                    >
                        Filters
                    </Button>
                </Box>

                <form onSubmit={handleSubmit} className="search-form" style={{ padding: '0', margin: '0' }} id="search-form">
                    <CustomAutocomplete
                        options={state.airports ?? []}
                        label="Where from?"
                        state={state}
                        dataKey="origin"
                        onChange={set}
                        param={state.query.from}
                        onParams={(param) => {
                            setQueryParams({
                                search: param,
                            });
                            set({
                                query: {
                                    ...state.query,
                                    from: param,
                                },
                            });
                        }}
                        isLoading={isEmpty(state.form.origin?.entityId) && isLoading}
                    />
                    <CustomAutocomplete
                        options={isEmpty(state.form.origin?.entityId) ? [] : state.airports ?? []}
                        label="Where to?"
                        state={state}
                        dataKey="destination"
                        onChange={set}
                        param={state.query.to}
                        onParams={(param) => {
                            setQueryParams({
                                search: param,
                            });
                            set({
                                query: {
                                    ...state.query,
                                    to: param,
                                },
                            });
                        }}
                        disabled={isEmpty(state.form.origin?.entityId)}
                        isLoading={!isEmpty(state.query.to) && isLoading}
                    />
                    <TextField
                        type="date"
                        name="departureDate"
                        label="Departure"
                        value={state.form.departureDate}
                        disabled={isEmpty(state.form.destination?.entityId)}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        inputProps={{
                            min: today,
                        }}
                        required
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
                            required
                        />
                    )}
                </form>
            </Styled.SearchContainer>
            <Button
                startIcon={<SearchIcon />}
                sx={{
                    textTransform: 'none',
                    borderRadius: '24px',
                    padding: '0.5rem 1rem',
                    fontWeight: '600',
                    margin: 'auto',
                    bottom: '24px',
                    zIndex: '333',
                    boxShadow: '0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)',
                }}
                variant="contained"
                loading={!isValid && isFetching}
                type="submit"
            >
                Search
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
