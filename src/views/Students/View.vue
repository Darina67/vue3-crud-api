<template>
<div class="container">
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
        <tbody v-if="this.students.length > 0 ">
          <tr v-for="(student, index) in this.students" :key="index"> 
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.course }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.created_at }}</td>
          <td>{{ student.updated_at }}</td>
          <td>
            <router-link to="/" class="btn btn-success ">
              Edit
            </router-link>
          <button type="button" class="btn btn-danger ">
            Delete
          </button>
          </td>
        </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="7">Loading...</td>
          </tr>
        </tbody>
      </table>
    </div>
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
        .get("http://api.students.ru/students")
        .then((res) => {
         this.students = res.data.students
         console.log(this.students);
        });
    },
  },
};
</script>

<style></style>
