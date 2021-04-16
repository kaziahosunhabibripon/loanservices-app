import React from 'react';
import all from '../../../images/slider2.jpg';
const Process = () => {
    return (
        <section className="feature-service m-0 p-0">
            <div className="row m-0 p-0">
                <div className="col-md-5">
                    <img className="img-fluid pl-2 pt-5" src={all} alt="" />
                </div>
                <div className="col-md-6 align-self-center pl-2 pt-5">
                    <h1>Exceptional Fast Easy Application Process, and Relabel Team Members</h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit doloremque adipisci nesciunt neque repellat perferendis expedita, laboriosam ipsa deleniti, facere quaerat molestiae vitae eius. Dolores vero at voluptatibus suscipit corrupti praesentium deserunt veritatis vitae quasi expedita necessitatibus quam provident, hic accusantium nobis libero dignissimos est et officiis harum amet.
                        </p>
                    <button className="btn btn-danger">
                        Learn More
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Process;