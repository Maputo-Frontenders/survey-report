'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const submitFormDataSchema = z.object({
	email: z.string().nonempty('O E-mail é obrigatório.').toLowerCase().email('E-mail Inválido'),
	firstName: z.string().nonempty('o primeioro nome é obrigatório.').min(3, 'no mínimo 3 caracteres.'),
	lastName: z.string().nonempty('o último nome é obrigatório.').min(3, 'no mínimo 3 caracteres.'),
	companyName: z.string().nonempty('nome da empresa é obrigatório.').min(5, 'no mínimo 5 caracteres.'),
	jobTitle: z.string().nonempty('título do cargo é obrigatório').min(5, 'no mínimo 5 caracteres.'),
	province: z.string().nonempty('Selecione a província!'),
})

type SubmitFormData = z.infer<submitFormDataSchema>

const style = {
	main:"flex flex-col text-center  w-[250px] opacity-50",
	label: "",
	input: "p-2 text-center w-[250px] bg-blue-100 outline-none text-black"
}

const SubmitForm: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(submitFormDataSchema)
	})
  

	const sendPDF = (data: SubmitFormData) => {
    console.log("data:", data)
	}

	return (
		<div className="flex justify-center items-center w-screen flex-col">
            <p className="text-white p-2">Preencha o formulário para receber o resultado da survey por e-mail.</p>
			<form
				onSubmit={handleSubmit(sendPDF)}
				className="p-4 w-[100vw] max-w-[600px] flex flex-col md:flex-row md:flex-wrap gap-4 bg-white justify-center items-center py-7 pt-12 "
			>
				<div className="gap-6 flex flex-col">
					<div className={style.main}>
						<label className={style.label}>E-mail</label>
						<input className={style.input} {...register('email')}/>
						{ errors?.email && (<span className="text-red-700">{errors.email.message}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Primeiro Nome</label>
						<input className={style.input} {...register('firstName')}/>
            { errors?.firstName && (<span className="text-red-700">{errors.firstName.message}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Ultimo Nome</label>
						<input className={style.input} {...register('lastName')}/>
            { errors?.lastName && (<span className="text-red-700">{errors.lastName.message}</span>)}
					</div>
				</div>
				<div className="gap-6 flex flex-col">
					<div className={style.main}>
						<label className={style.label}>Nome da Empresa</label>
						<input className={style.input} {...register('companyName')}/>
            { errors?.companyName && (<span className="text-red-700">{errors.companyName.message}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Titulo do cargo</label>
						<input className={style.input} {...register('jobTitle')}/>
            { errors?.jobTitle && (<span className="text-red-700">{errors.jobTitle.message}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Província</label>
						<select className={style.input} {...register('province')}>
                <option ></option>
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
		        	</select>
              { errors?.province && (<span className="text-red-700">{errors.province.message}</span>)}
					</div>
				</div>
				<input 
					type="submit" 
					value="Receber Resultados"
					className="relative bg-green-500 top-14 p-4 text-white font-medium"
				/>
			</form>
		</div>
	)
}

export default SubmitForm
