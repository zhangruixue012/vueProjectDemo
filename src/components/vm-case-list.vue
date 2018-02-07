<template>
  <ul>
    <li v-for="(item, index) in data" @click="checkCaseDetail(item.flowId,item.flowName)">
      <div class="caseItem" >
        <div class="fl">
          <div class="dot-left"></div>
        </div>
        <span class="fl caseTitle">{{item.flowName}}</span>
        <div class="fr">
          <Icon type="compose"></Icon>
          <Icon type="close-round"></Icon>
        </div>
      </div>
    </li>

  </ul>
</template>
<style>
  .dot-left{
    display: inline-block;
    position: relative;
    width: 12px;
    height: 12px;
    color: #ff0000;
    background-color: #ff0000;
    border-radius: 50%;
    margin-left: 5px;
  }
  .caseItem{
    font-size: 18px;
    height:45px;
    line-height: 45px;
    background-color: #f2f2f2;
    margin:10px 5px;
  }
  .caseTitle{
    margin-left: 5px;
  }

</style>

<script>
	export default {
    name: 'VmCaseList',
    props:{
      title: {
        type: String
      },
      data:{
        type: Array
      }
    },
    data() {
      return {
          "descript":"描述描述描述描述描述",
          "flowId":"flow789437509824375",
          "flowName":"测试1"
        }

    },
    methods: {
      checkCaseDetail(flowId,flowName) {
          this.$emit("checkCaseDetail",flowId,flowName);
      }
    }
	}






</script>

<style scoped>

</style>
