<template>
    <div class="vm-tabs">
        <div class="tabHeader">
            <span class="title">{{ title }}</span>
        </div>
        <div class="tabContent" :style="{height:contentHeight}">
            <ul>
                <slot></slot>
            </ul>
        </div>
        <div class="tabFooter">
            <ul>
                <li v-for="(item, index) in navList" @click="getActiveName(index)" :class="{ active: item.active }" >{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .tabHeader{
        height: 55px;
        border-radius: 4px;
        background-color: #41b883;
        line-height: 55px;
        font-size: 16px;
    }
    .tabHeaderIcon{
        float:left;
        display: inline-block;
        background-color: #3AA576;
        width:55px;
    }
    .title{
        color:#fff;
        font-weight: 500;
    }
    .tabFooter li{
        float:left;
        margin-right: 15px;
    }
    .tabFooter li:hover{
        cursor:pointer;
    }
    .active{
        color:#41b883;
    }

</style>

<script>
	export default {
		name: "vm-tabs",
		props:['title','contentHeight'],
        data:function () {
            return {
		        navList:[],
		        activeName: String
	        }
        },
        methods:{
	        getActiveName:function (index) {
                this.activeName = this.navList[index].name
	        },
	        updateNavList:function () {
	        	this.navList = [];
                var itemList = this.$children;
                var that = this;
                itemList.forEach(function (item) {
                    var obj = {};
                    obj.label = item.label;
                    obj.name = item.name;
                    that.activeName == item.name ? obj.active = true : obj.active = false;
                    that.navList.push(obj);
                });
	        }
        },
		mounted:function () {
			this.activeName = this.$children[0].name;
            this.updateNavList();
		},
		watch: {
			activeName: function () {
				this.updateNavList()
			}
		},
	}
</script>


