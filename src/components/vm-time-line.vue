<template>
    <Row>
        <Row type="flex">
            <Row>{{title}}</Row>
        </Row>

        <ul>
            <li v-for="(item, index) in data">

                <Row v-if="index%2==0">
                    <Col span="11">
                        <div class="one_left">
                            <h4>{{item.date}}</h4>
                        </div>
                    </Col>
                    <Col span="2">
                        <div class="split">
                            <div class="dot-left"></div>
                        </div>
                    </Col>
                    <Col span="11">
                        <div class="one_right">
                            <div class="content">
                                <h3>{{item.time}}</h3>
                                <p>{{item.content}}</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row v-else>
                    <Col span="11">
                        <div class="two_left">
                            <div class="content">
                                <h3>{{item.time}}</h3>
                                <p>{{item.content}}</p>
                            </div>
                        </div>
                    </Col>
                    <Col span="2">
                        <div class="split">
                            <div class="dot-left"></div>
                        </div>
                    </Col>
                    <Col span="11">
                        <div class="two_right">
                            <h4>{{item.date}}</h4>
                        </div>

                    </Col>
                </Row>
            </li>
        </ul>
    </Row>

</template>

<style>
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
    }
    .split{
        width: 3px;
        background-color: #DDDEE1;
        height: 80px;
        margin-left:calc(50% - 1px);
    }
</style>
<script>
	export default {
		name: "vm-time-line",
        props:{
	        title: {
		        type: String
	        },
	        data:{
	        	type: Array
            }
        },
        data:{
	        type: Array,
	        default: function () {
		        return [
			        {
				        date: '2017年6月26日',
				        time: '11:58 am',
				        content: '完成VmManager时间轴组件'
			        }
		        ]
	        }
        }
	}
</script>


