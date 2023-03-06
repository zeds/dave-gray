import React from 'react'
import { useForm } from 'react-hook-form'
import { schema } from './ContactSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import style from './Contact.module.css'

export const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)} >
        {/* お名前 */}
        <section>
          <label htmlFor='onamae'>お名前</label>
          <div>
            <input type='text' id='onamae' placeholder='お名前' {...register('onamae')} />
            <span>{errors.onamae?.message}</span>
          </div>
        </section>
        {/* Username */}
        <section>
          <label htmlFor='username'>Enter username</label>
          <div>
            <input type='text' id='username' placeholder='username' {...register('username')} />
            <span>{errors.username?.message}</span>
          </div>
        </section>
        {/* Email */}
        <section>
          <label htmlFor='email' >Enter email</label>
          <div>
            <input id='email' type='text' placeholder='email' {...register('email')} />
            <span>{errors.email?.message}</span>
          </div>
        </section>
        {/* お問い合わせ内容 */}
        <label htmlFor='otoiawase' >お問い合わせ内容</label>
        <div className={style.otoiawase}>
          <textarea id='otoiawase' {...register('otoiawase')} />
          <p>{errors.otoiawase?.message}</p>
        </div>
        {/* Submit button */}
        <section>
          <input type='submit' />
        </section>
      </form>
    </div>
  )
}
