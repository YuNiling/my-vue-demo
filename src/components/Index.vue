<template>
  <div class="layout">
    <Sider class="slider">
        <Menu theme="dark" active-name="1-2" :open-names="['1']" width="auto">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              管理
            </template>
            <MenuItem name="1-1" to="/manage/archiveManage">档案管理</MenuItem>
            <MenuItem name="1-2" to="/manage/inspectManage">巡检管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
    </Sider>
    <Layout class="right-container">
      <Header class="header"></Header>
      <Content class="content">
        <Breadcrumb class="breadcrumb">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div class="main-container">
            <router-view />
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
.layout {
  border: 1px solid #d7dde4;
  background: #F5F7F9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.slider {
  position: fixed;
  left: 0;
  height: 100vh;
  overflow: hidden;
}

.right-container {
  margin-left: 200px;
}

.header {
  background: #fff;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .1);
}

.content {
  padding: 0 16px 16px;
}

.breadcrumb {
  margin: 16px 0;
  text-align: left;
}

.main-container {
  min-height: 60vh;
}

.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
