<template>
<div>
<input type='text' placeholder="Enter coordinates" @input="setCoords($event.target.value)">
</div>
</template>

<script>
	export default {
		name: 'CoordsApp',
		props: {
			setCoords: {
				type: Function,
				required: true
			}

		}
	}
</script>

<style scoped>
input {
    border: 0;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    outline: 0;
    outline-offset: 0;
    font-size: 15px;
  }
</style>
