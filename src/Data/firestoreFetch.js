import {
    collection,
    getDocs,
    orderBy,
    query,
    where,
  } from "@firebase/firestore";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  
  import db from "./firebaseConfig";
  
  export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
      const categoryDocRef = doc(db, "categories", idCategory);
      q = query(
        collection(db, "products"),
        where("category", "==", categoryDocRef)
      );
    } else {
      q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
    return dataFromFirestore;
  };
  
  export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      let result = {
        id: idItem,
        ...docSnap.data(),
      };
      return result;
    } else {
      console.log("No such document!");
    }
  };
  