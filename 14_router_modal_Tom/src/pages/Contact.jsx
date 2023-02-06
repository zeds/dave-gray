import React from 'react'
import { useForm } from "react-hook-form"
import { schema } from "./ContactSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import style from './Contact.module.css'

export const Contact = () => {
	
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)} >
        {/* Username */}
        <section>
          <label>Enter username</label>
          <input type='text' placeholder='username' {...register("username")} />
          <span>{errors.username?.message}</span>
        </section>
        {/* Email */}
        <section>
          <label htmlFor='email' >Enter email</label>
          <input id='email' type='text' placeholder='email' {...register("email")} />
          <span>{errors.email?.message}</span>
        </section>
        {/* Age */}
        <section>
          <label>Enter age</label>
          <input type='number' placeholder='age' {...register("age")} />
          <span>{errors.age?.message}</span>
        </section>
        {/* Submit button */}
        <section>
          <input type='submit' />
        </section>
      </form>
    </div>
  );
}
