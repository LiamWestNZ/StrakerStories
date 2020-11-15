<template>
    <div id="Container">
        <div id="containerDiv">
            <slot />
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Container',
  
}
</script>

<style scoped>
#containerDiv{
    background-color: #f0f4f7;
    z-index: 4;
    width: 100%;
    height: 100%;
    position: static;
}

</style>