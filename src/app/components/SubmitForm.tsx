"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CountryModal from "./modal/CountryModal";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

const submitFormDataSchema = z.object({
  email: z
    .string()
    .nonempty("O E-mail é obrigatório.")
    .toLowerCase()
    .email("E-mail Inválido"),
  firstName: z
    .string()
    .nonempty("O primeioro nome é obrigatório.")
    .min(3, "No mínimo 3 caracteres."),
  lastName: z
    .string()
    .nonempty("O último nome é obrigatório.")
    .min(3, "No mínimo 3 caracteres."),
  companyOrUniversityName: z
    .string()
    .nonempty("Nome da empresa é obrigatório.")
    .min(5, "No mínimo 5 caracteres."),
  jobOrCourseTitle: z
    .string()
    .nonempty("Título do cargo é obrigatório")
    .min(5, "No mínimo 5 caracteres."),
  province: z.string().nonempty("Selecione a província!"),
});

type SubmitFormData = z.infer<typeof submitFormDataSchema>;
const style = {
  main: "flex flex-col text-center w-full lg:max-w-[250px] group",
  label: "font-bold",
  input:
    "border-b border-gray-500 group-focus-within:border-primary p-2 text-center w-full lg:max-w-[250px] bg-white outline-none text-black",
};

const SubmitForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(submitFormDataSchema),
  });

  const sendPDF = (data: any): void => {
    console.log("data:", data);
    reset();
    window.alert("Check o seu email.");
  };

  const handleSelect = ($event: any) => {
    if ($event.target.value === "others") {
      setVisible(true);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-screen flex-col p-5 mb-20"
      id="form"
    >
      <p className="text-white mb-5">
        Preencha o formulário para receber o resultado da survey por e-mail.
      </p>

      <form
        onSubmit={handleSubmit(sendPDF)}
        className="p-4 w-full max-w-[600px] bg-white py-7 pt-12 rounded"
      >
        <div className="flex gap-10 flex-wrap justify-center">
          <div className={style.main}>
            <label className={style.label}>E-mail</label>
            <input className={style.input} {...register("email")} />
            {errors?.email && (
              <span className="text-red-700">{`${errors.email.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label className={style.label}>Nome</label>
            <input className={style.input} {...register("firstName")} />
            {errors?.firstName && (
              <span className="text-red-700">{`${errors.firstName.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label className={style.label}>Apelido</label>
            <input className={style.input} {...register("lastName")} />
            {errors?.lastName && (
              <span className="text-red-700">{`${errors?.lastName.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label className={style.label}>Nome da Empresa / Universidade</label>
            <input className={style.input} {...register("companyOrUniversityName")} />
            {errors?.companyOrUniversityName && (
              <span className="text-red-700">{`${errors.companyOrUniversityName.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label className={style.label}>Título do cargo / Curso</label>
            <input className={style.input} {...register("jobOrCourseTitle")} />
            {errors?.jobOrCourseTitle && (
              <span className="text-red-700">{`${errors.jobOrCourseTitle.message}`}</span>
            )}
          </div>
          <div className={style.main}>
            <label className={style.label}>Província / País</label>
            <select
              id="select"
              className={style.input}
              {...register("province")}
              onChange={handleSelect}
            >
              <option id="country"></option>
              <option value="Cabo Delegado">Cabo Delegado</option>
              <option value="Gaza">Gaza</option>
              <option value="Inhambane">Inhambane</option>
              <option value="Manica">Manica</option>
              <option value="Maputo Cidade">Maputo Cidade</option>
              <option value="Maputo Provincia">Maputo Província</option>
              <option value="Nampula">Nampula</option>
              <option value="Niassa">Niassa</option>
              <option value="Sofala">Sofala</option>
              <option value="Tete">Tete</option>
              <option value="Zambézia">Zambézia</option>
              <option value="others">Outros</option>
            </select>
            {errors?.province && (
              <span className="text-red-700">{`${errors.province.message}`}</span>
            )}
          </div>
        </div>

        <div className="mx-auto w-min relative top-14">
          <input
            type="submit"
            value="Receber Resultados"
            className="bg-green-500 p-4 text-white font-medium rounded cursor-pointer"
          />
        </div>
        <div>
          <CountryModal visible={visible} setVisible={setVisible} />
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
