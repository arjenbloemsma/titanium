import { z } from "zod";

export const renameFormSchema = z.object({
   alias: z.string().regex(/^(inst|comp)-[a-z0-9]{3,}$/,
      'Alias must be in the format inst-xxxx or comp-xxxx, where the part after the hyhen is at least 3 characters long'),
   name: z.string().min(3, 'Name must be at least 3 characters long').optional(),
})
