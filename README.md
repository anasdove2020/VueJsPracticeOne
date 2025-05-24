# VueJsPracticeOne

Vue.js adalah Progressive JavaScript Framework. JavaScript Framework utk membuat User Interfaces.

```
npm create vue@latest
```

# Learning

## Creating Vue Application

### Application Instance

Setiap aplikasi Vue memulai dengan membuat sebuah instance application baru dengan `createApp` function.

```
import { createApp } from 'vue'

const app = createApp({
    /* root component options */
})
```

### Root Component

Objek yg kita kirim di createApp adalah komponen. Setiap aplikasi membutuhkan sebuah `root component` yg dpt berisi komponen lain sebagai anaknya.

Jika kita menggunakan SFC (Single File Component), kita bisa mengimpor root komponen dari file lain.

```
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
```

### Mounting App

Instance aplikasi tidak akan di render sampai method `.mount()` dipanggil. Dia membutuhkan parameter yg bisa berisi actual DOM element atau selector string.

```
<div id="app"></div>
```

```
app.mount('#app')
```

