<template>
  <section id="loginandregister">
    <div class="log-container" id="container">
      <div class="form-container register-container">
        <form @submit="register">
          <h1>Register here</h1>
          <input v-model="firstName" type="text" placeholder="Name" required />
          <input v-model="lastName" type="text" placeholder="Surname" required />
          <input v-model="email" type="email" placeholder="Email" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button class="lar" type="submit">Register</button>
        </form>
      </div>

      <div class="form-container login-container">
        <form @submit="login">
          <h1>Login here</h1>
          <input type="email" v-model="email" placeholder="Email" required />
          <div v-if="setMessage === 'This email does not exist'" class="text-center text-muted m-5">
          <h2>{{ setMessage }}</h2>
          </div>
          <input type="password" v-model="password" placeholder="password" required />
          <div v-if="setMessage === 'The password is incorrect'" class="text-center text-muted m-5">
          <h2>{{ setMessage }}</h2>
          </div>
          <div v-if="setMessage === 'Login successful'" class="text-center text-success m-5">
          <h2>{{ setMessage }}</h2></div>
          <button class="lar">Login</button>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="title">Hello friends</h1>
            <p>if you already have an account, login here and have fun.</p>
            <button id="login" class="ghost lar" @click="loginBtn">Login</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="title">Start your journey</h1>
            <p>If you don't have an account, start your journey here.</p>
            <button id="register" @click="registerBtn" class="ghost lar">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerBtn() {
      const container = document.getElementById("container");
      container.classList.add("right-panel-active");
    },
    loginBtn() {
      const container = document.getElementById("container");
      container.classList.remove("right-panel-active");
    },
    register(e) {
      e.preventDefault();
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.email,
        userPass: this.password
      };
      this.$store.dispatch("register", payload);
    },
    login(e) {
      e.preventDefault();
      const payload = {
        emailAdd: this.email,
        userPass: this.password
      };
      this.$store.dispatch("login", payload);
    }
  },
};

//     const registerButton = document.getElementById("register");
// const loginButton = document.getElementById("login");
// const container = document.getElementById("container");

// registerButton.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });

// loginButton.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
// });
</script>
<style>
#loginandregister {
  display: flex;
  background-color: crimson;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 100vh;
}

h1.title {
  font-size: 45px;
  margin: 0;
}

p {
  font-size: 14px;
  margin: 20px 0 30px;
}

button {
  position: relative;
  border-radius: 20px;
  background-color: white;
  margin: 10px;
  transition: 0.3s ease-in-out;
}

.lar:hover {
  letter-spacing: 2px;
}

button.ghost {
  background-color: rgba(225, 225, 225, 0.2);
  border: 2px solid white;
  color: white;
}

form {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  border-radius: 4px;
}

input {
  background-color: #eee;
  border: 0;
  border-radius: 4px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.log-container {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 769px;
  max-width: 100%;
  min-height: 500px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.login-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.log-container.right-panel-active .login-container {
  transform: translateX(100%);
}

.register-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.log-container.right-panel-active .register-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.log-container.right-panel-active .overlay-container {
  transform: translate(-100%);
}

.overlay {
  background-image: url(https://i.postimg.cc/2Sj6MDyj/ruby.gif);
  background-size: cover;
  background-position: 0 0;
  color: white;
  text-shadow: 0 0 10px rgba(16, 64, 74, 0.5);
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6 ease-in-out;
}

.log-container.log-container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.log-container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.log-container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>
