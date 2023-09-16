import z from "zod";

const getPricesValidation = z.object({
  symbol: z.string(),
});

export { getPricesValidation };
