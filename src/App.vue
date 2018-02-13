<template>
  <div id="app">
    <loading :show="isLoading"></loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabbar v-show="$route.meta.showTabbar" class="tabbar">
      <tabbar-item :selected="changeTabBar('home')" link="/home">
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="changeTabBar('sort')" link="/sort">
        <i slot="icon" class="fa fa-bars"></i>
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item :selected="changeTabBar('shop')" link="/shop">
        <i slot="icon" class="fa fa-shopping-cart"></i>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item :selected="changeTabBar('setting')" link="/setting">
        <i slot="icon" class="fa fa-user"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Loading, Tabbar, TabbarItem } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    components: {
      Loading,
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        showMenus: false
      }
    },
    computed: {
      ...mapState(['isLoading'])
    },
    methods: {
      selectedTabBar(str) {
        return this.$route.name === str
      },
      changeTabBar(name) {
        return this.$route.name === name
      }
    }
  }
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "./styles/sup.less";
.tabbar {
  .fa {
    font-size: 20px;
  }
  .weui-tabbar__icon {
    height: 20px;
  }
  p {
    padding: 0;
  }
}
</style>