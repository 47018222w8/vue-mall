<template>
  <div class="c-sort">
    <x-header :left-options="{preventGoBack:true,showBack:false}" :right-options="{showMore:false}" title="分类">
      <div slot="overwrite-left" class="c-left">
        <i slot="icon" class="fa fa-angle-left fa-lg" style="font-size:24px;font-weight:900;"></i>
      </div>
    </x-header>
    <div class="c-body">
      <flexbox slot="content" :gutter="0" style="overflow: auto;">
        <flexbox-item :span="2" class="c-left">
          <p v-for="(str,index) in leftMenu" class="c-p">{{str}}</p>
        </flexbox-item>
        <flexbox-item>

        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { XHeader, XButton, Card, Flexbox, FlexboxItem, Swiper, SwiperItem } from 'vux'
  export default {
    data() {
      return {
        leftMenu: ['a', 'b', 'c', 'd']
      }
    },
    created() {
    },
    methods: {
    },
    components: {
      scroll,
      XHeader,
      XButton,
      Card,
      Flexbox,
      FlexboxItem,
      Swiper,
      SwiperItem
    }
  }
</script>

<style lang="less">
@import "../styles/sup.less";
.c-sort {
  overflow: hidden;
  .c-body {
    height: calc(~"100vh - @{vux-header-height} - @{s-footer-height}");
    overflow: auto;
    .c-left {
      .c-p {
        text-align: center;
      }
    }
  }
}
</style>