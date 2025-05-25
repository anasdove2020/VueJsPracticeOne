<template>
  <h1>Before Created</h1>
  <p v-if="tampilNama">{{ namaDepan }}</p>

  <button @click="ubahNama">Ubah Nama</button>
  <button @click="this.tampilNama = !this.tampilNama">Hapus Nama</button>

  <warna v-if="tampilNama"></warna>
  <button @click="ubahNegara">Ubah Negara</button>
  <KeepAlive>
    <indonesia v-if="tampilNama"></indonesia>
  </KeepAlive>
</template>

<script>
import { KeepAlive } from 'vue'

export default {
  data() {
    return {
      namaDepan: 'Choirul Anas',
      tampilNama: true
    }
  },
  computed: {
    activeComponent() {
      if (this.namaDepan === 'Choirul Anas') {
        return 'indonesia'
      } else {
        return 'malaysia'
      }
    }
  },
  methods: {
    ubahNama() {
      if (this.namaDepan === 'Choirul Anas') {
        this.namaDepan = 'Daffa Dzaki Wardana'
      } else {
        this.namaDepan = 'Choirul Anas'
      }
    },
    hapusNama() {
      this.tampilNama = !this.tampilNama
    },
    ubahNegara() {
      this
    }
  },
  beforeCreate() {
    console.log('Ini sebelum create di initialized.')
    console.log('Digunakan utk setup global event listener')
    debugger
  },
  created() {
    console.log('Setelah di initialized')
    console.log('Cocok digunakan utk fetch HTTP')
    debugger
  },
  beforeMount() {
    console.log('Sebelum di mount / dimuat di DOM Element')
    debugger
  },
  mounted() {
    console.log('Setelah di mounted / dimuat di DOM Element')
    debugger
  },
  beforeUpdate() {
    console.log('Sebelum data berubah')
    debugger
  },
  updated() {
    console.log('Setelah data berubah / re-render')
    debugger
  },
  beforeUnmount() {
    console.log('Sebelum component di hapus')
    debugger
  },
  unmounted() {
    console.log('Setelah component di hapus')
    debugger
  },
  errorCaptured(err, compInst, info) {
    console.log('Kesalahan ditemukan')
    debugger
  },
  renderTracked(event) {
    console.log('Track di render')
    console.log(event)
    debugger
  },
  renderTriggered(event) {
    console.log('Render ke trigger')
    console.log(event)
    debugger
  }
}
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper>div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>