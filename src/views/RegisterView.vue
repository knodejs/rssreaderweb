<template>
  <div class="auth">
    <div class="auth__container">
      <header>
        <h3>Register</h3>
      </header>
      <form @submit.prevent="registerUser">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" v-model="user.name" id="name">
          <label class="mdl-textfield__label" for="name">Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="email" v-model="user.email"  id="email">
          <label class="mdl-textfield__label" for="email">Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password"  v-model="user.password" id="password">
          <label class="mdl-textfield__label" for="password">Password</label>
        </div>
        <br/>
        <br/>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect" type="submit">
          Register
        </button>
        <br/>
        <br/>
        <p>Already have an account ? <router-link to="/login">Login</router-link></p>
      </form>
    </div>
  </div>
</template>
<script>
import auth from '../router/auth'

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  mounted(){
     componentHandler.upgradeElements(this.$el)
  },
  methods: {
    registerUser() {
      this.$http.post('https://readr.meetgodhani.com/api/register',this.user).then((res) => {
        auth.login(res.data.token,res.data.user);
        window.location = "/";
      })
    }
  }
}
</script>
<style lang="scss">
  .auth {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @at-root #{&}__container {
      max-width: 400px;
      width: 100%;
      position: relative;
      background: white;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
      padding-bottom:30px;

      p {
        text-align:center;
      }

      form {
        padding: 10px 30px;
        .mdl-textfield {
          width: 100%;
        }
        .mdl-button {
          width: 100%;
        }
      }

      header {
        background: #673AB7;
        margin: 0;
        padding: 10px 20px;
        color: #fff;
        h3 {
          font-size: 25px;
        }
      }

      @media only screen and (max-width: 767px) {
        max-width: 360px;
      }
    }
  }
</style>
