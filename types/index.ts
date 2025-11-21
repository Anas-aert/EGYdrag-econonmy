type RatesResponse = {
  success: boolean;
  base: string;
  rates: Record<string, number>;
  date: string;
};

export type { RatesResponse };