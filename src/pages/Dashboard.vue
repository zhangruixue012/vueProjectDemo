<template>
    <div class="dashboard">
        <Row :gutter="10">
            <Col class="my_paddding" span="6">
            <VmStateOverView type="ios-person" color="#41b883" icon="fa fa-user" title="New Users" count="996">
            </VmStateOverView>
            </Col>

            <Col class="my_paddding" span="6">
            <VmStateOverView type="android-happy" color="#1d8ce0" icon="fa fa-user" title="Page Views" count="34132">
            </VmStateOverView>
            </Col>

            <Col class="my_paddding" span="6">
            <VmStateOverView type="ios-heart" color="#FFA000" icon="fa fa-user" title="Page Views" count="34132">
            </VmStateOverView>
            </Col>
            <Col class="my_paddding" span="6">
            <VmStateOverView type="ios-telephone" color="#F60000" icon="fa fa-user" title="Page Views" count="34132">
            </VmStateOverView>
            </Col>
        </Row>

        <Row class="m_row" :gutter="10">
            <Col>
                <VmProgressBar :data="dataProgress"></VmProgressBar>
            </Col>
        </Row>

        <Row class="m_row" :gutter="10">
            <Col span="16">
                <Row class="m_row">
                    <VmTimeLine :data="dataTimeLine"></VmTimeLine>
                </Row>
            </Col>
            <Col span="8">
                <Row class="m_row">
                    <VmTabs title="Briefs" content-height="200px">
                        <VmTabsItem label="Social" name="01">
                            <div>
                                <h2>social</h2>
                            </div>
                        </VmTabsItem>

                        <VmTabsItem label="Business" name="02">
                            <div>
                                <h2>Business</h2>
                            </div>
                        </VmTabsItem>

                        <VmTabsItem label="Entertainment" name="03">
                            <div>
                                <h2>Entertainment</h2>
                            </div>
                        </VmTabsItem>

                        <VmTabsItem label="Sport" name="04">
                            <div>
                                <h2>Sport</h2>
                            </div>
                        </VmTabsItem>

                        <VmTabsItem label="Health" name="05">
                            <div>
                                <h2>Health</h2>
                            </div>
                        </VmTabsItem>

                        <VmTabsItem label="Educiation" name="06">
                            <div>
                                <h2>Educiation</h2>
                            </div>
                        </VmTabsItem>
                    </VmTabs>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<style scoped>
    .m_row{
        background-color: #fff;
        margin-top: 15px;
    }
</style>
<script>
    import VmStateOverView from "@/components/vm-state-overview.vue"
    import VmProgressBar from "@/components/vm-progress-bar"
    import VmTimeLine from "@/components/vm-time-line"
    import VmTabs from "@/components/vm-tabs"
    import VmTabsItem from "@/components/vm-tabs-item"
	export default {
		name: "dashboard",
        components:{
	        VmStateOverView,
	        VmProgressBar,
	        VmTimeLine,
            VmTabs,
	        VmTabsItem
        },
		created: function () {
		    this.getData();
        },
        methods: {
		    getData() {
			    let _this = this;
			    _this.$http.request({
				    method: 'get',
				    url: '/api/mockdata/dashboard.json',
				    success: function(data) {
				    	debugger;
					    dataProgress = Json.parse(data);

				    },
				    error: function(data) {
					    console.log(data)
				    }
			    })
            }
        },
		data () {
			return {
				dataProgress: [],
				dataTimeLine:[
                    {
                    	id:"0",
                        date:"2017-12-5",
                        time:"12:00",
                        content:"Lorem ipsum dolor sit amet consiquest dio"
                    },
					{
						id:"1",
						date:"2017-12-4",
						time:"13:00",
						content:"Lorem ipsum dolor sit amet consiquest dio"
					},
					{
						id:"2",
						date:"2017-12-3",
						time:"14:00",
						content:"Lorem ipsum dolor sit amet consiquest dio"
					},
					{
						id:"3",
						date:"2017-12-2",
						time:"15:00",
						content:"Lorem ipsum dolor sit amet consiquest dio"
					},
					{
						id:"4",
						date:"2017-12-1",
						time:"16:00",
						content:"Lorem ipsum dolor sit amet consiquest dio"
					},
					{
						id:"0",
						date:"2017-11-30",
						time:"17:00",
						content:"Lorem ipsum dolor sit amet consiquest dio"
					},
					{
						id:"5",
						date:"2017-11-29",
						time:"18:00",
						content:"Lorem ipsum dolor sit amet consiquest dio"
					}
                ],
                dataTabs:[],
			}
		}
	}
</script>


