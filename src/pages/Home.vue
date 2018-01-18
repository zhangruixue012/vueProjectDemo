<template>
    <div class="home">
        <div class="header">
            <img src="../assets/logo.png" style="height:40px;float:left;">
        </div>

            <div class="sidebar">
                <Menu active-name="Dashboard" theme="dark" width="100%">
                    <div class="layout-logo-left"></div>
                    <MenuItem name="Dashboard" >
                        <router-link to="/">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            {{$t('m.Dashboard')}}
                        </router-link>
                    </MenuItem>

                    <!--动态显示哪个item-->
                    <MenuItem name="Widget">
                        <!--name对应index里面的name-->
                        <!--<router-link :to="{name:'Widget',params:{}}">-->
                        <!--<Icon type="ios-navigate" :size="iconSize"></Icon>-->
                        <!--Widget-->
                        <!--</router-link>-->

                        <!--path对应index里面的path-->
                        <!--<router-link :to="{path:'widget',query:{}}">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            Widget
                        </router-link>-->

                        <router-link :to="{path:'widget',query:{}}">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            {{$t('m.Widget')}}
                        </router-link>
                    </MenuItem>

                    <MenuItem name="Panels">
                        <router-link to="/Panels">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            {{$t('m.Panels')}}
                        </router-link>
                    </MenuItem>

                    <MenuItem name="Editor">
                        <router-link to="/Editor">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            {{$t('m.Editor')}}
                        </router-link>
                    </MenuItem>

                    <MenuItem name="Charts">
                        <router-link to="/Charts">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            {{$t('m.Charts')}}
                        </router-link>
                    </MenuItem>
                </Menu>
            </div>

            <div class="main-content">
                <Button type="primary" @click="modal1 = true">{{$t('m.switchLanguage')}}</Button>
                <modal v-model=modal1  width="450" :styles="{top: '350px'}" @on-ok="changeLangEvent" >
                    <!--<p>{{languageContent.chinese}}</p>-->
                    <!--<p>{{languageContent.english}}</p>-->
                    <p>是否切换系统语言？</p>
                </modal>
                <router-view></router-view>
            </div>
    </div>

</template>
<style scoped>
    .header{
        height:60px;
        position: fixed;
        z-index: 999;
        width:100%;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
         text-align: center;
         padding: 10px 0 20px;
         color: #9ea7b4;
     }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<script>
	export default {
		data () {
			return {
				spanLeft: 4,
				spanRight: 20,
				modal1:false,
                /*languageContent:{
					chinese:'zh-CN',
                    english:'en-US'
                },
				lang:false,*/
			}
		},
		computed: {
			iconSize () {
				return this.spanLeft === 5 ? 14 : 24;
			}
		},
		methods: {
			toggleClick () {
				if (this.spanLeft === 5) {
					this.spanLeft = 2;
					this.spanRight = 22;
				} else {
					this.spanLeft = 5;
					this.spanRight = 19;
				}
			},
			changeLangEvent () {
				if (this.$i18n.locale == 'zh-CN' ) {
					this.$i18n.locale = 'en-US';
					/*this.$i18n.locale = this.lang;*///关键语句
				}else {
					this.$i18n.locale = 'zh-CN';
					/*this.locale = this.lang;*///关键语句
				}
			}
		}
	}
</script>
