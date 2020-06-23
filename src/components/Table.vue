<template>
  <div class="hello">
    <table>
      <thead>
        <tr>
          <th v-for="item in columns" :key="item.key">{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in dataSource" :key="obj.key">
          <td>{{obj.name}}</td>
          <td>{{obj.age}}</td>
          <td>{{obj.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: ''
    }
  },
  props: ['here', 'dataSource', 'columns'],
  created: function () {

  },
  methods: {
    loadTable () {

    }
  }
}
</script>

<style scoped>
.hello {
  padding: 15px;
}

button {
  margin-bottom: 15px;
}

table {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #F0F0F0;
  border-left: 1px solid #F0F0F0;
}

table tr th,
table tr td {
  padding: 15px;
  border-right: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  font-size: 14px;
}

table tr th {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  background-color: #FAFAFA;
}

table tr td {
  color: rgba(0, 0, 0, 0.65);
}
</style>
