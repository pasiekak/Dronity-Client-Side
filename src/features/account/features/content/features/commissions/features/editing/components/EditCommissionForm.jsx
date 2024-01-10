import {useForm} from "react-hook-form";
import '../styles/edit-commission-form-style.css';
import {formatDate} from "../../../../../../../../../shared/utils/utils";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemas} from "../../../../../../../../../shared/schemas/schemas";
import {ServerCommunicator} from "../../../../../../../../../shared/services/ServerCommunicator";
import {useState} from "react";

const EditCommissionForm = ({hideForm, details, set}) => {
    const [success, setSuccess] = useState(false);
    const [apiMessage, setApiMessage] = useState(null);
    const {
        id, title, description, city, start_date, end_date, suggested_payment
    } = details;
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            title, description, city, suggested_payment,
            start_date: formatDate(start_date),
            end_date: formatDate(end_date)
        },
        resolver: yupResolver(schemas.others.commission_add_or_edit)
    })

    const onSubmit = (data) => {
        ServerCommunicator.handleRequest('put', `/api/commissions/${id}`, data).then(res => {
            if (res.success) {
                set(prevCommission => {
                    return {...prevCommission, details: {...prevCommission.details, ...data}}
                })
                setSuccess(true);
                setApiMessage(res.message);
            } else {
                setApiMessage(res.message);
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'commission-edit-form'}>
            <div className={'field'}>
                <label htmlFor={'title'}>Tytuł zlecenia</label>
                <input type={'text'} placeholder={'Wpisz nowy tytuł zlecenia.'} {...register('title')}/>
                <span className={'error'}>{errors?.title?.message}</span>
            </div>
            <div className={'field'}>
                <label htmlFor={'description'}>Opis zlecenia</label>
                <textarea placeholder={'Wpisz nowy opis zlecenia.'} {...register('description')}/>
                <span className={'error'}>{errors?.description?.message}</span>
            </div>
            <div className={'field'}>
                <label htmlFor={'city'}>Miasto</label>
                <input type={'text'} placeholder={'Wpisz nowe miasto zlecenia.'} {...register('city')}/>
                <span className={'error'}>{errors?.city?.message}</span>
            </div>
            <div className={'dates'}>
                <div className={'field'}>
                    <label htmlFor={'start_date'}>Data rozpoczęcia zlecenia</label>
                    <input type={'date'} {...register('start_date')}/>
                    <span className={'error'}>{errors?.start_date?.message}</span>
                </div>
                <div className={'field'}>
                    <label htmlFor={'end_date'}>Data zakończenia zlecenia</label>
                    <input type={'date'} {...register('end_date')}/>
                    <span className={'error'}>{errors?.end_date?.message}</span>
                </div>
            </div>
            <div className={'field'}>
                <label htmlFor={'suggested_payment'}>Proponowana zapłata</label>
                <input type={'number'} step={0.01} {...register('suggested_payment')}/>
                <span className={'error'}>{errors?.suggested_payment?.message}</span>
                <h2 className={`${success ? 'success-message ' : ' '}api-message`}>{apiMessage}</h2>
            </div>


            <div className={'buttons'}>
                <button
                    type={'button'}
                    className={'violet_button'}
                    onClick={hideForm}>
                    Wróć
                </button>
                <button
                    type={'submit'}
                    className={'violet_button'}>
                    Zatwierdź
                </button>
            </div>
        </form>
    )
}

export default EditCommissionForm;