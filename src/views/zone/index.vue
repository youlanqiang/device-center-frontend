<script setup lang="ts">

</script>

<template>
    <div class="list-wrap">
        <ARow class="list-row" :gutter="24">
            <ACol :xs="12" :sm="12" :md="12" :lg="6" :xl="6" :xxl="6" class="list-col">
                <div class="card-wrap empty-wrap">
                    <ACard :bordered="false" hoverable>
                        <AResult :status="null" :title="'点击创建园区'">
                            <template #icon>
                                <IconPlus style="font-size: 20px" />
                            </template>
                        </AResult>
                    </ACard>
                </div>
            </ACol>
        </ARow>
    </div>
</template>

<style scoped lang="less">
.card-wrap {
    height: 100%;
    transition: all 0.3s;
    border: 1px solid var(--color-neutral-3);

    &:hover {
        transform: translateY(-4px);
    }

    :deep(.arco-card-meta-description) {
        color: rgb(var(--gray-6));

        .arco-descriptions-item-label-inline {
            font-weight: normal;
            font-size: 12px;
            color: rgb(var(--gray-6));
        }

        .arco-descriptions-item-value-inline {
            color: rgb(var(--gray-8));
        }
    }
}

.empty-wrap {
    height: 200px;
    border-radius: 4px;

    :deep(.arco-card) {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;

        .arco-result-title {
            color: rgb(var(--gray-6));
        }
    }
}
</style>