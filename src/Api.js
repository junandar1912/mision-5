import axios from 'axios';

// Ganti dengan URL Mock API Anda
const API_URL = 'https://6849ce9545f4c0f5ee72e8de.mockapi.io/VIdeobelajar'; // Contoh URL API

// Fungsi untuk mengambil data
export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/Kartu`); // Ganti dengan endpoint yang sesuai
    return response.data; // Mengembalikan data API
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // jika gagal
  }
};
