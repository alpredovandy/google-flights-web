import { useCallback } from 'react';

import { CircularProgress } from '@mui/material';

import BgFlight from '@/assets/image/BgFlight';
import useQueryParams from '@/hooks/useQueryParams';

import * as Styled from '../home.styles';
import SearchForm from './components/SearchForm';
import { useFlightContext } from './store/context';

const HomeFeatures = () => {
    const { state, isLoading } = useFlightContext();

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
        <Styled.SlidingContainer>
            <BgFlight style={{ maxWidth: '1248px' }} />
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
                    {isLoading && (
                        <div style={{ zIndex: '70' }}>
                            <CircularProgress />
                        </div>
                    )}
                </div>
            </Styled.Content>
        </Styled.SlidingContainer>
    );
};

export default HomeFeatures;
