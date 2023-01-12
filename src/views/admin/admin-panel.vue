<template>
  <div
    class="panel"
    :class="[getTheme === 'dark' ? 'bg-dark-primary' : 'bg-light']"
  >
    <transition name="fade">
      <div v-if="!show_side_bar" @click="toggleSideBar" class="open-side-bar">
        <i class="fa-solid fa-angles-right"></i>
      </div>
    </transition>
    <transition name="translate">
      <adminSideBar v-if="show_side_bar" @toggleSideBar="toggleSideBar" />
    </transition>
    <transition name="fade">
      <div
        class="overlay"
        v-if="show_side_bar"
        @click="show_side_bar = false"
      ></div>
    </transition>

    <adminPanel />
  </div>
</template>

<script>
import adminSideBar from "@/components/admin/admin-side-bar";
import adminPanel from "@/components/admin/adminPanel";
export default {
  components: {
    adminSideBar,
    adminPanel,
  },
  data() {
    return {
      show_side_bar: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.show_side_bar = !this.show_side_bar;
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
.translate-enter-from,
.translate-leave-to {
  transform: translateX(-100%);
}
.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease-in-out;
}

.panel {
  min-height: 100vh;
}
.open-side-bar {
  position: fixed;
  top: 80px;
  left: 0;
  background-color: var(--main-color);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 1000;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
}

.overlay {
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
</style>
