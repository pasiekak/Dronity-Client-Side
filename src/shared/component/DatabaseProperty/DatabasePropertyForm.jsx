import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemas} from "../../schemas/schemas";
import {ServerCommunicator} from "../../../services/ServerCommunicator";
import {useContext} from "react";
import {UserContext} from "../../context/user/UserContext";

const DatabasePropertyForm = ({ updateURL, type, name, placeholder, label, setShowForm, setActualValue }) => {
    const { register,
        handleSubmit,
        formState : {errors}
    } = useForm({
        resolver: yupResolver(schemas.single[type](name))
    });
    const { user, setUserCookie } = useContext(UserContext);

    const onSubmit = (d) => {
        const data = {
            [name] : d[name]
        }
        ServerCommunicator.handleRequest('put',updateURL,data).then(res => {
            console.log(res)
        })

        setActualValue(data[name])
        if(name === 'email') setUserCookie({...user, email: data[name]})
        setShowForm(false);
    }

    return (
        <form className='database-property' onSubmit={handleSubmit(onSubmit)}>
            <div className='left'>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}

                    {...register(name)}
                />
                <p className='error'>{errors[name]?.message}</p>

            </div>
            <div className='right'>
                <button onClick={() => setShowForm(false)}>
                    Cofnij
                </button>
                <button type="submit">
                    Zatwierdź
                </button>
            </div>
        </form>
    )
}

export default DatabasePropertyForm;