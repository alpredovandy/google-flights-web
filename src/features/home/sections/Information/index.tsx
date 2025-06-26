import { useCallback } from 'react';

import { Box, CircularProgress } from '@mui/material';

import * as Styled from '@/features/home.styles';
import useQueryParams from '@/hooks/useQueryParams';

import CardList from '../../components/CardList';
import SearchForm from '../../components/SearchForm';
import { useFlightContext } from '../../store/context';

const Information = () => {
    const { state, isFetching } = useFlightContext();

    const { getQueryParams } = useQueryParams({
        defaultParams: {
            maxPrice: 99999999999,
        },
    });
    const { maxPrice } = getQueryParams();

    const applyFilters = useCallback(
        (flights: any[]) => {
            let filteredFlights = [...flights];
            if (maxPrice) {
                filteredFlights = filteredFlights.filter((flight) => flight.price.raw <= maxPrice);
            }
            return filteredFlights;
        },
        [maxPrice]
    );

    const filteredFlights = applyFilters(state.flights);

    return (
        <Styled.Content style={{ marginTop: filteredFlights.length > 0 ? '-200px' : '-100px' }}>
            <Styled.Title>Flights</Styled.Title>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 1rem',
                    width: '100%',
                }}
            >
                <SearchForm />

                {isFetching ? (
                    <Box
                        sx={{
                            zIndex: 70,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            marginTop: '5em',
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <div
                        style={{
                            marginTop: '2.5em',
                            display: 'flex',
                            gap: '16px',
                            flexDirection: 'column',
                        }}
                    >
                        {(state.flights ?? [])?.map((flight, index) => <CardList key={index} flight={flight} />)}
                    </div>
                )}
            </div>
        </Styled.Content>
    );
};

export default Information;
