import { useState } from 'react';
import { RegistrationContainer } from './components/registration/registrationContainer';
import styles from './App.module.css';

export const App = () => {
	const [registration, setRegistration] = useState(false);

	const onClick = () => {
		setRegistration(true);
	};
	return (
		<>
			<button className={styles.btn} onClick={onClick}>
				Регистрация
			</button>
			{registration && (
				<div className={styles.registration}>
					<RegistrationContainer />
				</div>
			)}
		</>
	);
};
