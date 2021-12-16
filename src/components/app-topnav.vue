<template>
  <nav class="app-topnav">
    <ul>
      <li>
        <a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a>
      </li>
      <li><a href="javascript:;">退出登录</a></li>
      <li><a href="javascript:;">请先登录</a></li>
      <li><a href="javascript:;">免费注册</a></li>
      <li><a href="javascript:;">我的订单</a></li>
      <li><a href="javascript:;">会员中心</a></li>
      <li><a href="javascript:;">帮助中心</a></li>
      <li><a href="javascript:;">关于我们</a></li>
      <li>
        <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppTopnav",
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.app-topnav {
  background-color: #333;
  ul {
    display: flex;
    justify-content: flex-end;
    height: 53px;
    align-items: center;
    li {
      a {
        display: inline-block;
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        // border-left: 2px solid #666;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
