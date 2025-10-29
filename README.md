# E-Commerce Lite

**E-Commerce Lite** adalah sebuah aplikasi web e-commerce front-end yang modern, responsif, dan kaya fitur. Proyek ini dibangun menggunakan React, TypeScript, dan Vite, dengan fokus pada kualitas kode, skalabilitas, dan pengalaman pengguna yang baik. Aplikasi ini mensimulasikan fungsionalitas dasar dari sebuah toko online, termasuk penjelajahan produk, detail produk, keranjang belanja, dan otentikasi pengguna dengan role-based access.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- **Detail Produk**: Halaman dinamis yang menampilkan informasi lengkap untuk setiap produk.
- **Manajemen Keranjang**: Pengguna dapat menambah, melihat, dan (secara konseptual) checkout produk dari keranjang belanja.
- **Otentikasi Pengguna**: Sistem login sederhana untuk membedakan antara pengguna biasa dan admin.
- **Role-Based Access**: Terdapat rute privat (`/dashboard`) yang hanya dapat diakses oleh pengguna dengan peran 'admin'.
- **Admin Dashboard (Konsep)**: Admin memiliki kemampuan untuk mengedit produk langsung dari halaman detail.
- **Desain Responsif**: Antarmuka yang dirancang dengan Tailwind CSS agar dapat beradaptasi di berbagai ukuran layar.
- **Mode Gelap (Dark Mode)**: Dukungan untuk tema terang dan gelap yang dapat disesuaikan dengan preferensi sistem pengguna.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
- **Bahasa**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API (digunakan untuk `Auth`, `Product`, dan `Cart`).
- **Linting**: ESLint dengan konfigurasi untuk TypeScript.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Link E-Commerce Lite:
https://e-commerce-lite-swart.vercel.app/

## Link Canva:
https://www.canva.com/design/DAG3IRzRVrc/jKcdPiH0i1EvvIEys3ZF-g/edit?utm_content=DAG3IRzRVrc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Link youtube:
https://youtu.be/VFn_Jq9DWE8