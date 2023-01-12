<template>
  <div
    class="admin-panel"
    :class="[getTheme === 'dark' ? 'bg-dark-primary' : 'bg-light']"
  >
    <div class="container">
      <table class="table">
        <tbody>
          <tr v-for="item in getAllItems" :key="item.id">
            <td class="item-image">
              <img :src="item.image" alt="item iamge" />
            </td>
            <td class="item-name">{{ item.name }}</td>
            <td class="ammount">{{ item.ammount }} item</td>
            <td class="item-price">{{ item.price }} $</td>
            <td class="item-sale">{{ item.sale }} sale</td>
            <td class="action">
              <router-link
                :to="{ name: 'singleItem', params: { id: `${item.id}` } }"
              >
                <base-button class="prevwe" mode="transparent">
                  <i class="fa-regular fa-eye"></i>
                </base-button>
              </router-link>
              <base-button
                mode="transparent"
                class="remove"
                @click="deleteItem(item.id)"
              >
                <i class="fa-regular fa-trash-can"></i>
              </base-button>
              <base-button
                @click="$emit('openUdateItem', item)"
                mode="transparent"
                class="edit"
              >
                <i class="fa-regular fa-pen-to-square"></i>
              </base-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default {
  computed: {
    getAllItems() {
      return this.$store.getters.getAllItems;
    },
    getCurrentCart() {
      return this.$store.getters.getUserCart;
    },
    getCurrentLoves() {
      return this.$store.getters.getUserLoves;
    },
    getTheme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    deleteItem(itemid) {
      const itemRef = doc(db, "items", itemid);
      deleteDoc(itemRef).then(() => {
        const newCart = this.getCurrentCart.filter((item) => {
          return item.item !== itemid;
        });
        const newLoves = this.getCurrentLoves.forEach((item) => {
          return item !== itemid;
        });
        const docRef = doc(db, "users", this.$store.getters.getUserId);
        updateDoc(docRef, {
          cart: [...newCart],
          loves: [...newLoves],
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
table,
td,
tr,
th,
thead,
tbody {
  border: none;
}
.admin-panel {
  width: 100%;
  margin-top: 60px;
  min-height: 100vh;
  .container {
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    min-height: 100vh;
    .table {
      tr {
        border-bottom: 1px solid #bbb;
        @media (max-width: 500px) {
          .item-image {
            width: 35px;
            height: 35px;
            img {
              width: 30px;
              height: 30px;
            }
          }
        }
        td {
          // font-size: 0.8rem;
          @media (max-width: 500px) {
            font-size: 10px;
            font-weight: normal;
          }
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
