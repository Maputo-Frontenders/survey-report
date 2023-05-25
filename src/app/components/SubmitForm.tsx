'use client';

import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const submitFormDataSchema = z.object({
	email: z.string().nonempty('O E-mail é obrigatório.').toLowerCase().email('E-mail Inválido'),
	firstName: z.string().nonempty('O primeioro nome é obrigatório.').min(3, 'No mínimo 3 caracteres.'),
	lastName: z.string().nonempty('O último nome é obrigatório.').min(3, 'No mínimo 3 caracteres.'),
	companyName: z.string().nonempty('Nome da empresa é obrigatório.').min(5, 'No mínimo 5 caracteres.'),
	jobTitle: z.string().nonempty('Título do cargo é obrigatório').min(5, 'No mínimo 5 caracteres.'),
	province: z.string().nonempty('Selecione a província!'),
})

type SubmitFormData = z.infer<typeof submitFormDataSchema>
const style = {
	main: "flex flex-col text-center w-full lg:max-w-[250px] group",
	label: "font-bold",
	input: "border-b border-gray-500 group-focus-within:border-primary p-2 text-center w-full lg:max-w-[250px] bg-white outline-none text-black"
}

const handleSelect = ($event: any) => {
	console.log($event)
}

const SubmitForm: React.FC = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		resolver: zodResolver(submitFormDataSchema)
	})

	const sendPDF = (data: any): void => {
		console.log("data:", data)
		reset()
		window.alert('Check o seu email.')
	}

	return (
		<div className="flex justify-center items-center w-screen flex-col p-5 mb-20">
			<p className="text-white mb-5">Preencha o formulário para receber o resultado da survey por e-mail.</p>
			
			<form
				onSubmit={handleSubmit(sendPDF)}
				className="p-4 w-full max-w-[600px] bg-white py-7 pt-12 rounded"
			>
				<div className="flex gap-10 flex-wrap justify-center">
					<div className={style.main}>
						<label className={style.label}>E-mail</label>
						<input className={style.input} {...register('email')} />
						{errors?.email && (<span className="text-red-700">{`${errors.email.message}`}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Primeiro Nome</label>
						<input className={style.input} {...register('firstName')} />
						{errors?.firstName && (<span className="text-red-700">{`${errors.firstName.message}`}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Ultimo Nome</label>
						<input className={style.input} {...register('lastName')} />
						{errors?.lastName && (<span className="text-red-700">{`${errors?.lastName.message}`}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Nome da Empresa</label>
						<input className={style.input} {...register('companyName')}/>
											{ errors?.companyName && (<span className="text-red-700">{`${errors.companyName.message}`}</span>)}
					</div>
					<div className={style.main}>
						<label className={style.label}>Titulo do cargo</label>
						<input className={style.input} {...register('jobTitle')}/>
											{ errors?.jobTitle && (<span className="text-red-700">{`${errors.jobTitle.message}`}</span>)}
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
							<option value="others" onSelect={($event) => handleSelect($event)}>Outros</option>
						</select>
						{ errors?.province && (<span className="text-red-700">{`${errors.province.message}`}</span>)}
					</div>
				</div>

				<div className="mx-auto w-min relative top-14">
					<input
						type="submit"
						value="Receber Resultados"
						className="bg-green-500 p-4 text-white font-medium rounded cursor-pointer"
					/>
				</div>
			</form>
		</div>
	)
}

export default SubmitForm
