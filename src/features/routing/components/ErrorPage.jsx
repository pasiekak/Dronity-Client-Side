import {useRouteError, Link, isRouteErrorResponse} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='error-page'>
            {isRouteErrorResponse(error) &&
            <>
                <div>
                    <h1>Wystąpił błąd</h1>
                    <h2>Kod statusu: {error.status}</h2>
                    <p>Wiadomość: {error.statusText}</p>
                    {error.data?.message && <p>{error.data.message}</p>}
                </div>
            </>
            }
            <Link to='/'>Wróć do strony głównej</Link>
        </div>
    )
}

export default ErrorPage;