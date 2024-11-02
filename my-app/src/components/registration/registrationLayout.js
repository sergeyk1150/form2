import styles from './registration.module.css';

export const RegistrationLayout = (props) => {
	const { register, handleSubmit, emailError, passwordError, confirmPasswordError } =
		props;
	return (
		<form className={styles.registration__form} onSubmit={handleSubmit}>
			<h2 className={styles.form__title}>Регистрация</h2>
			<label className={styles.label}>Email</label>
			<input
				className={`form-email ${styles.input}`}
				type="text"
				{...register('email')}
			></input>
			{emailError && <span className={styles.error}>{emailError}</span>}
			<label className={styles.label}>Password</label>
			<input
				className={`form-password ${styles.input}`}
				type="password"
				{...register('password')}
			></input>
			{passwordError && <span className={styles.error}>{passwordError}</span>}
			<label className={styles.label}>Confirm the password</label>
			<input
				className={`form-password ${styles.input}`}
				type="password"
				{...register('confirmPassword')}
			></input>
			{confirmPasswordError && (
				<span className={styles.error}>{confirmPasswordError}</span>
			)}
			<button
				className={`form__button ${styles.btn}`}
				disabled={confirmPasswordError}
				type="submit"
			>
				Зарегистрироваться
			</button>
		</form>
	);
};
