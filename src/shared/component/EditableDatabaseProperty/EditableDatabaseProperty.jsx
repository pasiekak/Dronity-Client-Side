import {useState} from "react";
import "./database-property.css";
import EditableDatabasePropertyForm from "./EditableDatabasePropertyForm";

const EditableDatabaseProperty = ({
                                      actualValue,
                                      setUserDetails,
                                      detailPath,
                                      updateURL,
                                      type,
                                      name,
                                      placeholder,
                                      label,
                                      editable,
                                  }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {showForm && editable ? (
                <EditableDatabasePropertyForm
                    valueBefore={actualValue}
                    updateURL={updateURL}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                    setShowForm={setShowForm}
                    setUserDetails={setUserDetails}
                    detailPath={detailPath}
                />
            ) : (
                <div className="database-property">
                    <div className={editable ? "left" : "left smaller"}>
                        <span className="label">{label}</span>
                        <span className="value">{actualValue}</span>
                    </div>
                    {editable && (
                        <div className="right">
                            <button className='violet_button' onClick={() => setShowForm((prev) => !prev)}>
                                Zmień
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default EditableDatabaseProperty;
