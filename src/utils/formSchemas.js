import { nullable, z } from "zod";

const nonEmptyHtmlString = z.string().refine((value) => {
  const strippedValue = value.replace(/<[^>]*>?/gm, '').trim();
  return strippedValue.length > 0;
}, {
  message: "Field cannot be empty",
});

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const JobInformationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.array(z.number()),
  salary: z.array(z.number()).length(2, "Salary range is required"),
  categories: z.array(z.string()),
  required_skills: z.nullable(z.string()),
});

export const JobDescriptionSchema = z.object({
  description: nonEmptyHtmlString,
  responsibility: nonEmptyHtmlString,
  qualification: nonEmptyHtmlString,
  "nice_to_have": nonEmptyHtmlString,
});

export const JobBenefitSchema = z.object({
  benefit: nonEmptyHtmlString
});