<template>
<div class="container">
  <div class="card">
    <div class="card-header">
      <h4>
        Students
        <router-link to="/students/create" class="btn btn-primary float-end">
          Add student</router-link>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-boardered">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>course</th>
            <th>email</th>
            <th>phone</th>
            <th> created_at</th>
           
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
          <td>
            <router-link :to="{ path: '/students/'+student.id+'/edit' }" class="btn btn-success ">
              Edit
            </router-link>
          <button type="button" @click="deleteStudent(student.id)" class="btn btn-danger ">
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
        .get("http://127.0.0.1:8000/api/students")
        .then((res) => {
         this.students = res.data.students
         console.log(this.students);
        });
    },
    deleteStudent(studentId) {
      if(confirm('Are you sure, you want to delete this data?')){
      //console.log(studentId);
      axios.delete(`http://127.0.0.1:8000/api/students/${studentId}/delete`).then(res => {
        alert(res.data.message);
        this.getStudents();
      })
      .catch(function(error) {
            if(error.response) {
            if (error.response.status == 422) {
                $mythis.errorList = error.response.data.errors;
            }
            if (error.response.status == 404) {
                alert(error.response.data.message);
            }

                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                }
            
        });
      }
    }
  },
};
</script>

<style></style>
