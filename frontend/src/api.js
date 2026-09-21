const API_URL = "http://localhost:8080";

export const apiRequest = async (endpoint, options = {}) => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            ...options,

            headers: {
                "Content-Type": "application/json",
                ...(token && {
                    Authorization: `Bearer ${token}`
                }),
                ...options.headers
            }
        }
    );

    const data = await response.text();

    if (!response.ok) {
        throw new Error(data || "Something went wrong");
    }

    return data;
};