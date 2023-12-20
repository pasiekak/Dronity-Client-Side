import {useEffect, useState} from "react";
import './database-property.css';
import DatabasePropertyForm from "./DatabasePropertyForm";

const DatabaseProperty = ({actualValue, setActualValue, updateURL, type, name, placeholder, label}) => {
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {

    }, []);

    return (
        <>
            {showForm ?
                <DatabasePropertyForm updateURL={updateURL} type={type} name={name} placeholder={placeholder} label={label} setShowForm={setShowForm} setActualValue={setActualValue}/>
                :
                <div className='database-property'>
                    <div className='left'>
                        <p className='label'>{label}</p>
                        <p className='value'>{actualValue}</p>
                    </div>
                    <div className='right'>
                        <button onClick={() => setShowForm(prev => !prev)}>
                            Zmień
                        </button>
                    </div>
                </div>
            }
        </>

    )
}

export default DatabaseProperty;