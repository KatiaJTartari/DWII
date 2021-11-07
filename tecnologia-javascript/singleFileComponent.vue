    <template>
        <div>
            <h1>{{ nome }}</h1> 
            <input type="text" v-model="nome" />
        </div>
    </template>

    <script>
    export default {
        name: 'katia-component',
        data: () => ({ nome: 'KATIA' })
    }
    </script>

    <style scoped>
        h1 {
            color: red;
        }
    </style>
    

