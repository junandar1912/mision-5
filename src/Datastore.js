// Import fungsi `create` dari Zustand untuk membuat store
import { create } from 'zustand';

// Fungsi untuk mengambil data user dari localStorage saat pertama kali aplikasi dimuat
const getInitialUser = () => {
  try {
    return JSON.parse(localStorage.getItem('registeredUser')) || null; // Ambil data jika ada, kalau tidak, return null
  } catch {
    return null; // Jika gagal parse, tetap aman
  }
};

// Buat store Zustand
const Datastore = create((set) => ({
  // State awal: ambil user dari localStorage (jika ada)
  user: getInitialUser(),

  // State login: true jika ada data user di localStorage
  isLoggedIn: !!getInitialUser(),

  // Fungsi untuk menyimpan user baru ke store dan localStorage
  setUser: (userData) => {
    localStorage.setItem('registeredUser', JSON.stringify(userData)); // Simpan ke localStorage
    set({ user: userData, isLoggedIn: true }); // Simpan ke Zustand store
  },

  // Fungsi untuk memperbarui sebagian data user, seperti nama atau nomor HP
  updateUser: (updates) =>
    set((state) => {
      const updatedUser = { ...state.user, ...updates }; // Gabungkan data lama dan yang diperbarui
      localStorage.setItem('registeredUser', JSON.stringify(updatedUser)); // Simpan yang baru ke localStorage
      return { user: updatedUser }; // Update di Zustand store
    }),

  // Fungsi untuk menghapus data user dari store dan localStorage (biasanya saat logout)
  clearUser: () => {
    localStorage.removeItem('registeredUser'); // Hapus dari localStorage
    set({ user: null, isLoggedIn: false }); // Reset state di Zustand
  },
}));

// Ekspor store agar bisa digunakan di komponen lain
export default Datastore;
