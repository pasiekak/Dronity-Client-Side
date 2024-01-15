import {useForm} from "react-hook-form";
import {ServerCommunicator} from "../../../../../../../../../shared/services/ServerCommunicator";
import {useState} from "react";

const ApplyForm = ({suggestedPayment, id, setShowForm, setCommission}) => {
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            offered_payment: suggestedPayment
        }
    })
    const onSubmit = (data) => {
        setLoading(prev => !prev);
        ServerCommunicator.handleRequest('post', `/api/applications`, {
            id,
            offered_payment: parseFloat(data.offered_payment).toFixed(2)
        }).then(res => {
            if (res.success) {
                setCommission(prev => {
                    return {...prev, applied: true}
                })
            }
        }).finally(() => {
            setLoading(false)
            setShowForm(false);
        })
    }

    return (
        <form className="apply-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="offered_payment">Proponowana przez Ciebie kwota za wykonanie zlecenia.</label>
            <input type="number"
                   min={1}
                   max={99999}
                   step={0.01}
                   placeholder="Podaj proponowaną przez Ciebie kwotę za wykonanie zlecenia" {...register("offered_payment")}/>
            <div className="buttons">
                <button type="button" className="dark_blue_button" onClick={() => setShowForm(false)}>
                    Anuluj
                </button>
                <button type="submit" className="violet_button">
                    Zatwierdź zgłoszenie
                </button>
            </div>
        </form>
    )
}

export default ApplyForm;