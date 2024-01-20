import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ServerCommunicator} from "../../../../../../../shared/services/ServerCommunicator";
import {useState} from "react";
import {schemas} from "../../../../../../../shared/schemas/schemas";

const NewCommissionForm = ({handleAddCommission}) => {
    const [success, setSuccess] = useState(false);
    const [newCommissionID, setNewCommissionID] = useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schemas.others.commission_add_or_edit),

    });

    const onSubmit = (data) => {
        ServerCommunicator.handleRequest('post', '/api/commissions', data).then(res => {
            if (res.success) {
                console.log(res.data)
                handleAddCommission(res.data.id);
                setNewCommissionID(res.data.id);
                setSuccess(true);
                reset();
            } else {
                setSuccess(false);
                reset();
            }
        })
    }

    return (
        <form className="new-commission-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <label htmlFor="title">Tytuł zlecenia</label>
                <input type="text" placeholder="Wpisz tytuł zlecenia" {...register("title")} />
                <span className="error">{errors?.title?.message}</span>
            </div>
            <div className="field">
                <label htmlFor="description">Opis zlecenia</label>
                <textarea placeholder="Wpisz opis twojego nowego zlecenia" {...register("description")}/>
                <span className="error">{errors?.description?.message}</span>
            </div>
            <div className="field">
                <label htmlFor="city">Miasto, w którym wykonywane ma być zlecenie</label>
                <input type="text" placeholder="Wpisz miasto zlecenia" {...register("city")} />
                <span className="error">{errors?.city?.message}</span>
            </div>
            <div className="dates">
                <div className="field">
                    <label htmlFor="start_date">Data rozpoczęcia zlecenia</label>
                    <input type="date" {...register("start_date")} />
                    <span className="error">{errors?.start_date?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="end_date">Data zakończenia zlecenia</label>
                    <input type="date" {...register("end_date")} />
                    <span className="error">{errors?.end_date?.message}</span>
                </div>
            </div>
            <div className="field">
                <label htmlFor="suggested_payment">Proponowana zapłata</label>
                <input type="number" step={0.01}
                       placeholder="Wpisz proponowaną kwotę zapłaty" {...register("suggested_payment")} />
                <span className="error">{errors?.suggested_payment?.message}</span>
                <h2 className="success-message">{success && `Udało Ci się dodać nowe zlecenie! Możesz teraz zobaczyć jego szczegóły w zakładce 'Twoje zlecenia'. ID nowego zlecenia to ${newCommissionID}.`}</h2>
            </div>
            <button type="submit" className='violet_button'>Dodaj nowe zlecenie</button>
        </form>
    )
}

export default NewCommissionForm;