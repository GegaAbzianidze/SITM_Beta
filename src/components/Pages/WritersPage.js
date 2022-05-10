import React, {useState} from 'react'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {storage, db} from '../Server-side/Firebase-config';
import { collection, addDoc } from "firebase/firestore";

function WritersPage() {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        shortDesc: '',
        Story: '',
        genre: '',
        price: '',
        image: ''
    });

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleImageChange = e => {
        setFormData({...formData, image: e.target.files[0]});
    }

    const handlePublish = e => {
        if (formData.nameOfEbook === '' || formData.author === '' || formData.shortDesc === '' || formData.Story === '' || formData.genre === '' || formData.price === '' || formData.image === '') {
            alert('Please fill all the fields');
            return;
        } 

        const storageREf = ref(storage, `/images/${formData.image.name}`);
        const uploadImage = uploadBytesResumable(storageREf, formData.image)
        uploadImage.on(
            "state_changed",
            (snapshot) => {
              const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
            },
            (err) => {
              console.log(err);
            },
            () => {
            setFormData({
                title: '',
                author: '',
                shortDesc: '',
                Story: '',
                genre: '',
                price: '',
                image: '',
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

        <label htmlFor=''>Title</label>
        <input type='text' name='title' value={formData.title} onChange={(e)=>handleChange(e)}/>
        
        <label htmlFor=''>Author</label>
        <input type='text' name='author' value={formData.author} onChange={(e)=>handleChange(e)}/>

        <label htmlFor=''>Short description</label>
        <input type='text' name='shortDesc' value={formData.shortDesc}  onChange={(e)=>handleChange(e)}/>

        <label htmlFor=''>Story</label>
        <input type='text' name='Story' value={formData.Story} onChange={(e)=>handleChange(e)} />

        <label htmlFor=''>Genre</label>
        <input type='text' name='genre' value={formData.genre}  onChange={(e)=>handleChange(e)}/>

        <label htmlFor=''>Price(ETH)</label>
        <input type='number' name='price' value={formData.price}  onChange={(e)=>handleChange(e)}/>

        <label htmlFor=''>Cover</label>
        <input type='file' name='image' accept='image/*' onChange={(e)=>handleImageChange(e)}/>

        <button onClick={handlePublish}>Publish</button>
    </div>
  )
}

export default WritersPage