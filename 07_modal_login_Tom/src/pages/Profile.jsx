import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import jwt_decode from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentUser,
  selectCurrentToken,
} from '../features/auth/authSlice'
import { selectLoginUser } from '../features/users/usersApiSlice'

import style from './Profile.module.scss'
import { PublicProfile } from './PublicProfile'
import {
  useGetMeQuery,
} from '../features/users/usersApiSlice'
import { ImageUploader } from '../components/ImageUploader'
import TextLinkIcon from '../components/TextLinkIcon'



/**
機能要件
・開いた時に、users APIを呼び出して最新の情報を取得する。
・APIを呼び出す時には、JWTを使う。/api/users/me
🔥・ユーザー情報を取得して、PublicProfileに渡す
🔥ログアウトボタン
・useStateで、コンポーネントの中での変数の値を保持、更新する
・too many renderの例題、学習が必要
  https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number
🔥profile画面と、user一覧画面を同時に開いているとき
　profileで名前が変更されたら、user一覧画面にも反映される必要がある。
  profileと、ユーザー一覧を開いている場合、両方ともに、stateを見る
  profileを開いた時に、APIを呼び出して新しい情報を取得したらstateを更新
  ユーザー一覧も自動的に表示が更新されるハズ！？
・エラー：Cannot update a component (`Profile`) while rendering a different component (`Profile`)

❌<button onClick={setCounter(counter + 1)}>Increment</button>
⭕️<button onClick={() => setCounter(counter + 1)}>Increment</button>

[テスト]
・loginしたら、state.user, state.jwtが更新されている

[useState]
  https://beta.reactjs.org/reference/react/useState
・❌const [email,setEmail] = useState('') ⭕️const emailRed = useRef()
  inputで、emailに入力された値を常時再描画する必要はない。useRefで結果のみ取得できればいいので。
・❌setCount(count+1) ⭕️setCount(prevState => prevState + 1)
✅Top 6 React Hook Mistake
  https://www.youtube.com/watch?v=GGo3MVBFr1A
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
・render内で
  <button onClick={handleHoge()}>HOGEButton</button>
  と描くと、無限ループになる。
  <button onClick={() => handleHoge()}>HOGEButton</button>
	のようにアロー関数で書く
	https://qiita.com/TK_WebSE/items/0602c90b81bea741f15c

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
・ユーザーの画像などが変更された時に、ユーザー情報の再読み込みはどうやればいい？

 */

export const Profile = () => {
  const [background, setBackground] = useState('/src/assets/surf-small.jpg')
  const [avatar, setAvatar] = useState('/src/assets/default_avatar.svg')
  const [userId, setUserId] = useState(0)

  const dispatch = useDispatch()

  let user = useSelector(selectCurrentUser)
  let token = useSelector(selectCurrentToken)
  let loginUser = useSelector(selectLoginUser)
  console.log('loginUser=', loginUser)

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name'])
  const [open, setOpen] = useState(false)

  let obj = {
    hitokoto: '',
    username: '',
    email: '',
    description: '',
    lang_code: '',
    lang_main: '',
    role_linkstaff: '',
    avatar_url: '/src/assets/default_avatar.svg',
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


    //TODO:cookieのuserも更新した方がいい
    obj = response

    if (open === false) {
      setUserId(response.id)
      setOpen(true)
      if (obj.avatar_url){
        setAvatar('https://lusty.asia:1443' + obj.avatar_url)
      }
    }
  }

  if (isError) {
    return <>API呼び出しで失敗しました</>
  }

  const parentFunction = (ret) => {
    console.log('ファイルがアップロードされました')
    alert(JSON.stringify(ret))
    let image_url = ret.data.avatar_url
    console.log('ret url =', image_url)
    setAvatar('https://lusty.asia:1443' + image_url)

    //fetchPost()
  }


  return (
    <>
      <div className={open ? style.isOpen : style.isClose}>

        <div className={style.container}>
          {background ? <img src={background} /> : null}
          <div className={style.card}>
            <div className={style.avatar}>
              <img src={avatar} />
            </div>
            <div className={style.camera}>
              <ImageUploader callBackFromChild={parentFunction} userId={userId} />
            </div>
            <br></br>
						<TextLinkIcon  iconify="mdi:company">{obj.hitokoto}</TextLinkIcon>
						<TextLinkIcon  iconify="mdi:company">{obj.username}</TextLinkIcon>

            <Icon icon={'material-symbols:alternate-email-rounded'} width="30" color="white" >あいうえお</Icon>
            <span>あいうえお</span>
						<TextLinkIcon  iconify="mdi:company">こどもだよ</TextLinkIcon>

            <p>{obj.email}</p>
            <p>{obj.description}</p>
            <p>{obj.lang_code}</p>
            <p>{obj.lang_main}</p>
            <p>{obj.role_linkstaff}</p>
          </div>
        </div>
      </div>
    </>
  )
}
