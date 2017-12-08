<template>
    <li v-show="show">
        <slot></slot>
    </li>
</template>

<script>
	export default {
		name: "vm-tabs-item",
		props: ['name', 'label'],
		data: function () {
			return {
				show: false
			}
		},
		methods: {
			updateShow: function () {
				if (this.$parent.activeName === this.name) {
					this.show = true
				} else {
					this.show = false
				}
			}
		},
		mounted: function () {
			this.updateShow()
		},
        updated:function () {
            this.updateShow();
        }
	}
</script>

<style scoped>

</style>
