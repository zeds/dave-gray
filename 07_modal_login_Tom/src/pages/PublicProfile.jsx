import React, { useState, useEffect } from 'react'
import style from './PublicProfile.module.scss'
import { useUpdateUserMutation } from '../features/users/usersApiSlice'
import { ImageUploader } from '../components/ImageUploader'

// props
export const PublicProfile = ({ props }) => {
    const [background, setBackground] = useState('/src/assets/surf-small.jpg')
    const [avatar, setAvatar] = useState('/src/assets/default_avatar.svg')
    const [isEdit, setIsEdit] = useState(false)

    const [username, setUsername] = useState(props.username)
    const [email, setEmail] = useState(props.email)
    const [hitokoto, setHitokoto] = useState(props.hitokoto)

		useEffect(() => {
			if (props.avatar_url) {
				console.log("avatar_url=", props.avatar_url)
				setAvatar('https://lusty.asia:1443' + props.avatar_url)
			}
		}, []) // []をつけると1度しか呼び出されない

    const changeEdit = (stat) => {
        setIsEdit(stat)
    }

    //更新API
    const [updateUser] = useUpdateUserMutation()

    const clickSave = () => {
        let body = {
            hitokoto: hitokoto,
        }
        updateUser({ id: 59, body })
    }

		const parentFunction = (e) => {
			console.log('e=', e)
			console.log('ファイルがアップロードされました')
			fetchPost()
	}


    return (
        <>
            <div className={style.container}>
                {background ? <img src={background} /> : null}
                <div className={style.card}>
                    <div className={style.avatar}>
                        <img src={avatar} />
                    </div>
										<ImageUploader callBackFromChild={parentFunction} movieId={1} />

                    <p>{props.username}</p>
                    {!isEdit ? (
                        <button onClick={() => changeEdit(true)}>Edit profile</button>
                    ) : null}
                    <p className={style.email}>
                        <img src={props.icEmail} />
                        {props.email}
                    </p>
                    <p>{props.birthday}</p>
                    <p className={style.hitokoto}>
                        <img src={props.icSpeech} />
                        {props.hitokoto}
                    </p>
                    <p className={style.calendar}>
                        <img src={props.icCalendarClock} />
                        {props.expires}
                    </p>
                    {isEdit ? (
                        <div>
                            <p>username</p>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <p>email</p>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p>hitokoto</p>
                            <input
                                type="text"
                                value={hitokoto}
                                onChange={(e) => setHitokoto(e.target.value)}
                            />
                            <button onClick={() => clickSave()}>save</button>
                            <button onClick={() => changeEdit(false)}>cancel</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
