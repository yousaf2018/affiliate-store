import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the import based on your file structure

const storage = getStorage();

export const addProduct = async (productData, imageFile) => {
  try {
    // Upload image to Firebase Storage
    const storageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);

    // Get the download URL for the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Add product to Firestore
    const productWithImage = {
      ...productData,
      imageUrl, // Include the image URL in the product data
    };

    await addDoc(collection(db, "products"), productWithImage);
    console.log("Product added successfully");
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
