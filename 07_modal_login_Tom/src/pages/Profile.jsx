import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectCurrentUser,
    selectCurrentToken,
} from '../features/auth/authSlice'
import { setCredentials, logOut } from '../features/auth/authSlice'

import { Link } from 'react-router-dom'
import style from './Profile.module.scss'
import { PublicProfile } from './PublicProfile'
import {
    useGetMoviesQuery,
    useGetMeQuery,
} from '../features/users/usersApiSlice'

/**
・開いた時に、users APIを呼び出して最新の情報を取得する。
・APIを呼び出す時には、JWTを使う。/api/users/me
・ログアウトボタン
・useStateで、コンポーネントの中での変数の値を保持、更新する
・too many renderの例題
　https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number
・profileと、ユーザー一覧を開いている場合、両方ともに、stateを見る
　profileを開いた時に、APIを呼び出して新しい情報を取得したらstateを更新
　ユーザー一覧も自動的に表示が更新されるハズ！？
・エラー：Cannot update a component (`Profile`) while rendering a different component (`Profile`)

❌<button onClick={setCounter(counter + 1)}>Increment</button>
⭕️<button onClick={() => setCounter(counter + 1)}>Increment</button>

[テスト]
・loginしたら、state.user, state.jwtが更新されている
・

[useState]
　https://beta.reactjs.org/reference/react/useState
・In Strict Mode, React will call your initializer function twice
　This is development-only behavior and does not affect production.
・set function only updates the state variable for the next render
・If you read the state variable after calling the set function, you will still get the old value
・If the new value you provide is identical to the current state, as determined by an Object.is comparison,
　React will skip re-rendering the component and its children.
✅useStateの注意点
　https://tyotto-good.com/react/usestate-pitfalls
・useStateはトップレベルで呼び出す。条件分岐内で呼び出してはいけない。Reactがhookの順序がわからなくなってしまう。
・Hooksのルールを強制できる、eslint-plugin-react-hooks
　https://www.npmjs.com/package/eslint-plugin-react-hooks
　　

[RTK query]
　https://redux-toolkit.js.org/rtk-query/usage/queries
・isSuccessが2回呼ばれる？
　原因：index.jsxに<React.StrictMode>を設定しているため。
・openというstateを作り、buttonでtrue/falseを設定すると、useEffectも反応して
　APIが呼び出されてしまった。なぜ？？ただし、strapiのAPIは呼び出されていなかった。
　cachingだけ見ているようだ。
　https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl


・RTK queryを使うと、isLoading、isSuccessなどのstate管理をしなくて済む
・caching：なぜcachingが必要か？
　データーを2回目にダウンロードするとき、updateされてる時だけにしたい。
　

 */

export const Profile = () => {
    const dispatch = useDispatch()
    const [isAvatar, setIsAvatar] = useState(false)

    let user = useSelector(selectCurrentUser)
    let token = useSelector(selectCurrentToken)
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name'])
    const [open, setOpen] = useState(false)

    const obj = {
        background: '/src/assets/surf-small.jpg',
        avatar: 'https://lusty.asia:1443/uploads/_19202a6421.jpeg',
        username: 'tom',
        email: 'tom@gmail.com',
        birthday: '',
        hitokoto: 'フルスタックエンジニアです！',
        expires: '2023/03/20 18:23:20',
        icEmail: '/src/assets/icons/email.svg',
        icSpeech: '/src/assets/icons/speech.svg',
        icCalendarClock: '/src/assets/icons/calendar-clock.svg',
    }

    const {
        data: response,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
    } = useGetMeQuery(cookies.jwt)
    //} = useGetMoviesQuery();

    if (isLoading) {
        console.log('isLoading')
        return <div>Loading...</div>
    }
    if (isFetching) {
        console.log('isFetching')
        return <div>Fetching...</div>
    }
    if (isError) {
        console.log({ error })
        return <div>{error.status}</div>
    }

    if (isSuccess) {
        console.log('isSuccess response=', response)
        //const payload = {
        //  user: response,
        //  jwt: cookies.jwt,
        //};
        //dispatch(setCredentials);

        obj.avatar = 'https://lusty.asia:1443' + response.avatar_url
        console.log('obj.avatar=', obj.avatar)
        //dispatch(logOut);
        if (open === false) {
            setOpen(true)
        }
    }

    if (isError) {
        return <>API呼び出しで失敗しました</>
    }

    const toggle = () => setOpen(!open)

    return (
        <>
            <button onClick={toggle}>{open ? 'close' : 'open'}</button>
            <div className={open ? style.isOpen : style.isClose}>
                <PublicProfile props={obj} />
            </div>
        </>
    )

    const welcome = user ? `Profile ${user.username}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 9)}...`

    // jwt decode
    const decoded = jwt_decode(token)
    console.log('decoded=', decoded)

    // unix timeをDateに変換
    let dateTime = new Date(decoded.exp * 1000)
    console.log('dateTime=', dateTime)

    const content = (
        <div className={style.welcome}>
            <h1>{welcome}</h1>
            <div className={style.info}>
                <p>権限：{user.role_linkstaff}</p>
                <p>Token: {tokenAbbr}</p>
                <p>jwt_decode：{JSON.stringify(decoded)}</p>
                <p>有効期限：{dateTime.toString()}</p>
                <p>ID：{user.id}</p>
                <p>Email: {user.email}</p>
                <p>username: {user.username}</p>
                <p>
                    <Link to="/userslist">Go to the Users List</Link>
                </p>
            </div>
        </div>
    )

    return content
}
