<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import store from "@/store";
    export default {
        name: "Detail",
        data() {
            return {
                msg: ''
            }
        },
        created(){
            let that = this
            this.$axios.get('/demo',{headers: {'authorization':store.state.login.auth}}).then(function (res) {
                that.msg = res.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

</script>

<style scoped>

</style>