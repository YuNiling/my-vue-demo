<template>
  <div class="container">
    <h1>TestManage</h1>
    <Table
      here="wang"
      v-bind:dataSource="dataSource"
      :columns="columns"></Table>
  </div>
</template>

<script>
import fetch from '@/util/fetch'
import Table from '@/components/Table'
export default {
  data () {
    return {
      url: 'http://192.168.201.243/fw-pm-project/projectMain/queryPage?pageNo=1&pageSize=10&token=29c7a06c-1daa-4a84-a041-2f1a055ed73a',
      params: {
        'projectCode': null,
        'projectName': null
      },
      dataSource: [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号'
        }
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age'
        }, {
          title: '住址',
          dataIndex: 'address',
          key: 'address'
        }
      ]
    }
  },
  created: function () {
    // let that = this
    // fetch.post(this.url, this.params).then(function (res) {
    //   if (res.code === 200) {
    //     that.tableData = res.obj.list
    //     console.log(that.tableData)
    //   }
    // }).catch(function (error) {
    //   console.log(error)
    // })
  },
  components: {
    'Table': Table
  }
}
</script>

<style>
</style>
