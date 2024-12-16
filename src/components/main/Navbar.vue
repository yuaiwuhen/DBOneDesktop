<template>
    <el-menu class="el-menu-main" mode="horizontal" @select="handleSelect">
        <el-sub-menu index="1" popper-class="dbo-menu-popper">
            <template #title>{{ t('file') }}</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2" popper-class="dbo-menu-popper">
            <template #title>{{ t('edit') }}</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3" popper-class="dbo-menu-popper">
            <template #title>{{ t('view') }}</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="4" popper-class="dbo-menu-popper">
            <template #title>{{ t('collection') }}</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="5" popper-class="dbo-menu-popper">
            <template #title>{{ t('tool') }}</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="6">{{ t('about') }}</el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped type="sass">
.el-menu-main {
    height: 30px;

    :deep(&:first-child .el-sub-menu__title) {
        padding-left: 10px;
    }

    .el-menu-item {
        padding: 0 10px;
        font-size: 13px;
    }

    :deep(.el-sub-menu__title) {
        padding: 0 15px;
        font-size: 13px;
        color: initial;
        border-bottom-color: transparent;
    }

    :deep(.el-sub-menu__icon-arrow) {
        display: none;
        right: 10px;
    }

    :deep(.el-sub-menu.is-active .el-sub-menu__title) {
        color: red;
    }
}

.el-menu--horizontal>.el-menu-item.is-active {
    color: var(--el-menu-text-color) !important;
    border-bottom: none;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus {
    background-color: initial;
}
</style>