<template>
    <div>
        <el-form label-width="80px" :model="formLabelAlign">
            <el-form-item label="username">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="password">
                <el-input v-model="formLabelAlign.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import store from "@/store";

    export default {
        name: 'HelloWorld',
        data() {
            return {
                formLabelAlign: {
                    name: '',
                    password: '',
                }
            }
        },
        methods: {
            login() {
                this.$axios.post(`/login?username=${this.formLabelAlign.name}&password=${this.formLabelAlign.password}`).then(res => {
                    if (res.status === 200) {
                        store.dispatch("updateLoginState", {"auth":res.headers.authorization})
                        this.$router.push({path: '/detail'})
                    } else {
                        this.$message.error(res.data);
                    }
                }).catch((error)=>{
                    console.log(error.response)
                    this.$message.error(error.response.data);
                })

            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        width: 300px;
        margin: 0 auto;
    }
</style>
