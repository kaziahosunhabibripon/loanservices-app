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
        const url = ` https://dry-tor-15966.herokuapp.com/addService`;

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("server sides response", res))

    };
    const handleImageUpload = (event) => {
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
        <div className="addServices p-5">
            <h4 className="text-center text-success">Add Services</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="services"> Services </label>
                <label htmlFor="upload"> Image </label>
                <input name="title" {...register("title")} placeholder="Service Title..." />
                {errors.name && <span className="text-danger">This field is required</span>}
                <input name="image" type="file" onChange={handleImageUpload} />
                {errors.image && <span className="text-danger">This field is required</span>}
                <input name="description" {...register("description", { required: true })} placeholder="Description......" />
                {errors.description && <span className="text-danger">This field is required</span>}
                <button type="submit" className="login-btn"> Submit</button>
            </form>
        </div>
    );
};

export default AddServices;