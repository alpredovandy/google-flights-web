import { z } from 'zod';

export const paginateResponseSchema = <T extends z.ZodTypeAny>(contentSchema: T) =>
    z.object({
        data: contentSchema.optional(),
    });
export type PaginateResponseType<T = unknown> = z.infer<ReturnType<typeof paginateResponseSchema<z.ZodType<T>>>>;

export const paginateRequestSchema = z.object({
    type: z.string().optional(),
    page: z.number().optional(),
    limit: z.number().optional(),
    search: z.string().optional(),
});
export type PaginateRequestType = z.infer<typeof paginateRequestSchema>;
