/* eslint-disable no-useless-catch */
const API_URL = '/api/berita';

class BeritaService {
    async getAll() {
        try {
            const response = await fetch(`${API_URL}/read.php`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.records) {
                return data.records;
            }
            return [];
        } catch (error) {
            console.error('Error in getAll:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${API_URL}/read_one.php?id=${id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.message) {
                throw new Error(data.message);
            }

            return data;
        } catch (error) {
            console.error('Error in getById:', error);
            throw error;
        }
    }

    async getLatestThree() {
        try {
            const response = await fetch(`${API_URL}/latest_three.php`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.records) {
                return data.records;
            }
            return [];
        } catch (error) {
            console.error('Error in getLatestThree:', error);
            throw error;
        }
    }

    async create(beritaData) {
        try {
            const response = await fetch(`${API_URL}/create.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(beritaData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('Error in create:', error);
            throw error;
        }
    }

    async update(beritaData) {
        try {
            const response = await fetch(`${API_URL}/update.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(beritaData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('Error in update:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${API_URL}/delete.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ id })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('Error in delete:', error);
            throw error;
        }
    }
}

export const beritaService = new BeritaService();