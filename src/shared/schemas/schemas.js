import * as yup from 'yup';

export const schemas = {
    auth : {
        loginForm : yup.object({
            login: yup.string().required('Login jest wymagany'),
            password: yup.string().required('Hasło jest wymagane')
        }),
        registerForm : yup.object({
            login: yup.string()
                .required('Login jest wymagany'),
            password: yup.string()
                .required('Hasło jest wymagane')
                .matches(/[0-9]/, 'Hasło musi zawierać cyfrę')
                .matches(/[a-z]/, 'Hasło musi zawierać małą literę')
                .matches(/[A-Z]/, 'Hasło musi zawierać dużą literę')
                .matches(/\W/, 'Hasło musi zawierać znak specjalny'),
            password2: yup.string()
                .required('Pole wymagane')
                .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
            email: yup.string()
                .email('Niepoprawny format email')
                .required('Email jest wymagany'),
        })
    }
}