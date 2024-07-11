const a = 1;
export const b = 12;

export default a;

import z, { number, string } from "zod";

const StringZodSchema = z.string().min(2, "Atleast 2 size");

type StringZodType = z.infer<typeof StringZodSchema>;

type X = {
  age: number;
  name: string;
};
