<template>
  <div class="admin-panel">
    <base-loading v-if="isLoad"></base-loading>
    <div class="container">
      <form @submit.prevent="addNewItem">
        <h2 class="title">add a new item</h2>

        <div class="input-wrapper">
          <label>name</label>
          <input type="text" v-model="name" required />
        </div>
        <div class="input-wrapper">
          <label>catigory</label>
          <input type="text" v-model="catigory" required />
        </div>
        <div class="input-wrapper">
          <label>descreption</label>
          <textarea rows="5" v-model="descreption" required />
        </div>
        <div class="input-wrapper">
          <label>price</label>
          <input type="number" v-model="price" required />
        </div>
        <div class="input-wrapper">
          <label>amount</label>
          <input type="number" v-model="ammount" required />
        </div>
        <div class="input-wrapper">
          <label>sale value</label>
          <input type="number" v-model="sale" />
        </div>

        <div class="input-wrapper">
          <label>image</label>
          <div class="prevwe">
            <base-button @click.prevent="onPickFile" mode="green"
              >choose item image</base-button
            >
            <img v-if="imageUrl" :src="imageUrl" alt="" />
          </div>
          <input
            :style="{ display: 'none' }"
            type="file"
            @change="filechanged"
            ref="image"
            required
          />
        </div>
        <base-button mode="green">add item</base-button>
      </form>

      <!-- <form @submit.prevent="addFeaturedCatigories">
        <h2 class="title">add Featured  catigories</h2>

        <div class="input-wrapper">
          <label>name</label>
          <input type="text" v-model="FeaturedItemName" required />
        </div>

        <div class="input-wrapper">
          <label>image</label>
          <div class="prevwe">
            <base-button @click.prevent="onPickFile" mode="green"
              >choose item image</base-button
            >
            <img v-if="imageUrl" :src="imageUrl" alt="" />
          </div>
          <input
            :style="{ display: 'none' }"
            type="file"
            @change="filechanged"
            ref="image"
            required
            name="feat"
          />
        </div>
        <base-button mode="green">add item</base-button>
      </form>


      <form @submit.prevent="addOffer">
        <h2 class="title">add offer</h2>

        <div class="input-wrapper">
          <label>header</label>
          <input type="text" v-model="offerHeader" required />
        </div>

        <div class="input-wrapper">
          <label>sale</label>
          <input type="number" v-model="offerSale" required />
        </div>

        <div class="input-wrapper">
          <label>image</label>
          <div class="prevwe">
            <base-button @click.prevent="onPickFile" mode="green"
              >choose item image</base-button
            >
            <img v-if="imageUrl" :src="imageUrl" alt="" />
          </div>
          <input
            :style="{ display: 'none' }"
            type="file"
            @change="filechanged"
            ref="image"
            required
          />
        </div>
        <base-button mode="green">add item</base-button>
      </form> -->
    </div>
  </div>
</template>

<script>
import { storage, db } from "../../firebase/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { setDoc, onSnapshot, collection, addDoc } from "firebase/firestore";
export default {
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
      FeaturedItemName: "",
      FeaturedItemImage: "",
      FeaturedItemImageUrl: "",
      offerHeader: "",
      offerSale: null,
    };
  },
  methods: {
    filechanged(e) {
      this.image = e.target.files[0];
      const filereader = new FileReader();
      filereader.addEventListener("load", () => {
        this.imageUrl = filereader.result;
      });
      filereader.readAsDataURL(e.target.files[0]);
    },
    onPickFile() {
      this.$refs.image.click();
    },
    async addNewItem() {
      this.isLoad = true;
      const storageRef = ref(storage, `items/${this.name}`);
      const itemsRef = collection(db, "items");

      await uploadBytes(storageRef, this.image).then(async (snapshot) => {
        await getDownloadURL(storageRef).then(async (url) => {
          await addDoc(itemsRef, {
            name: this.name,
            catigory: this.catigory,
            descreption: this.descreption,
            sale: this.sale,
            ammount: this.ammount,
            price: this.price,
            image: url,
            numberOfSells: 0,
          }).then(() => {});
        });
      });
      this.isLoad = false;
    },
    async addFeaturedCatigories() {
      this.isLoad = true;
      const storageRef = ref(storage, `items/${this.FeaturedItemName}`);
      const itemsRef = collection(db, "FeaturedItems");

      await uploadBytes(storageRef, this.image).then(async (snapshot) => {
        await getDownloadURL(storageRef).then(async (url) => {
          await addDoc(itemsRef, {
            name: this.FeaturedItemName,
            image: url,
          }).then(() => {});
        });
      });
      this.isLoad = false;
    },

    async addOffer() {
      this.isLoad = true;
      const storageRef = ref(storage, `items/${this.offerHeader}`);
      const offersRef = collection(db, "offers");

      await uploadBytes(storageRef, this.image).then(async (snapshot) => {
        await getDownloadURL(storageRef).then(async (url) => {
          await addDoc(offersRef, {
            header: this.offerHeader,
            bgImage: url,
            sale: this.offerSale,
          }).then(() => {});
        });
      });
      this.isLoad = false;
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
.admin-panel {
  margin-top: 60px;
  padding: 30px 0;
  height: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    form {
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      border-radius: 10px;
      width: 400px;
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
