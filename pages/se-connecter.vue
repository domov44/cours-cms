<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
                <h1 class="text-h4 font-weight-bold">Connectez-vous</h1>
                <v-text-field :readonly="loading" :rules="[required]" variant="outlined" v-model="username"
                    label="Identifiant ou email"></v-text-field>

                <v-text-field :readonly="loading" :rules="[required]" variant="outlined" v-model="password"
                    label="Mot de passe"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Mot de passe oublié ?</a>

                <v-btn size="large" type="submit" color="primary" block class="mt-2">Se connecter</v-btn>

            </v-form>
            <div class="mt-2">
                <v-btn size="large" variant="tonal" color="secondary" block class="mt-2">Créer un compte</v-btn>
            </div>
        </v-sheet>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        required(v) {
            return !!v || 'Ce champs est obligatoire'
        },
    },
}
</script>
