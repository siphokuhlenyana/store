<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
    <p>Full Name (Computed): {{ fullName }}</p>
    <p>Full Name (Method): {{ getFullName() }}</p>
    <p>Random Number (Computed): {{ randomNumber }}</p>
    <p>Random Number (Method): {{ getRandomNumber() }}</p>
    <button @click="updateLastName()">Update Last Name</button>
  </div>
  </div>
</template>
<script>export default {
  data() {
    return {
      firstName:'Matthew',
      lastName: 'Brown'
    };
  },
  methods: {
    getFullName() {
      console.log("Method Getting full name");
      return `${this.firstName} ${this.lastName}`;
    },
    getRandomNumber() {
      console.log("Method getting random number");
      return Math.random();
    },
    updateLastName() {
      this.lastName = 'Donovan'
    }
  },
  computed: {
    fullName() {
      console.log("Computed computing full name");
      return `${this.firstName} ${this.lastName}`;
    },
    randomNumber() {
      console.log("Computed computing random number");
      return Math.random();
    },
  },
};
</script>