import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../Server-side/Firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useMoralis } from "react-moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useNavigate } from "react-router-dom";

function WritersPage() {
  const { isAuthenticated, user } = useMoralis();

  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    ETHData();
  }, []);

  let navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }
  function redirectLogin() {
    navigate("/signin");
  }

  const ETHData = async () => {
    if (!isAuthenticated) {
      redirectLogin();
    } else {
      FetchAPI();
    }
  };

  const FetchAPI = async () => {
    const options = {
      chain: "polygon",
      address: user.address,
      token_address: "0x861856B01269a03AA786d76B92BBDBDA137A728c"
    };
    const polygonNFTs = await Web3Api.account.getNFTsForContract(options);

    if (polygonNFTs.total > 0) {
      console.log("GG");
    } else {
      redirectHome();
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    shortDesc: "",
    Story: "",
    genre: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = (e) => {
    if (
      formData.nameOfEbook === "" ||
      formData.author === "" ||
      formData.shortDesc === "" ||
      formData.Story === "" ||
      formData.genre === "" ||
      formData.price === "" ||
      formData.image === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const storageREf = ref(storage, `/images/${formData.image.name}`);
    const uploadImage = uploadBytesResumable(storageREf, formData.image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          author: "",
          shortDesc: "",
          Story: "",
          genre: "",
          price: "",
          image: ""
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Stories");
          addDoc(articleRef, {
            title: formData.title,
            author: formData.author,
            shortDesc: formData.shortDesc,
            Story: formData.Story,
            genre: formData.genre,
            price: formData.price,
            imageUrl: url
          })
            .then(() => {
              console.log("Article added successfully");
            })
            .catch((err) => {
              console.log("Error adding article");
            });
        });
      }
    );
  };
  return (
    <div>
      <h2>Write your book</h2>

      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Author</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Short description</label>
      <input
        type="text"
        name="shortDesc"
        value={formData.shortDesc}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Story</label>
      <input
        type="text"
        name="Story"
        value={formData.Story}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Genre</label>
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Price(ETH)</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">Cover</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => handleImageChange(e)}
      />

      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}

export default WritersPage;
