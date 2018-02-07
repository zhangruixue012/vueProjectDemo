<template>
  <Row :gutter="16">
    <Col span="6">
        <div class="list">
            <div class="listHead">
                <span class="listTitle fl" >流程列表</span>
                <div class="listIcon main-color marginL-240">
                  <span @click="isSearch = true">
                      <Icon type="ios-search-strong"></Icon>
                  </span>

                  <span @click="isAdd = true">
                      <Icon type="ios-plus"></Icon>
                  </span>

                </div>
            </div>
            <div class="listCon">
              <VmCaseList @checkCaseDetail="checkCaseDetailFn" :data="processList"></VmCaseList>
            </div>
        </div>
    </Col>

    <Col span="18">
        <div class="manageCon">
              <div class="conTitle">
                <span class="fl">{{flowName}}</span>
                <div class="fr">
                  <span @click="modal2 = true">
                      <Icon class="main-color" type="ios-plus"></Icon>
                  </span>
                  添加流程节点
                </div>
              </div>
              <div class="conDetail">
                  <VmCaseDetail :data="dataCaseDetail"></VmCaseDetail>
              </div>
        </div>
    </Col>

    <!--查询弹框-->
    <modal v-model="isSearch"  width="500" height="450" :styles="{top: '350px'}"
           title="流程查询" @on-ok="searchOk"  @on-cancel="searchCancel">
      <Form ref="searchProcess" :model="searchProcess" :rules="searchRules" :label-width="110">

        <FormItem label="流程名称：" prop="name">
          <Input v-model="searchProcess.name" placeholder="请输入流程名称" style="width:260px;"></Input>
        </FormItem>

      </Form>
    </modal>

    <!--新增流程-->
    <modal v-model="isAdd" width="600" height="450" :styles="{top: '350px'}"
        title="新增流程" @on-ok="addOk"  @on-cancel="addCancel">

      <Form ref="addProcess" :model="addProcess" :rules="searchRules" :label-width="110">
        <FormItem label="流程名称：" prop="name">
          <Input v-model="addProcess.name" placeholder="请输入流程名称" style="width:260px;"></Input>
        </FormItem>

        <FormItem label="描述：" prop="describe">
          <Input v-model="addProcess.describe" style="width:400px;" type="textarea"></Input>
        </FormItem>

      </Form>

    </modal>

    <!--<modal v-model="modal2" width="900" :styles="{top: '350px'}"
           title="新增流程节点" @on-ok="ok"  @on-cancel="cancel">
      <Row>
        <Col span="12">
            <div class="margin-10">
                <span>节点序号：</span>
                <input v-model="value" style="width:250px;height:35px;"></input>
            </div>

            <div class="margin-10">
                <span>审批部门类型：</span>
                <Select v-model="model1" style="width:220px;">
                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>

            <div class="margin-10">
                <span>是否指定人员：</span>
                <RadioGroup v-model="animal">
                  <Radio label="是"></Radio>
                  <Radio label="否"></Radio>
                </RadioGroup>
            </div>

            <div class="margin-10">
              <span>是否签章：</span>
              <RadioGroup v-model="animal">
                <Radio label="是"></Radio>
                <Radio label="否"></Radio>
              </RadioGroup>
            </div>
        </Col>
        <Col span="12">
            <div class="margin-10">
              <span>节点名称：</span>
              <input v-model="value" style="width:250px;height:35px;"></input>
            </div>

            <div class="margin-10">
              <span>节点审批角色：</span>
              <Select v-model="model1" style="width:220px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>

            <div class="margin-10">
              <span>是否接受驳回：</span>
              <RadioGroup v-model="animal">
                <Radio label="是"></Radio>
                <Radio label="否"></Radio>
              </RadioGroup>
            </div>
        </Col>
      </Row>
    </modal>-->


  </Row>
</template>

<style>
  .listHead{
      padding:10px 15px;
      font-size: 22px;
      background-color: #fff;
  }

  .conTitle{
    background-color: #fff;
    padding:10px 15px;
    font-size: 18px;
    height: 40px;
    width: 100%;
  }
  .conDetail{
    background-color: #fff;
    padding:25px;
  }
  .listCon{
    overflow: auto;
    padding:15px;
    background-color: #ddd;
  }
</style>

<script>
  import VmCaseList from "@/components/vm-case-list"
  import VmCaseDetail from "@/components/vm-case-detail"
	export default {
    name: "manage",
    components: {
      VmCaseList,
      VmCaseDetail
    },
    data() {
      return {
        flowName:"",
        processList: [],
        dataCaseDetail: [],
        isAdd: false,
        modal2: false,
        addProcess:{
          "name":"",
          "describe":""
        },
        isSearch: false,
        searchProcess: {
          name: ''
        },
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        searchRules: {
          name: [
            {required: true, message: '流程名称不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.getProcessListData("");
    },
    methods: {
      //左侧流程列表
      getProcessListData(processName) {
        const _this = this;
        this.$http.request({
          method: 'get',
          url: '/api/mockdata/processlist.json',
          params: {flowName: processName},
          // success:(data) => {
          //    this.dataProgress = [...data];
          // },
          success: function (data) {
            _this.processList = data;
            _this.checkCaseDetailFn(data[0].flowId, data[0].flowName);
          },
          error: function (data) {
            console.log(data)
          }
        });
      },

      //流程详情
      checkCaseDetailFn(flowId, flowName) {
        this.flowName = flowName;
        this.$http.request({
          method: 'get',
          url: '/api/mockdata/dataCaseDetail.json',
          success: (data) => {
            console.log(data);
            this.dataCaseDetail = data;
          },
          error: (data) => {
            console.log(data)
          }
        });

      },

      //查询流程点击确定
      searchOk() {
          this.$refs.searchProcess.validate((valid) => {
            if (valid) {
              //按照流程名称查询列表，此处需要添加参数（流程名称）
              this.getProcessListData(this.searchProcess.name);
            }
          })
      },
      //查询流程点击取消
      searchCancel() {
        this.$refs.searchProcess.resetFields();
      },
      //新增点击确定
      addOk() {
        this.$refs.addProcess.validate((valid) => {
          debugger;
          if (valid) {
            this.$http.request({
              method: 'post',
              url: '/api/mockdata/addIsSuccess.json',
              data: this.addProcess,
              // success:(data) => {
              //    this.dataProgress = [...data];
              // },
              success: function (data) {
                  this.getProcessListData("");
                  this.$Message.success('新增成功！');
              },
              error: function (data) {
                console.log(data)
              }
            });
          }
        });
      },
      //新增点击取消
      addCancel() {
        this.$refs.addProcess.resetFields();
      }
    }
  }
</script>

