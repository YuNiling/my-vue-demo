<template>
  <div class="container">
    <Table
      stripe
      border
      :data="dataSource"
      :columns="columns"
      :loading="tableLoading"></Table>
    <div class="page-container">
      <div class="page-box">
        <Page
          show-total
          :total="pageTotal"
          :current="pageCurrent"
          @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from '@/util/fetch'
export default {
  data () {
    return {
      url: 'http://192.168.201.243/fw-pm-project/projectMain/queryPage?pageSize=10',
      token: 'e00449ef-37ff-4d10-a3dd-41a17530eb3c',
      params: {
        'projectCode': null,
        'projectName': null
      },
      tableLoading: true,
      dataSource: [],
      columns: [
        {
          title: '所属项目',
          key: 'projectName',
          align: 'center'
        }, {
          title: '项目编号',
          key: 'projectCode',
          align: 'center',
          width: 250
        }, {
          title: '发起时间',
          key: 'createTime',
          render: function (h, params) {
            return h('div', params.row.createTime.replace(/-/g, '/'))
          },
          align: 'center',
          width: 250
        }, {
          title: '审批结果',
          key: 'statusDesc',
          align: 'center',
          width: 250
        }
      ],
      pageTotal: 0,
      pageCurrent: 1
    }
  },
  created: function () {
    this.loadTableData()
  },
  methods: {
    // 请求表格数据
    loadTableData () {
      let that = this
      let url = this.url + '&pageNo=' + this.pageCurrent + '&token=' + this.token
      fetch.post(url, this.params).then(function (res) {
        if (res.code === 200) {
          that.dataSource = res.obj.list
          that.pageTotal = res.obj.total
        } else {
          that.$Message.error(res.msg)
        }
        that.tableLoading = false
      }).catch(function (error) {
        that.$Message.warning(error)
        that.tableLoading = false
      })
    },
    // 分页
    changePage (num) {
      this.pageCurrent = num
      this.loadTableData()
      console.log(num)
    }
  }
}
</script>

<style scoped="scoped">
.container {
  padding: 15px;
}

.page-container {
  margin: 15px;
  overflow: hidden;
}

.page-box {
  float: right;
}
</style>
