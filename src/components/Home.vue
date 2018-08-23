<template>
   <div>
        sagasgsag
   </div>
</template>

<script>
    import http from "../http/index.js";

    export default {
        name: 'Home',
        data () {
            return {

            }
        },
        components: {

        },
        created() {
            // this.$vux.loading.show();
            http.get('/213-4',{
                params: {
                    topid: 4
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
</script>

<style lang="less" scoped>

 
</style>
