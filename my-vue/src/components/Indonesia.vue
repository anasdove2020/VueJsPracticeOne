<template>
    <div>
        This is Indonesia.
        <div>Nama kamu:</div>
        <div>
            <input type="text" :model="nama" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompIndonesia',
    data() {
        return {
            nama: ''
        }
    },
    activated() {
        debugger
    }, deactivated() {
        debugger
    }
}
</script>

<style scoped>
div {
    margin: 24px;
}
</style>