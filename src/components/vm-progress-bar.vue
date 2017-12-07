<template>
    <Row class="m_row">
        <Row class="panel-heading">{{title}}</Row>
        <table>
            <tbody>
            <tr v-for="(item, index) in rebuildData" :key="item.id">
                <td class="td_10">
                    {{index | indexPlus}}
                </td>
                <td class="td_10">
                    {{ item.name }}
                </td>

                <td class="td_40" v-if="item.tags" :key="item.id">
                    <Tag checkable color="green" v-for="item in item.tags">{{item}}</Tag>
                </td>

                <td class="td_40">
                    <Progress :percent="item.value" status="active"></Progress>
                </td>
            </tr>
            </tbody>
        </table>
    </Row>
</template>
<style>
    .m_row{
        background-color: #fff;
    }
    table,tr{
        padding:15px;
        width:100%;
    }
    .td_10{
        width:10%;
    }
    .td_40{
        width:40%;
    }
    .panel-heading{
        height: 60px;
        color: #41b883;
        font-size: 16px;
        font-weight: 800;
        line-height: 60px;
        text-align: left;
    }

</style>
<script>
	export default {
		name: 'VmUserPreview',
        props:{
			title:{
				type:String,
                default:"WorkingProgress"
            },
			data:{
				type:Array
            }
        },
		data: function () {
			return {
                rebuildData: this.data.slice(0)
			}
		},
        filters: {
			indexPlus:function (value) {
                    return ++value
			}
        }
	}
</script>

