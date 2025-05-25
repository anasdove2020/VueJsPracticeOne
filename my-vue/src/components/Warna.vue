<template>
    <div>
        Contoh
    </div>
    <button ref="refButton" @click="buatError">Buat Error</button>
</template>

<script>
export default {
    mounted() {
        console.log('Setelah di mounted / dimuat di DOM Element')
        debugger
    },
    beforeUnmount() {
        console.log('Sebelum komponen ini dihapus')
        debugger
    },
    unmounted() {
        console.log('Setelah komponen ini dihapus')
        debugger
    },
    activated() {
        console.log('Komponen di aktifkan')
        debugger
    },
    deactivated() {
        console.log('Komponen di non aktifkan')
        debugger
    },
    methods: {
        buatError() {
            this.$refs.objEl.innerHtml = 'Hallo Dafa'
        }
    }
}
</script>

<style scoped>
div {
    height: 100px;
    margin-top: 24px;
    background: yellow;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>