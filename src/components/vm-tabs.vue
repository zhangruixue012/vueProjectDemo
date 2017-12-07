<template>
    <div class="vm-tabs">
        <div class="tabHeader">
            <span class="tabHeaderIcon"><Icon class="icon" type="android-contact" size=30 color="#fff"/></span>
            <span class="title">{{ title }}</span>
        </div>
        <div class="tabContent" :style="{height:contentHeight}">
            <ul>
                <slot></slot>
            </ul>
        </div>
        <div class="tabFooter">
            <ul>
                <li v-for="(item, index) in navList" @click="getActiveName(index)" :class="{ active: item.active }" >{{item.name}}</li>
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
                var itemList = this.$children
                itemList.forEach(function (item) {
                    var obj = {};
                    obj.label = item.label;
                    obj.name = item.name;
                    this.activeName == item.name ? obj.active = true : obj.active = false;
                    this.navList.push(obj);
                });
	        }
        },
		mounted:function () {
			this.activeName = this.$children[0].name;
            this.updateNavList();
		}
	}
</script>


