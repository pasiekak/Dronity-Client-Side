import {useForm} from "react-hook-form";
import {formatDate} from "../../../../../shared/utils/utils";

const FilteringForm = ({filters, setFilters}) => {
    const {register, handleSubmit, watch, reset} = useForm({
        defaultValues: {
            minStartDate: filters.minStartDate === null ? null : formatDate(new Date(filters.minStartDate).toISOString()),
            maxStartDate: filters.maxStartDate === null ? null : formatDate(new Date(filters.maxStartDate).toISOString()),
            minPayment: parseFloat(filters.minPayment),
            maxPayment: parseFloat(filters.maxPayment)
        },
    })

    const onSubmit = (data) => {
        if (data.maxStartDate !== null) {
            let temp = new Date(data.maxStartDate);
            if (!isNaN(temp.getTime())) {
                data.maxStartDate = temp
            } else {
                data.maxStartDate = null
            }
        }
        if (data.minStartDate !== null) {
            let temp = new Date(data.minStartDate);
            if (!isNaN(temp.getTime())) {
                data.minStartDate = temp
            } else {
                data.minStartDate = null
            }
        }

        if (data.minPayment === '') data.minPayment = null
        if (data.maxPayment === '') data.maxPayment = null
        setFilters(data);
    }

    const clearFilters = () => {
        setFilters({
            minPayment: 1,
            maxPayment: 99999,
            minStartDate: new Date(),
            maxStartDate: null
        })
        reset();
    }

    return (
        <form className="filtering-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="filter-wrapper">
                <label htmlFor="minStartDate">Rozpoczęcie zlecenia</label>
                <div className="dates">
                    <input type="date" {...register("minStartDate")} min={formatDate(new Date())}/>
                    <span>-</span>
                    <input type="date" {...register("maxStartDate")} min={watch('minStartDate')}/>
                </div>
            </div>
            <div className="filter-wrapper">
                <label htmlFor="minPayment">Sugerowana zapłata</label>
                <div className="payments">
                    <input type="number" {...register("minPayment")} min={1} max={99999} step={0.01}/>
                    <span>-</span>
                    <input
                        type="number" {...register("maxPayment")}
                        min={1 || null}
                        max={99999}
                        step={0.01}/>
                </div>
            </div>
            <div className="buttons">
                <button type="button" className="dark_blue_button" onClick={() => clearFilters()}>Wyczyść filtry
                </button>
                <button type="submit" className="dark_blue_button">Filtruj</button>
            </div>
        </form>
    )
}

export default FilteringForm;