import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify";


import ButtonContact from "../Button";
import { FormContainer, FormContent, LabelField, InputField, SubmitContent, ErroMessage } from "./styles";
import { ContactClientFormValidationSchema } from "./validationFormField";

interface FormContactProps {
  name: string;
  email: string;
  phone: string;
  position: string;
}

const validationFormClient = ContactClientFormValidationSchema;


export default function FormContact() {

  const { register, handleSubmit, formState, reset } = useForm<FormContactProps>({
    resolver: zodResolver(validationFormClient),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: ""
    },
  })

  const handleContactClient = (data: FormContactProps) => {
    toast.success("Contato realizado como sucesso!");
    reset()
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(handleContactClient)} action="">
        <FormContent>

          <LabelField htmlFor="name">Nome</LabelField>
          <InputField
            type="text"
            id="name"
            {...register("name")}
            tabIndex={0}
            alt="Campo para inserir o nome completo"
          />
          <ErroMessage>{formState.errors?.name?.message}</ErroMessage>
          <LabelField htmlFor="email">Email Profissional</LabelField>
          <InputField
            type="text"
            id="email"
            placeholder="exemple@exemple.com"
            {...register("email")}
            tabIndex={0}
            alt="Campo para inserir o e-mail profissional"
          />
          <ErroMessage>{formState.errors?.email?.message}</ErroMessage>

          <LabelField htmlFor="phone">Telefone</LabelField>
          <InputField
            type="text"
            id="phone"
            placeholder="(DDD)99999-9999"
            {...register("phone")}
            tabIndex={0}
            alt="Campo para inserir o telefone"
          />
          <ErroMessage>{formState.errors?.phone?.message}</ErroMessage>

          <LabelField htmlFor="position">Cargo</LabelField>
          <InputField
            type="text"
            id="position"
            {...register("position")}
            tabIndex={0}
            alt="Campo para inserir o seu cargo profissional"
          />
          <ErroMessage>{formState.errors?.position?.message}</ErroMessage>


          <SubmitContent>
            <ButtonContact titleButton="Solicitar Demonstração" typeButton="submit" />
          </SubmitContent>
        </FormContent>
      </form>
    </FormContainer>
  )
}