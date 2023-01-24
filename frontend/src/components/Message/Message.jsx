import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"

function Message() {

    const [users, setUsers] = useState([]);
    const [state, setState] = useState({
        name: "",
        surname: "",
        subject: "",
        email: "",
        message: ""
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginFormSchema),
    });


    const getData = async () => {
        const res = await axios.get("http://localhost:8080/users");
        setUsers(res.data);
        console.log(res.data)
    };

    useEffect(() => {
        getData();
    }, []);


    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value,
            [e.target.surname]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.subject]: e.target.value,
            [e.target.comment]: e.target.value
        });

    };


    const formSubmit = (data) => {
        console.log(data);
        data.preventDefault();
        axios.post("http://localhost:8080/users", state);
        getData();
        setState(
            {
                name: "",
                surname: "",
                email: "",
                subject: "",
                message: ""
            }
        )
    };

    return (
        <section className='message'>
            <div className="container">
                <div className="wrapper_message">
                    <form onSubmit={handleSubmit(formSubmit)} >
                        <h1>Message Us</h1>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        <input
                            type="text"
                            placeholder='First Name'
                            {...register("name")}
                            value={state.name}
                            onChange={handleChange}
                            name="name"
                            id="name" />
                        {errors.name ? (
                            <span style={{ color: "red" }}>{errors.name.message}</span>
                        ) : (
                            <></>
                        )}

                        <input
                            type="text"
                            placeholder='Last Name'
                            {...register("surname")}
                            value={state.surname}
                            name="surname"
                            onChange={handleChange}
                            id="surname" />
                        {errors.surname ? (
                            <span style={{ color: "red" }}>{errors.surname.message}</span>
                        ) : (
                            <></>
                        )}
                        <input
                            type="text"
                            placeholder='Subject'
                            {...register("subject")}
                            value={state.subject}
                            name="subject"
                            onChange={handleChange}
                            id="subject" />
                        {errors.subject ? (
                            <span style={{ color: "red" }}>{errors.subject.message}</span>
                        ) : (
                            <></>
                        )}

                        <input
                            type="text"
                            placeholder='Email'
                            {...register("email")}
                            value={state.email}
                            name="email"
                            onChange={handleChange}
                            id="email" />
                        {errors.email ? (
                            <span style={{ color: "red" }}>{errors.email.message}</span>
                        ) : (
                            <></>
                        )}
                        <textarea value={state.comment} name="" id="" cols="30" rows="10" placeholder='Write your message here.'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Message