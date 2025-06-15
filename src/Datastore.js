// Datastore.js
import { create } from 'zustand';

// Path default avatar yang akan dipakai jika user belum punya foto
const defaultAvatar = "../src/assets/gambar/avatar/avatar(1).svg";

// Fungsi untuk mengambil user dari localStorage saat pertama kali aplikasi dijalankan
// Di sini kita juga pastikan kalau user tidak punya photo, kita set photo default
const getInitialUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem('registrasiUser'));
    if (user) {
      // **Jika user ada tapi belum punya photo, set photo default**
      if (!user.photo) {
        user.photo = defaultAvatar;  // <<< Perubahan utama di sini
      }
      return user;
    }
    // Jika user belum ada di localStorage, buat object user baru dengan photo default
    return { photo: defaultAvatar };  // <<< Perubahan utama di sini juga
  } catch {
    // Jika terjadi error parsing, tetap kembalikan user dengan photo default
    return { photo: defaultAvatar };  // <<< Perubahan utama di sini juga
  }
};

const Datastore = create((set) => ({
  user: getInitialUser(),
  isLoggedIn: !!getInitialUser(),

  setUser: (userData) => { // user data
    localStorage.setItem('registrasiUser', JSON.stringify(userData));
    set({ user: userData, isLoggedIn: true });
  },

  updateUser: (updates) =>
    set((state) => {
      const currentUser = state.user || {};
      const updatedUser = { // update
        ...currentUser,
        ...updates,
        photo: updates.photo || currentUser.photo || defaultAvatar,
      };
      localStorage.setItem('registrasiUser', JSON.stringify(updatedUser));
      return { user: updatedUser };
    }),

  clearUser: () => {  // menghapus user
    localStorage.removeItem('registrasiUser');
    set({ user: null, isLoggedIn: false });
  },

  progress: {
    current: 10,
    max: 12,
  },

  setProgress: (newProgress) => set({ progress: newProgress }),

  updateProgressCurrent: (newCurrent) =>
    set((state) => ({
      progress: {
        ...state.progress,
        current: newCurrent > state.progress.max ? state.progress.max : newCurrent,
      },
    })),
}));

export default Datastore;
