import { z } from 'zod';

export const flightSearchRequestSchema = z.object({
    origin: z.object({
        skyId: z.string(),
        entityId: z.string(),
    }),
    destination: z.object({
        skyId: z.string(),
        entityId: z.string(),
    }),
    departureDate: z.string(),
    returnDate: z.string(),
    passengers: z.number().min(1),
    cabinClass: z.string(),
});

export const flightsResponseSchema = z.object({
    skyId: z.string(),
    entityId: z.string(),
    label: z.string(),
    presentation: z.object({
        title: z.string(),
        suggestionTitle: z.string(),
        subtitle: z.string(),
    }),
    navigation: z.object({
        entityId: z.string(),
        entityType: z.string(),
        localizedName: z.string(),
        relevantFlightParams: z.object({
            skyId: z.string(),
            entityId: z.string(),
            flightPlaceType: z.string(),
            localizedName: z.string(),
        }),
        relevantHotelParams: z.object({
            entityId: z.string(),
            entityType: z.string(),
            localizedName: z.string(),
        }),
    }),
});

export type FlightSearchRequestType = z.infer<typeof flightSearchRequestSchema>;
export type FlightsResponseType = z.infer<typeof flightsResponseSchema>;
