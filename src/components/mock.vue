<template>
  <div>
    <button @click="getData">BUTTON</button>
    <div>
      <ol>
        <li v-for="item in userList" v-key="item.id">
          <p>姓名：{{ item.name }}</p>
          <p>年龄：{{ item.path }}</p>
          <p>职位：{{ item.nameZh }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userList: []
      }
    },
    methods: {
      getData() {
        axios.get('/getUserList').then((res) => {
          this.userList = res.data.data.rows;
          console.log("res\n",res)
          console.log("res.data\n",res.data)
          console.log("res.data.data\n",res.data.data)
          console.log("res.data.data.rows\n",this.userList)
        })
      }
    }
  }
</script>

