<template>
  <el-container>
    <el-header>
      <div class="name">
        {{ name }}
      </div>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
import {mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {},
  async mounted() {
    await this.OrLogin();
    await this.UserInfo();
    const haveToken = this.$store.state.userinfo.status;
    // if (!this.$store.state.login || haveToken == "401") {
    //   this.$router.push("/login");
    // }
  },
  methods: {
    ...mapActions(["OrLogin", "UserInfo"]),
  },
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>