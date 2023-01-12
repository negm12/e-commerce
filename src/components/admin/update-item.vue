<template>
  <div class="update-item">
    <base-button class="close" @click="$emit('closeUpdateItem')" mode="danger">
      <i class="fa-solid fa-x"></i>
    </base-button>
    <base-loading v-if="isLoad"></base-loading>
    <div class="overlay"></div>
    <div class="container form-cont">
      <form
        @submit.prevent="updateItem"
        :class="[getTheme === 'dark' ? 'nav-bg-dark' : 'nav-bg-light']"
      >
        <h2 class="title">update item</h2>

        <div class="input-wrapper">
          <label>name</label>
          <input type="text" v-model="current_item.name" required />
        </div>
        <div class="input-wrapper">
          <label>catigory</label>
          <input type="text" v-model="current_item.catigory" required />
        </div>
        <div class="input-wrapper">
          <label>descreption</label>
          <textarea rows="5" v-model="current_item.descreption" required />
        </div>
        <div class="input-wrapper">
          <label>price</label>
          <input type="number" v-model="current_item.price" required />
        </div>
        <div class="input-wrapper">
          <label>amount</label>
          <input type="number" v-model="current_item.ammount" required />
        </div>
        <div class="input-wrapper">
          <label>sale value</label>
          <input type="number" v-model="current_item.sale" />
        </div>

        <div class="input-wrapper">
          <label>image</label>
          <div class="prevwe">
            <base-button @click.prevent="onPickFile" mode="green"
              >choose item image</base-button
            >
            <img :src="current_item.image" alt="" />
          </div>
          <input
            :style="{ display: 'none' }"
            type="file"
            @change="filechanged"
            ref="image"
          />
        </div>
        <base-button mode="green">add item</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import { storage, db } from "../../firebase/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { updateDoc, onSnapshot, doc, addDoc } from "firebase/firestore";
export default {
  props: ["current_item_for_update"],
  data() {
    return {
      name: "",
      catigory: "",
      price: null,
      sale: null,
      ammount: null,
      image: "",
      imageUrl: "",
      descreption: "",
      isLoad: false,
      current_item: this.current_item_for_update,
    };
  },
  methods: {
    onPickFile() {
      this.$refs.image.click();
    },
    filechanged(e) {
      this.image = e.target.files[0];
      const filereader = new FileReader();
      filereader.addEventListener("load", () => {
        this.current_item.image = filereader.result;
      });
      filereader.readAsDataURL(e.target.files[0]);
    },
    async updateItem() {
      console.log(this.current_item);
      this.isLoad = true;
      const storageRef = ref(storage, `items/${this.name}`);
      const itemRef = doc(db, "items", this.current_item.id);

      await uploadBytes(storageRef, this.image).then(async (snapshot) => {
        await getDownloadURL(storageRef).then(async (url) => {
          await updateDoc(itemRef, {
            ...this.current_item,
          }).then(() => {});
        });
      });
      this.isLoad = false;
      this.$emit("closeUpdateItem");
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
.prevwe {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100px;
    height: 100px;
    border: 1px dashed var(--main-color);
  }
}
.update-item {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  padding: 80px 0 20px;
  min-height: 500px;
  .close {
    position: absolute;
    top: 80px;
    right: 20px;
    z-index: 200;
  }
  .form-cont {
    position: relative;
    height: 100%;
    z-index: 200;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    &::-webkit-scrollbar {
      display: none;
    }
    form {
      position: absolute;
      padding: 30px;
      border-radius: 10px;
      width: 400px;
      height: fit-content;
      .title {
        width: 100%;
        text-align: center;
        padding: 10px 0 20px;
        font-weight: bold;
        color: var(--main-color);
        text-transform: none;
      }
      .input-wrapper {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        label {
          display: block;
          margin-bottom: 10px;
        }
        input,
        textarea {
          display: block;
          width: 100%;
          border: none;
          border: 2px solid rgba(0, 0, 0, 0.26);
          padding: 10px;
          border-radius: 5px;
          outline: none;
          &:focus {
            border: 2px solid var(--main-color);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
}
</style>
