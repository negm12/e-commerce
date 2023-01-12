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
      <adminSideBar v-if="show_side_bar" @toggleSideBar="toggleSideBar">
        <li class="additem" @click="openAddItem">add item</li>
      </adminSideBar>
    </transition>
    <transition name="fade">
      <div
        class="overlay"
        v-if="show_side_bar"
        @click="show_side_bar = false"
      ></div>
    </transition>
    <transition name="fade">
      <addItem v-if="show_add_item" @closeAddItem="closeAddItem" />
    </transition>

    <transition name="fade">
      <updateItem
        :current_item_for_update="current_item_for_update"
        v-if="show_update_item"
        @closeUpdateItem="closeUpdateItem"
      />
    </transition>

    <manageProds @openUdateItem="openUdateItem"> </manageProds>
  </div>
</template>

<script>
import adminSideBar from "@/components/admin/admin-side-bar";
import manageProds from "@/components/admin/manage-prods.vue";
import addItem from "@/components/admin/add-item";
import updateItem from "@/components/admin/update-item";
export default {
  components: {
    adminSideBar,
    manageProds,
    addItem,
    updateItem,
  },
  data() {
    return {
      show_side_bar: false,
      show_add_item: false,
      show_update_item: false,
      current_item_for_update: {},
    };
  },
  methods: {
    toggleSideBar() {
      this.show_side_bar = !this.show_side_bar;
    },
    openAddItem() {
      this.show_add_item = true;
      this.show_side_bar = !this.show_side_bar;
    },
    closeAddItem() {
      this.show_add_item = false;
    },
    openUdateItem(item) {
      this.show_update_item = true;
      this.current_item_for_update = item;
    },
    closeUpdateItem() {
      this.show_update_item = false;
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
.additem {
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
}

.overlay {
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
</style>
