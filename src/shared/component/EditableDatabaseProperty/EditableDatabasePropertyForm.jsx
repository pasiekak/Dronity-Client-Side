import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemas} from "../../schemas/schemas";
import {ServerCommunicator} from "../../services/ServerCommunicator";
import {getModifiedObjectByPathAndName} from "../../utils/utils";

const EditableDatabasePropertyForm = ({
                                          valueBefore,
                                          updateURL,
                                          type,
                                          name,
                                          placeholder,
                                          label,
                                          setShowForm,
                                          setUserDetails,
                                          detailPath,
                                      }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schemas.single[type][name]),
        defaultValues: {
            [name]: valueBefore,
        },
    });

    const onSubmit = (d) => {
        const data = {
            [name]: d[name],
        };
        if (valueBefore !== d[name]) {
            setUserDetails((prevUserDetails) => {
                return getModifiedObjectByPathAndName(
                    prevUserDetails,
                    detailPath,
                    name,
                    data[name],
                );
            });
            ServerCommunicator.handleRequest("put", updateURL, data).then((res) => {
                if (!res.success) {
                    setError(name, {
                        message:
                            "Wystąpił błąd. Spróbuj użyć innego emaila lub spróbuj później.",
                    });
                    setUserDetails((prevUserDetails) => {
                        return getModifiedObjectByPathAndName(
                            prevUserDetails,
                            detailPath,
                            name,
                            valueBefore,
                        );
                    });
                } else {
                    setShowForm(false);
                }
            });
        } else {
            setShowForm(false);
        }
    };

    return (
        <form className="database-property" onSubmit={handleSubmit(onSubmit)}>
            <div className="left">
                <label htmlFor={name}>{label}</label>
                {type === "textarea" ? (
                    <textarea
                        {...register(name)}
                        placeholder={placeholder}
                        autoFocus={true}
                    />
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        {...register(name)}
                        autoFocus={true}
                    />
                )}
                <span className="error">{errors[name]?.message}</span>
            </div>
            <div className="right">
                <button className='violet_button' type="button" onClick={() => setShowForm(false)}>
                    Cofnij
                </button>
                <button className='violet_button' type="submit">Zatwierdź</button>
            </div>
        </form>
    );
};

export default EditableDatabasePropertyForm;
