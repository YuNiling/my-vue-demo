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
      url: 'http://192.168.201.243/fw-pm-maintain/inspectPlan/queryByPcPage?pageSize=10',
      params: {
        'orgId': null
      },
      token: 'e00449ef-37ff-4d10-a3dd-41a17530eb3c',
      tableLoading: true,
      dataSource: [],
      columns: [
        {
          title: '计划名称',
          key: 'inspectName',
          align: 'center'
        }, {
          title: '创建时间',
          key: 'createTime',
          align: 'center',
          width: 170,
          render: function (h, params) {
            return h('div', params.row.createTime.replace(/-/g, '/'))
          }
        }, {
          title: '巡检单位',
          key: 'orgName',
          align: 'center'
        }, {
          title: '巡检类型',
          key: 'inspectType',
          align: 'center',
          width: 100,
          render: function (h, params) {
            if (params.row.inspectType === 0) {
              return h('div', '定点巡检')
            } else {
              return h('div', '线路巡检')
            }
          }
        }, {
          title: '开始日期',
          key: 'startTime',
          align: 'center',
          width: 120,
          render: function (h, params) {
            return h('div', params.row.createTime.split(' ')[0].replace(/-/g, '/'))
          }
        }, {
          title: '结束日期',
          key: 'endTime',
          align: 'center',
          width: 100,
          render: function (h, params) {
            if (params.row.endTime) {
              return h('div', params.row.endTime.split(' ')[0].replace(/-/g, '/'))
            }
          }
        }, {
          title: '巡检周期',
          key: 'inspectCycle',
          align: 'center',
          width: 100,
          render: function (h, params) {
            if (params.row.inspectCycle === 1) {
              return h('div', '每天')
            } else if (params.row.inspectCycle === 7) {
              return h('div', '每周')
            } else {
              return h('div', params.row.inspectCycle + '天')
            }
          }
        }, {
          title: '巡检状态',
          key: 'inspectStatus',
          align: 'center',
          width: 100,
          render: function (h, params) {
            let color = ''
            let text = ''
            if (params.row.inspectStatus === 0) {
              color = '#999999'
              text = '未开始'
            } else if (params.row.inspectStatus === 1) {
              color = '#56DA8E'
              text = '进行中'
            } else {
              color = '#999999'
              text = '已结束'
            }
            return h('div', {
              style: {
                color: color
              }
            }, text)
          }
        }, {
          title: '审核状态',
          key: 'flowFlag',
          align: 'center',
          width: 100,
          render: function (h, params) {
            let color = ''
            let text = ''
            if (params.row.flowFlag === 0) {
              color = '#999999'
              text = '未提交'
            } else if (params.row.flowFlag === 1) {
              color = '#56DA8E'
              text = '审核中'
            } else if (params.row.flowFlag === 2) {
              color = '#FF3E3E'
              text = '审核未通过'
            } else {
              color = '#4286F5'
              text = '已结束'
            }
            return h('div', {
              style: {
                color: color
              }
            }, text)
          }
        }, {
          title: '当前处理人',
          key: 'currentUserNames',
          align: 'center',
          width: 130
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
