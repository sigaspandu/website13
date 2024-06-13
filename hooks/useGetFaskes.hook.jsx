import { useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { db } from "@/helpers/firebase/firebaseConfig";

export default function useGetFaskesHooks() {
  const [oneFaskes, setOneFaskes] = useState({});
  const [allFaskes, setAllFaskes] = useState([]);
  const [faskes, setFaskes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFaskes = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "facilities"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFaskes(data);
      setAllFaskes(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const searchFaskes = (search) => {
    if (search === "") {
      setFaskes(allFaskes);
    } else {
      const filteredFaskes = allFaskes.filter((faskes) =>
        faskes.name.toLowerCase().includes(search.toLowerCase())
      );
      setFaskes(filteredFaskes);
    }
  };

  const getFaskesById = async (id) => {
    try {
      setLoading(true);
      const querySnapshot = await getDoc(doc(db, "facilities", id));
      const data = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
      setOneFaskes(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return {
    allFaskes,
    searchFaskes,
    oneFaskes,
    getFaskesById,
    faskes,
    getFaskes,
    loading,
    error,
  };
}
