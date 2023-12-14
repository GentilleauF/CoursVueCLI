import { createApp } from 'vue';
import App from './App.vue';
import ActiveUser from './components/activeUser.vue';
import UserData from './components/userData.vue';
// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);
app.component('active-user', ActiveUser);
app.component('user-data', UserData);
app.mount('#app');

