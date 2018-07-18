<template>
	<div>this is login page,this id: {{id}}</div>
</template>
<script>
	export default {
		props: ['id'],
		mounted () {
			console.log(this.id)
		},
		data () {
			return {

			}
		}
	}
</script>