<template>
  <div class="card">
    <div class="card-header">
      <h4>
        Students
        <router-link to="/student/create" class="btn btn-primary float-end"
          >Add student</router-link
        >
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-boardered">
        <thead>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios
        .get("https://my-json-server.typicode.com/Darina67/students-api/db")
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style></style>
