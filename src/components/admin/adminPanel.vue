<template>
  <div
    class="admin-panel"
    :class="[getTheme === 'dark' ? 'bg-dark-primary' : 'bg-light']"
  >
    <div class="container">
      <table v-if="getAllOrders.length" class="table">
        <thead>
          <th>image</th>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>total price</th>
          <th>user</th>
          <th>order number</th>
          <th>actions</th>
        </thead>
        <tbody>
          <tr v-for="item in getAllOrders" :key="item">
            <td class="item-image">
              <img :src="item.image" alt="item iamge" />
            </td>
            <td class="item-name">{{ item.name }}</td>
            <td class="ammount">{{ item.quantity }} item</td>
            <td class="item-price">{{ item.price }} $</td>
            <td class="item-price">{{ item.price * item.quantity }} $</td>
            <td>{{ item.firstName }} {{ item.lastName }}</td>
            <td>{{ item.orderNumber }}</td>
            <td class="action">
              <base-button
                mode="danger"
                @click="updateOrderState(item, 'reject')"
                >reject</base-button
              >
              <base-button mode="green" @click="updateOrderState(item, 'agree')"
                >agree</base-button
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="no-items">
        <span> <i class="fa-regular fa-hourglass"></i> </span>
        <p>no items !</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default {
  computed: {
    getAllOrders() {
      return this.$store.getters.getAllOrders.filter((order) => {
        return order.state === "in proccess";
      });
    },

    getTheme() {
      return this.$store.getters.getTheme;
    },
    getUserId() {
      return this.$store.getters.getUserId;
    },
    getUserOrders() {
      return this.$store.getters.getUserorders;
    },
  },
  methods: {
    updateOrderState(item, state) {
      const oredrRef = doc(db, "orders", item.id);
      const userRef = doc(db, "users", item.userId);
      updateDoc(oredrRef, {
        state: state,
      });

      let userOrders = [];
      getDoc(userRef).then((res) => {
        userOrders = res.data().orders;
        const updatedUserOrders = userOrders.filter((order) => {
          return order.id !== item.orderId;
        });
        console.log(updatedUserOrders);

        const Item = userOrders.find((order) => {
          return order.id === item.orderId;
        });
        console.log(Item);

        // console.log(updatedUserOrders);
        const updatedItem = {
          ...Item,
          state: state,
        };

        updateDoc(userRef, {
          orders: [...updatedUserOrders, updatedItem],
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
    .no-items {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      span {
        font-size: 80px;
        // animation: name duration timing-function delay iteration-count direction fill-mode;
        animation: rotate 3s ease-in infinite;
        @keyframes rotate {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
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
          &.action {
            width: 250px;
            padding: 0;
            margin: 0;
            @media (max-width: 500px) {
              width: 100px;
            }
            button {
              @media (max-width: 500px) {
                font-size: 10px;
                font-weight: normal;
                padding: 5px;
              }
              &:last-of-type {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
