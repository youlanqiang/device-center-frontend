<script setup lang="ts">
import router from '../router'

let goToPage = (url: string) => {
    router.push(url)
}

</script>

<template>
    <AMenu>
        <AMenuItem @click="goToPage('/')">首页</AMenuItem>
        <ASubMenu>
            <template #title>区域建筑</template>
            <AMenuItem>园区管理</AMenuItem>
            <AMenuItem @click="goToPage('/building')">建筑管理</AMenuItem>
            <AMenuItem>楼层管理</AMenuItem>
        </ASubMenu>
        <ASubMenu>
            <template #title>物联设备</template>
            <AMenuItem>产品管理</AMenuItem>
            <AMenuItem>设备管理</AMenuItem>
        </ASubMenu>
    </AMenu>
</template>