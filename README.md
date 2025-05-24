# VueJsPracticeOne

```
npm install -g @vue/cli
```

Current version globally

vue --version

```
vue create my-vue-app
```

- Vue 3: Versi terbaru Vue.js. Lebih cepat. Punya fitur baru seperti Composition API. Rekomendasi utk proyek baru.
- Vue 2: Versi lama. Masih digunakan di banyak proyek lama.
- Babel: Tool utk mengubah kode JavaScript modern agar bisa berjalan di browser lama.
- Eslint: Tool utk membantu kita menulis javascript/vue yg konsisten dan bebas dari kesalahan umum.
- ES: Ecma Script: Standard resmi dari bahasa JavaScript.

# Project Structure

1. node_modules
2. public
    - favicon.ico
    - index.html
3. src
    - assets
        - logo.png
    - components
        - HelloWorld.vue
    - App.vue
    - main.js
4. .gitignore
5. babel.config.js
    - Konfigurasi utk Babel
    - Tool yg mengubah (transpile) JavaScript modern (ES6+) menjadi JavaScript lama supaya bisa berjalan di browser lama.
    - Preset:
        - Menyesuaikan pengaturan Babel agar cocok dengan proyek Vue.js kamu
        - Menambahkan dukungan ES6/ES6Next
    - Preset adalah kumpulan plugin yg sudah dikonfigurasi sebelumnya utk mengubah (transpile) jenis javascript tertentu.
6. jsconfig.json
7. package-lock.json
8. package.json
9. README.md