<template>
  <div class="dashbord-container">
    <div id="menu-wrapper">
      <Menu theme="dark" style="height: 100%" @on-select="changeTabs">
      <MenuGroup title="任务管理">
        <MenuItem name="add_task">
          <Icon type="plus-circled"></Icon>
          添加任务
        </MenuItem>
        <MenuItem name="list_task">
          <Icon type="eye"></Icon>
          查看任务
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="回答管理">
        <MenuItem name="show_answers">
          <Icon type="ios-list"></Icon>
          展示答案
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="用户管理">
        <MenuItem name="show_users">
          <Icon type="ios-people"></Icon>
          用户展示
        </MenuItem>
      </MenuGroup>
      </Menu>
    </div>
    <div id="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashbord',
  mounted() {
    if(!localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
  updated() {
    if(!localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
  methods: {
    changeTabs(name) {
      this.$router.push(`/dashbord/${name}`)
    }
  }
}
</script>

<style scoped>
.dashbord-container {
  position: relative;
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
}
#menu-wrapper {
  height: 100%;
  width: 240px;
}
#content-wrapper {
  height: 100%;
  width: calc(100% - 240px);
}
</style>


