import React from 'react'
import { useForm } from "react-hook-form"
import { schema } from "./ContactSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import style from './Contact.module.css'
// import style from './Contact.module2.css'

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
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} >
        {/* Username */}
        <section>
          <label>お名前</label>
          <div>
            <input type='text' placeholder='お名前' {...register("username")} />
            <span>{errors.username?.message}</span>
          </div>
        </section>
        {/* Email */}
        <section>
          <label htmlFor='email' >メールアドレス　※必須</label>
          <div>
          <input id='email' type='text' placeholder='メールアドレス' {...register("email")} />
          </div>
          <label htmlFor='email1' >※確認のため、もう一度入力してください</label>
          <div>
          <input id='email1' type='text' placeholder='もう一度入力してください' {...register("email")} />
          <span>{errors.email?.message}</span>
          </div>
        </section>
        {/* Age */}
        <section>
          <label>電話番号　※必須</label>
          <input type='text' placeholder='電話番号' {...register("age")} />
          <span>{errors.message}</span>
        </section>
        <section>
          <label>問い合わせ内容</label>
          <textarea className={style.text} type='text'  />
          <span>{errors.message}</span>
        </section>
        {/* Submit button */}
        <section>
          <input type='submit' />
        </section>
      </form>
    </div>
  );
}
