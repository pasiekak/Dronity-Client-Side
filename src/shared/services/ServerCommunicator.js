import axios from "axios";

export const ServerCommunicator = {
    handleRequest: async (method, url, data) => {
        let response = {
            success: true,
        };
        try {
            let res = await axios({
                method, url, data
            })
            response.data = res.data;
        } catch (err) {
            response = ServerCommunicator.handleError(err);
        }
        return response;
    },

    handleFilesRequest: async (url, formData) => {
        let response = {
            success: true,
        };
        try {
            let res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            response.data = res.data;
        } catch (err) {
            response = ServerCommunicator.handleError(err);
        }
        return response;
    },

    handleError: (err) => {
        const status = err?.response?.status;
        const response = {
            success: false,
            message: 'Wystąpił błąd'
        };

        switch (status) {
            case 400: response.message = 'Nieprawidłowe żądanie'; break;
            case 401: response.message = 'Brak autoryzacji'; break;
            case 402: response.message = 'Wymagana płatność'; break;
            case 403: response.message = 'Zabronione'; break;
            case 404: response.message = 'Nie znaleziono'; break;
            case 409: response.message = 'Konflikt'; break;
            case 422: response.message = 'Takie konto już istnieje'; break;
            case 500: response.message = 'Wewnętrzny błąd serwera'; break;
            default:
                if (err.code === 'ECONNABORTED') {
                    response.message = 'Żądanie przerwane z powodu przekroczenia czasu oczekiwania';
                } else if (err.message === 'Network Error') {
                    response.message = 'Błąd sieciowy';
                }
                break;
        }

        return response;
    }

}