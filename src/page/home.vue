<template>
  <div class="c-home">
    <x-header :left-options="{preventGoBack:true,showBack:false}" :right-options="{showMore:false}" title="超市">
    </x-header>
    <div class="c-body">
      <div class="c-title">
        <swiper auto height="150px">
          <swiper-item v-for="(item, index) in titleImgs" :key="index">
            <img :src="item" width="100%" alt="">
          </swiper-item>
        </swiper>
        <card :header="{title:item.title}" v-for="(item, index) in groups" :key="index">
          <flexbox slot="content" :gutter="0" style="overflow: auto;">
            <flexbox-item :span="4" v-for="(g, index) in item.goods" style="text-align:center;">
              <img :src="g.img" width="80%">
              <p>{{g.name}}</p>
            </flexbox-item>
          </flexbox>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
  import { Card, Flexbox, FlexboxItem, Swiper, SwiperItem, Group, XHeader } from 'vux'
  export default {
    data() {
      return {
        titleImgs: ['http://192.168.1.136:9008/img/1.jpg', 'http://192.168.1.136:9008/img/2.jpg', 'http://192.168.1.136:9008/img/3.jpg', 'http://192.168.1.136:9008/img/4.jpg', 'http://192.168.1.136:9008/img/5.png'],
        groups: [
          { title: '新品推荐', goods: [{ img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }, { img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }, { img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }, { img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }] },
          { title: '干果', goods: [{ img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }, { img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }, { img: 'http://192.168.1.136:9008/img/5.png', name: '德芙巧克力' }] }
        ]
      }
    },
    created() {
    },
    methods: {
    },
    components: {
      scroll,
      Card,
      Flexbox,
      FlexboxItem,
      Swiper,
      SwiperItem,
      Group,
      XHeader
    }
  }
</script>

<style lang="less">
@import "../styles/sup.less";
.c-home {
  overflow: hidden;
  .c-body {
    height: calc(~"100vh - @{vux-header-height} - @{s-footer-height}");
    overflow: auto;
  }
}
</style>