import { RegistrationLayout } from './registrationLayout';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendFormData } from '../../utils/send-form-data';

const fieldSchema = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
			'Введите правильный адрес почты',
		),
	password: yup.string().min(8, 'Пароль должен быть не мение 8 символов'),
	confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const RegistrationContainer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(fieldSchema),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	return (
		<RegistrationLayout
			register={register}
			handleSubmit={handleSubmit(sendFormData)}
			emailError={emailError}
			passwordError={passwordError}
			confirmPasswordError={confirmPasswordError}
		/>
	);
};
