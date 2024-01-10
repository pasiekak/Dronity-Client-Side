import * as yup from "yup";

const dayBefore = new Date(Date.now() - 24 * 60 * 60 * 1000);

export const schemas = {
    auth: {
        loginForm: yup.object({
            login: yup.string().required("Login jest wymagany."),
            password: yup.string().required("Hasło jest wymagane."),
        }),
        registerForm: yup.object({
            login: yup.string().required("Login jest wymagany."),
            password: yup
                .string()
                .required("Hasło jest wymagane.")
                .test('len', "Musi mieć minimum 8 znaków", val => val.length >= 8)
                .matches(/[0-9]/, "Hasło musi zawierać cyfrę.")
                .matches(/[a-z]/, "Hasło musi zawierać małą literę.")
                .matches(/[A-Z]/, "Hasło musi zawierać dużą literę.")
                .matches(/\W/, "Hasło musi zawierać znak specjalny."),
            password2: yup
                .string()
                .required("Pole wymagane.")
                .oneOf([yup.ref("password"), null], "Hasła muszą być takie same."),
            email: yup
                .string()
                .email("Niepoprawny format email.")
                .required("Email jest wymagany."),
        }),
    },
    single: {
        text: {
            email: yup.object({
                email: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .email("Pole musi być formatu email.")
                    .test("len", "Maksymalnie 100 znaków.", (val) => val.length <= 100),
            }),
            firstName: yup.object({
                firstName: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .test("len", "Maksymalnie 100 znaków.", (val) => val.length <= 100),
            }),
            lastName: yup.object({
                lastName: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .test("len", "Maksymalnie 100 znaków.", (val) => val.length <= 100),
            }),
            phone: yup.object({
                phone: yup
                    .string()
                    .required("Pole wymagane.")
                    .matches(
                        /^\+\d{2} \d{9,14}$/,
                        "Prawidłowy format numeru telefonu to np. +48 123233233.",
                    ),
            }),
            license: yup.object({
                license: yup
                    .string()
                    .required("Pole wymagane.")
                    .matches(
                        /^POL-RP-[A-Z0-9]{12}$/,
                        "Prawidłowy format numeru pilota to np. POL-RP-SDA321SD1CA1.",
                    ),
            }),
            city: yup.object({
                city: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .test("len", "Maksymalnie 30 znaków.", (val) => val.length <= 30),
            }),
            title: yup.object({
                title: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .test("len", "Maksymalnie 75 znaków.", (val) => val.length <= 75),
            })
        },
        number: {
            operational_range: yup.object({
                operational_range: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .matches(/^\d+$/, "Tylko cyfry.")
                    .min(1, "Minimalnie 1 kilometr.")
                    .max(9999, "Maksymalnie 9999 kilometrów."),
            }),
            payment: yup.object({
                payment: yup.number()
                    .typeError('Kwota musi być liczbą.')
                    .required('Pole jest wymagane.')
                    .min(0, 'Kwota musi być dodatnia.')
            })
        },
        textarea: {
            description: yup.object({
                description: yup
                    .string()
                    .required("Pole jest wymagane.")
                    .test("len", "Maksymalnie 3000 znaków.", (val) => val.length <= 3000),
            }),
        },
    },
    others: {}
};

schemas.others.commission_add_or_edit = yup.object({
    title: schemas.single.text.title.fields.title,
    description: schemas.single.textarea.description.fields.description,
    city: schemas.single.text.city.fields.city,
    start_date: yup.date()
        .nullable()
        .transform((curr, orig) => orig === '' ? null : curr)
        .required('To pole jest wymagane.').min(dayBefore, 'Taki dzień już był.'),
    end_date: yup.date()
        .nullable()
        .transform((curr, orig) => orig === '' ? null : curr)
        .required('To pole jest wymagane.').min(yup.ref('start_date'), 'Data zakończenia zlecenia musi być po dacie rozpoczęcia.'),
    suggested_payment: schemas.single.number.payment.fields.payment

})
