import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

export const phoneValidation = z
  .string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  })
  .min(1, {
    message:
      "Invalid phone number - Please ensure the number includes a valid country code.",
  })
  .refine(
    (value) => value.includes("+"),
    "Invalid phone number - Please ensure the number includes a valid country code."
  )
  .transform((arg, ctx) => {
    // Ensure the number starts with a `+`, prepend it if not
    const formattedArg = arg.startsWith("+") ? arg : `+${arg}`;

    // Parse the phone number (expecting a full international format)
    const phone = parsePhoneNumberFromString(formattedArg, {
      extract: false, // Ensures we only extract a valid phone number
    });

    // Validate the phone number
    if (phone && phone.isValid()) {
      return phone.number; // Return the validated phone number
    }

    // Add custom error if phone number is invalid
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message:
        "Invalid phone number - Please ensure the number includes a valid country code.",
    });

    return z.NEVER; // Prevent further transformations
  });
