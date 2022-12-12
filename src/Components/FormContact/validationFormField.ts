import * as zod from "zod";

export const ContactClientFormValidationSchema = zod.object({
  name: zod
    .string()
    .min(3, "Nome curto demais. Minimo de 3 caracteres")
    .max(30, "Nome muito extenso. Máximo de 30 caracteres"),
  phone: zod
    .string()
    .regex(
      /^\([0-9]{2}\)[0-9]?[0-9]{4}-[0-9]{4}$/,
      "Telefone inválido. Utilize o formato DDD + 999999999"
    ),
  email: zod.string().email({ message: "Email inválido" }),
  position: zod
    .string()
    .min(3, "Nome curto demais. Minimo de 3 caracteres")
    .max(30, "Nome muito extenso. Máximo de 30 caracteres"),
});
