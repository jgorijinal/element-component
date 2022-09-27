<template>
  <div class="m-list">
    <el-tabs v-model="activeName" class="demo-tabs" stretch>
      <el-tab-pane
        v-for="(item, index) in list"
        :label="item.title"
        :name="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(listItem, index) in item.content"
            :key="index"
            @click="clickListItem(listItem,index)"
          >
            <div class="avatar" v-if="listItem.avatar">
              <el-avatar :src="listItem.avatar"></el-avatar>
            </div>
            <div class="content">
              <div class="title" v-if="listItem.title">
                <div class="title-text">{{ listItem.title }}</div>
                <el-tag
                  :type="listItem.tagType"
                  v-if="listItem.tagType"
                  size="small"
                >
                  {{ listItem.tag }}
                </el-tag>
              </div>
              <div class="desc" v-if="listItem.desc">{{ listItem.desc }}</div>
              <div class="time" v-if="listItem.time">{{ listItem.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <div class="action" v-for="(action, i) in actions" :key="i" @click="clickAction(i,action)">
            <div class="a-icon" v-if="action.icon">
              <component :is="`el-icon-${action.icon}`"></component>
            </div>
            <div class="a-title">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import { ListOptions, ActionOptions,ListItem } from "./types";
const props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
// 选中的 tab
const activeName = ref<string>(props.list[0].title);

const emits = defineEmits(['clickListItem','clickAction'])
// 点击列表某一项. 派发事件
const clickListItem = (listItem:ListItem,index:number) => {
  emits('clickListItem', {index,listItem})
}
const clickAction = (i:number,action:ActionOptions) => {
  emits('clickAction', {index:i,action})
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: rgb(232, 232, 232);
  }
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 10px;
  }
  .content {
    flex: 3;
    padding: 10px;
    .title {
      position: relative;
      .title-text {
      }
      .el-tag {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .desc {
      margin-top: 4px;
      font-size: 12px;
    }
    .time {
      margin-top: 4px;
      font-size: 12px;
    }
  }
}
.actions {
  display: flex;;
  .action {
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:8px;
    transition: all 0.25s ease;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: rgb(247, 244, 244);
    }
    .a-icon {
      display: flex;
      align-items: center;
      svg {
        width:14px;
        height:14px;
        margin-right:4px;
      }
    }
    .a-title {}
  }
}
</style>
