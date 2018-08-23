<template>
  <div id="app">
    <drawer width="200px;" :show.sync="drawerVisibility" :show-mode="showModeValue" 
        :placement="showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
        <x-header slot="header" class="header" @on-click-back="back()" :left-options="leftOptions" 
              :right-options="rightOptions" :title="title" @on-click-more="showMore()" >
          </x-header>
          <transition name="slide-left">
            <router-view class="child-view"></router-view>
          </transition>
        </view-box>
    </drawer>
  </div>
</template>

<script>
  import {Drawer, ViewBox, XHeader} from 'vux';

  export default {
    components: {
        Drawer,
        ViewBox,
        XHeader
    },
    data() {
        return {
            showMenu: true,
            drawerVisibility: false,
            showModeValue: 'push',
            showPlacement: 'left',
            showPlacementValue: 'left'

        };
    },
    methods: {
      back() {

      },
      showMore() {
        console.log(111);
        this.drawerVisibility = true;
      }
    },
    computed: {
      leftOptions() {
        var vm = this;
        let name = this.$route.name;
        switch (name) {
            case 'Home':
                vm.title = '音乐';
                return { showBack: false, preventGoBack: true, backText: ''};
                break;
            default:
                vm.title = '';
                return { showBack: true, preventGoBack: true };
        }
      },
      rightOptions() {
        var vm = this;
        let name = this.$route.name;
        switch (name) {
            case 'Home':
                return { showMore: true };
                break;
            default:
                return { showMore: false};
        }
      },
    }
  }
</script>

<style>
  @import url('assets/styles/common.css');
  
  #app {
    background: #eee;
    height: 100%;
    width: 100%;
  }

  .header {
      width:100%;
      position: absolute !important;
      left:0;
      top:0;
      z-index:100;
  }

  .child-view {
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1); 
  } 
  .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(50px, 0);
      transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-50px, 0);
      transform: translate(-50px, 0);
  }
</style>
