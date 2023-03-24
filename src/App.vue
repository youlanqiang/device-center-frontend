<script setup lang="ts">
import Menu from './components/Menu.vue'
</script>
<template>
  <ALayout class="layout">
    <ALayoutSider collapsible>
      <Menu />
    </ALayoutSider>
    <ALayout>
      <ALayoutHeader style="padding-left: 20px;">
        设备中心前端管理
      </ALayoutHeader>
      <ALayout style="padding: 24px;">
        <ALayoutContent>
          <KeepAlive>
            <RouterView />
          </KeepAlive>
        </ALayoutContent>
        <ALayoutFooter>code by youlanqiang</ALayoutFooter>
      </ALayout>
    </ALayout>
  </ALayout>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  background: var(--color-fill-2);

}

.layout :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.layout :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout :deep(.arco-layout-footer),
.layout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
