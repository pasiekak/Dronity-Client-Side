import axios from "axios";

export const ServerCommunicator = {
    handleRequest: async (method, url, data) => {
        let response;
        try {
            let res = await axios({
                method, url, data
            })
            response = res.data
            if (res?.statusText === "No Content" && method === "delete" && res?.status === 204) response = {
                success: true,
                message: "Pomyślnie usunięto"
            };
        } catch (err) {
            response = ServerCommunicator.handleError(err);
        }
        return response;
    },

    handleFilesRequest: async (url, formData) => {
        let response;
        try {
            let res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            response = res.data;
        } catch (err) {
            response = ServerCommunicator.handleError(err);
        }
        return response;
    },

    handleError: (err) => {
        let response = err?.response?.data;
        if (err?.response?.status === 500) response = {
            success: false,
            message: "Błąd serwera."
        }

        return response;
    }

}