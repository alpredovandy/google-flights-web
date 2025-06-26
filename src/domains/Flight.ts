import { z } from 'zod';

export const airportsResponseSchema = z.object({
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

export const flightsRequestSchema = z.object({
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
    currency: z.string(),
    market: z.string(),
    countryCode: z.string(),
    sortBy: z.string(),
});

export const flightsResponseSchema = z.object({
    id: z.string(),
    price: z.object({
        raw: z.number(),
        formatted: z.string(),
        pricingOptionId: z.string(),
    }),
    legs: z.array(
        z.object({
            id: z.string(),
            origin: z.object({
                id: z.string(),
                entityId: z.string(),
                name: z.string(),
                displayCode: z.string(),
                city: z.string(),
                country: z.string(),
                isHighlighted: z.boolean(),
            }),
            destination: z.object({
                id: z.string(),
                entityId: z.string(),
                name: z.string(),
                displayCode: z.string(),
                city: z.string(),
                country: z.string(),
                isHighlighted: z.boolean(),
            }),
            durationInMinutes: z.number(),
            stopCount: z.number(),
            isSmallestStops: z.boolean(),
            departure: z.string(),
            arrival: z.string(),
            timeDeltaInDays: z.number(),
            carriers: z.object({
                marketing: z.array(
                    z.object({
                        id: z.number(),
                        alternateId: z.string(),
                        logoUrl: z.string(),
                        name: z.string(),
                    })
                ),
                operationType: z.string(),
            }),
            segments: z.array(
                z.object({
                    id: z.string(),
                    origin: z.object({
                        flightPlaceId: z.string(),
                        displayCode: z.string(),
                        parent: z.object({
                            flightPlaceId: z.string(),
                            displayCode: z.string(),
                            name: z.string(),
                            type: z.string(),
                        }),
                        name: z.string(),
                        type: z.string(),
                        country: z.string(),
                    }),
                    destination: z.object({
                        flightPlaceId: z.string(),
                        displayCode: z.string(),
                        parent: z.object({
                            flightPlaceId: z.string(),
                            displayCode: z.string(),
                            name: z.string(),
                            type: z.string(),
                        }),
                        name: z.string(),
                        type: z.string(),
                        country: z.string(),
                    }),
                    departure: z.string(),
                    arrival: z.string(),
                    durationInMinutes: z.number(),
                    flightNumber: z.string(),
                    marketingCarrier: z.object({
                        id: z.number(),
                        name: z.string(),
                        alternateId: z.string(),
                        allianceId: z.number(),
                        displayCode: z.string(),
                    }),
                    operatingCarrier: z.object({
                        id: z.number(),
                        name: z.string(),
                        alternateId: z.string(),
                        allianceId: z.number(),
                        displayCode: z.string(),
                    }),
                    transportMode: z.string(),
                })
            ),
        })
    ),
    isSelfTransfer: z.boolean(),
    isProtectedSelfTransfer: z.boolean(),
    farePolicy: z.object({
        isChangeAllowed: z.boolean(),
        isPartiallyChangeable: z.boolean(),
        isCancellationAllowed: z.boolean(),
        isPartiallyRefundable: z.boolean(),
    }),
    fareAttributes: z.object({}),
    tags: z.array(z.string()),
    isMashUp: z.boolean(),
    hasFlexibleOptions: z.boolean(),
    score: z.number(),
});

export type AirportsResponseType = z.infer<typeof airportsResponseSchema>;
export type FlightsRequestType = z.infer<typeof flightsRequestSchema>;
export type FlightsResponseType = z.infer<typeof flightsResponseSchema>;
