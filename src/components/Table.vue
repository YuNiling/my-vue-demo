<template>
  <div class="hello">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{column.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content in dataSource" :key="content.id">
          <td v-for="column in columns" :key="column.key">{{content[column.dataIndex]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: this.dataSource
    }
  },
  props: ['dataSource', 'columns']
}
</script>

<style scoped>
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
