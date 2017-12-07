<template>
    <Row class="vm-state-overview" type="flex">
        <Col span="10" class="symbol" :style="{ backgroundColor: color }">
        <Icon class="icon" :type="type" size=45 color="#fff"/>
        </Col>
        <Col span="14" class="value">
            <h1 class="count">{{ count }}</h1>
            <p>{{ title }}</p>
        </Col>
    </Row>


</template>

<script>
	export default {
		name: "vm-state-overview",
		props: ['color', 'icon', 'title', 'count','type']
	}
</script>

<style scoped>
    .value{
         background-color: #fff;
     }
    .icon{
         margin-top: 7px;
     }
</style>
