<template>
  <Timeline>
    <TimelineItem color="#333">
      <Icon class="stepIcon" type="pricetag" slot="dot"></Icon>
      <span class="time fl">步骤1<span class="mariginL-15">开始</span></span>
      <Row></Row>
    </TimelineItem>


    <TimelineItem color="#333" v-for="(item,index) in data" :key="item.depId">
      <Icon class="stepIcon" type="pricetag" slot="dot"></Icon>
      <span class="time fl">步骤{{ item.nodeNo }}<span class="mariginL-15">{{ item.nodeId }}</span></span>
      <Row type="flex" justify="start" class="code-row-bg content">
          <Col span="6">
              <div class="fl">是否指定人员：{{ item.isPersonnel }}</div>
              <div class="fl">审批部门类型：{{ item.depType }}</div>
          </Col>
          <Col span="6">
              <div class="fl">是否接收驳回：{{ item.isBack }}</div>
              <div class="fl">节点审批角色：{{ item.nodeName }}</div>
          </Col>
          <Col span="6">
              <div class="fl">是否签章：{{ item.isSign }}</div>
          </Col>
          <Col span="6">
              <div class="fr marginT-15">
                <Icon class="fontSize-16" type="compose"></Icon>
                <Icon class="fontSize-16" type="close-round"></Icon>
              </div>
          </Col>
      </Row>
    </TimelineItem>

    <TimelineItem color="#333">
      <Icon class="stepIcon" type="pricetag" slot="dot"></Icon>
      <span class="time fl">步骤{{lastNode}}<span class="mariginL-15">结束</span></span>
    </TimelineItem>

  </Timeline>
</template>

<style scoped>
  .content,.one_left{
    padding:15px;
  }
  .one_left h4{
    text-align: right;
  }
  .two_right h4{
    text-align: left;
  }
  .content{
    background-color: #F4F4F4;
    border-radius: 4px;
    clear:both;
    padding-left: 5px;
  }
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .stepIcon{
      font-size: 24px;
  }

</style>

<script>
	export default {
    name: 'VmCaseDetail',
    props:{
      title:{
        type:String,
        default:"VmCaseDetail"
      },
      data:{
        type: Array,
        default:[{
          "depId":"1",
          "depType":"指定部门",
          "flowId":"asdfasdfasdfsadf",
          "isBack":"是",
          "isPersonnel":"否",
          "isSign":"否",
          "nodeId":"flow345435436345",
          "nodeName":"技侦队长审批",
          "nodeNo":2,
          "roleId":"技侦受案人1"
        }]
      }
    },

    computed:{
      lastNode(){
        return this.data.length + 2;
      }
    },
    data() {
        return {}
    }
	}
</script>

