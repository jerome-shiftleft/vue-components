const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "09263771993",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09263771995",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
});

app.mount();
