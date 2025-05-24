<template>
    <div>
        This is Malaysia.
        <div>Your name is:</div>
        <div>
            <input type="text" :model="nama" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nama: ''
        }
    }
}
</script>

<style scoped>
div {
    margin: 24px;
}
</style>