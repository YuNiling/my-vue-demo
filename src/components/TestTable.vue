<template>
  <div class="container">
    <h1>测试自定义Table组件</h1>
    <Table
      :dataSource="dataSource"
      :columns="columns"></Table>
  </div>
</template>

<script>
import Table from '@/components/Table'
export default {
  data () {
    return {
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
  components: {
    'Table': Table
  }
}
</script>

<style>
</style>
