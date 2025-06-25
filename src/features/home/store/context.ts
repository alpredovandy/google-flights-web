import { createContext, useContext } from 'react';

import { FlightContextProps } from './types';

export const FlightContext = createContext<FlightContextProps>({} as FlightContextProps);

export const useFlightContext = () => useContext(FlightContext);
