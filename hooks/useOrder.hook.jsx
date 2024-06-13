import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore/lite";
import { db } from "@/helpers/firebase/firebaseConfig";
import Swal from "sweetalert2";
export function useOrder() {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);

  async function getOrders(faskesId) {
    try {
      const ordersCollectionRef = collection(db, "orders");
      const q = query(ordersCollectionRef, where("faskes", "==", faskesId));
      const querySnapshot = await getDocs(q);

      const orders = [];

      for (const orderDoc of querySnapshot.docs) {
        const orderData = orderDoc.data();
        const pasienId = orderData.pasien;

        // Query the users collection using the pasienId
        const userDocRef = doc(db, "users", pasienId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          orders.push({
            id: orderDoc.id,
            ...orderData,
            user: { id: userDoc.id, ...userData },
          });
        }
      }
      setOrders(orders);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOrderById(id) {
    try {
      const orderDocRef = doc(db, "orders", id);
      const orderDoc = await getDoc(orderDocRef);
      const order = orderDoc.data();

      const userDocRef = doc(db, "users", order.pasien);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        order["user"] = userDoc.data();
      }

      setOrder(order);
    } catch (error) {
      console.log(error);
    }
  }

  async function createOrder({ userId, faskesId, time }) {
    try {
      const ordersCollectionRef = collection(db, "orders");
      const docRef = await addDoc(ordersCollectionRef, {
        pasien: userId,
        faskes: faskesId,
        time,
        status: "pending",
      });
      Swal.fire("Success", "Faskes akan memproses permintaan anda", "success");
      return docRef.id;
    } catch (error) {
      Swal.fire("Error", "Gagal membuat order", "error");
      return false;
    }
  }

  async function completeOrder(id) {
    try {
      const orderDocRef = doc(db, "orders", id);
      await updateDoc(orderDocRef, {
        status: "done",
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Pesanan berhasil diselesaikan",
      }).then(() => {
        window.location.reload();
      });
      return true;
    } catch (error) {
      Swal.fire("Error", "Gagal menyelesaikan pesanan", "error");
      return false;
    }
  }

  async function acceptOrder(id) {
    try {
      const orderDocRef = doc(db, "orders", id);
      await updateDoc(orderDocRef, {
        status: "accepted",
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Pesanan berhasil diterima",
      }).then(() => {
        window.location.href = "/shipping-list";
      });
      return true;
    } catch (error) {
      Swal.fire("Error", "Gagal menerima pesanan", "error");
      return false;
    }
  }

  return {
    orders,
    getOrders,
    createOrder,
    completeOrder,
    acceptOrder,
    order,
    getOrderById,
  };
}
