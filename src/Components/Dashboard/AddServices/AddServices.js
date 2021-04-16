import React, { useState } from 'react';
import './AddServices.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.title,
            description: data.description,
            imageUrl: imageUrl
        };
        const url =` http://localhost:5000/addService`;
      
        fetch(url,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(eventData)
        })
        .then(res =>console.log("server sides response",res))
        
    };
    const handleImageUpload= (event)=>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '741942c124600179153ce48ab6bb9b81');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>    
                <input name="title" {...register("title")}  placeholder="Service Title..."/>
                {errors.name && <span className="text-danger">This field is required</span>}
                <br/>
                <input name="description" {...register("description", { required: true })} placeholder="Description......" />
                {errors.description && <span className="text-danger">This field is required</span>}
                <br/>
                <input name="image" type="file" onChange={handleImageUpload} />
                {errors.image && <span className="text-danger">This field is required</span>}
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;