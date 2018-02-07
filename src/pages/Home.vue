<template>
  <div class="home">
    <div class="header" >
      <Row type="flex" justify="space-around" class="code-row-bg">
        <!--
            <router-link to="/">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            {{$t('m.Dashboard')}}
                        </router-link>

        -->



        <Col span="4">
            <router-link to="/">
                <span class="headerTitle">流程管理</span>
            </router-link>
        </Col>

        <Col span="4">
            <router-link to="/record">
              <span class="headerTitle">流程使用记录</span>
            </router-link>
        </Col>


        <Col span="4">
            <router-link to="/query">
              <span class="headerTitle">流程列表查询</span>
            </router-link>
        </Col>

        <Col span="4">
            <router-link to="/approval">
              <span class="headerTitle">流程审批</span>
            </router-link>

        </Col>
      </Row>
    </div>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>

</template>

<style>
  .header{
    padding:10px;
    margin:0 200px;
    background-color: #cdcdcd;
  }
  .headerTitle{
      font-size: 24px;
  }
</style>

<script>
	export default {
		name: "home"
	}
</script>

<style scoped>

</style>
