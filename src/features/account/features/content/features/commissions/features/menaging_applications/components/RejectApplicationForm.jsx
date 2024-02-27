import {useForm} from "react-hook-form";
import '../styles/reject-application-form.css'

const options = [
    {value: 1, message: "Kwota zaproponowana przez operatora była za wysoka"},
    {value: 2, message: "Brak danych operatora"},
    {value: 3, message: "Problemy z komunikacją"},
    {value: 4, message: "Nieodpowiednia licencja"},
    {value: 5, message: "Inne"}
]

const RejectApplicationForm = ({question, cancelFn, approveFn}) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            rejectType: 0,
            customComment: null,
        }
    });

    const onSubmit = (data) => {
        const formData = {
            rejectType: parseInt(data.rejectType),
            customComment: data.customComment === '' ? null : data.customComment
        }
        approveFn(formData)
    }

    return (
        <form className="yes-or-no reject-application-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="question">{question}</h1>
            <div className="field type">
                <label htmlFor="rejectType">Powód odrzucenia*</label>
                <select {...register("rejectType")} autoFocus>
                    <option value={0}>Nie wybrano żadnej opcji.</option>
                    {options.map((option, index) =>
                        <option value={option.value} key={index}>
                            {option.message}
                        </option>)}
                </select>
            </div>
            <div className="field comment">
                <label htmlFor="customComment">Dodaj komentarz do odrzucenia*</label>
                <textarea {...register("customComment", {maxLength: 255})}/>
            </div>
            <div className="buttons">
                <button className="dark_blue_button" onClick={cancelFn}>Nie</button>
                <button className="violet_button" type="submit">Odrzuć operatora</button>
            </div>
            <span className="info">* - Pola nieobowiązkowe</span>
        </form>
    )
}

export default RejectApplicationForm;