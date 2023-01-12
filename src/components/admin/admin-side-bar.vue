<template>
  <div
    class="side-bar"
    :class="[getTheme === 'dark' ? 'nav-bg-dark' : 'nav-bg-light']"
  >
    <div class="close" @click="toggleSideBar">
      <i class="fa-solid fa-x"></i>
    </div>
    <div class="content">
      <ul>
        <li>
          <router-link :to="{ name: 'admin' }"> manage orders </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'manage-products' }">
            manage products
          </router-link>
        </li>
        <slot />
        <!-- <li @click="openAddItem">add item</li> -->
        <!-- <li>add admin</li>
        <li>add offer</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSideBar() {
      this.$emit("toggleSideBar");
    },
    openAddItem() {
      this.$emit("toggleSideBar");
      this.$emit("openAddItem");
    },
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-color: var(--danger-color);
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .content {
    position: relative;
    width: 100%;
    height: auto;
    // background-color: aqua;
    top: 100px;
    left: 0;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      width: 100%;
      height: 100%;
      padding: 20px;
      li {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        font-size: 17px;
        font-weight: bold;
        color: #fff;
        background-color: var(--main-color);
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        a {
          color: #fff;
          display: block;
          width: 100%;
          &.router-link-active {
            position: relative;
            &::before {
              content: "";
              position: absolute;
              top: 50%;
              right: -5px;
              transform: translateY(-50%);
              border-width: 10px;
              border-style: solid;
              border-color: transparent transparent transparent #fff;
            }
          }
        }
      }
    }
  }
}
</style>
