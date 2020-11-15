<template>
    <div id="content">
        <div id="contentDiv">
            <slot />
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Content',
  
}
</script>

<style scoped>
#contentDiv{
    color: white;
    background-color: white;
    width: 70%;
    height: 100%;
    position: relative;
    z-index: 4;
    margin: auto;
}

</style>