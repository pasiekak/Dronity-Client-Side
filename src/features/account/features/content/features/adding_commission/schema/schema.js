import * as yup from "yup";
import {schemas} from "../../../../../../../shared/schemas/schemas";

const now = new Date();
const dayBefore = new Date(now - 1000 * 60 * 60 * 24);

const schema = yup.object({
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

export default schema;