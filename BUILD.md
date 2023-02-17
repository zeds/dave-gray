cd 02_lesson
npm create vite@latest .

> React
> JavaScript + SWC

※I am not sure SWC is stable or not.

npm i
npm run dev

npm i react-redux
npm i @reduxjs/toolkit
npm i date-fns
npm i axios
npm i react-router-dom
※ つかなわい？npm i react-scripts

注意！[vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
[FIX] Change PostsList.js → PostsList.jsx
(extension of js have to change to jsx!!!!)

strict モード
https://ja.reactjs.org/docs/strict-mode.html
<React.StrictMode>
これを指定していると、中のコンポーネントが 2 度実行されます

[05_lesson]
新規 POST が、リストの最後に並んでしまう。
postsSlice.jsx の 105 行目付近の sort が動いていない。sort ロジックをコメントアウトして動いている。
user の post の更新が動いていない。

[06_lesson-rtk-query]
06_lesson：Built from scratch
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome
npm i json-server -g

[run json server]
$ json-server --watch data/db.json --port 3500
http://localhost:3500/todos
※Strapi に接続しているので上記は不要
[Strapi]
https://lusty.asia:1443/api/products

@reduxjs/toolkit/query/react
React ToolKit Query

[07_modal_router_exam_Tom]
14_router_modal_Tom を参考にメニュー作成
07_modal_exam_Tom をコピー
07_modal_router_exam_Tom
これにメニューをつけていきます。

1.ライブラリインストール
npm i react-router-dom
npm i @iconify/react
npm i react-hook-form
npm i yup
npm i @hookform/resolvers
npm i sass

2.index.jsx の編集

3.App.jsx の編集
pages/Home.jsx
pages/Company.jsx
pages/Home.jsx
pages/Contact.jsx
14\_...の pages をまるごとコピー

App.css をコピー

login
user,jwtはステートとcookieに格納する
通常はステートのjwtを使うが、存在しなければcookieのjwtを使う


[backend] 失敗！mongodb が面倒！
/Users/zebra/lesson/react/mern_stack_course/lesson_08-backend
GitHub: https://github.com/gitdagray/mern_stack_course

.env の設定
https://www.youtube.com/watch?v=cUV3uYXEOxI
2:50s

mongodb
https://www.youtube.com/watch?v=cUV3uYXEOxI
5:40s
https://account.mongodb.com/account/login
database
zeds
yellow39

[09_auth]
login 時の mutation について
https://redux-toolkit.js.org/rtk-query/usage/examples
の Authentication を参照
Strapi の api/auth/local に接続して、jwt を取得まで完了

サンプル
[../JWT_Authentication_React-react_node_jwt_login]
https://codevoweb.com/react-redux-toolkit-jwt-authentication-and-authorization/

GitHub: https://github.com/wpcodevo/JWT_Authentication_React/tree/react_node_jwt_login
cd frontend
yarn install
yarn start
※ Build はできた。

[10_layout]
npm create vite@latest .

> React
> JavaScript + SWC
> npm i
> npm i -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
> edit tailwind.config.cjs
> edit index.css for tailwindcss
> delete App.css
> rename main.jsx to index.jsx
> edit index.html to load index.jsx

npm run dev
https://www.youtube.com/watch?v=74ys-dT94mA&t=115s

[10_nav]
https://www.youtube.com/watch?v=amf18mxNX18
React.Fragment ショートハンドとして、<></>：Empty Tags が使える
Syntatic sugar と呼ばれている。
しかし、大きな問題点として、Fragment では key が使えるが<>では使えない
React コンポーネントはルート要素が 1 つ(single element)でないといけないという制約がある。
google fonts：https://fonts.google.com/

[10_nav_html]
https://www.youtube.com/watch?v=VRrEquQfh88
Remixicon：https://remixicon.com/
https://github.com/Remix-Design/RemixIcon

<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
boxicons
https://github.com/atisawd/boxicons

[11_tom]
npm create vite@latest .

> React
> JavaScript + SWC
> npm i
> npm i @reduxjs/toolkit
> npm i react-redux
> npm run dev

[12_jwt_login]
npm create vite@latest .

> React
> JavaScript + SWC
> npm i
> npm i @reduxjs/toolkit
> npm i react-redux
> npm run dev
> main.jsx を index.jsx に名前変更
> index.html で index.jsx を読み込む
> index.css を削除
> index.jsx で index.css インポートを削除
> App.css はグローバルに適用される。
> LoginModal.jsx
> LoginModal.module.css
> features/modal/modalSlice.jsx
> app/store.jsx
> index.jsx に Provider を設定
> LoginModal に、ログインフォームを作成
> 　https://codepen.io/colorlib/pen/rxddKy
> 注意！style が、btn-red のようにハイフンで定義されている場合、
> 　　 className={style.['btn-red]}
> 　　とします。

login modal を作成し、Strapi にログインする。

css module in React
https://blog.openreplay.com/using-css-modules-in-react/
Saas は、npm インストールすれば使える？
global は使える？

React css で悩む全ての人へ
https://ramble.impl.co.jp/1414/#toc7

✅container をクリックしても閉じないバージョン

[13_auth]
Dave の声はしわがれ声で嫌いだけど、感謝しながら聴こう^^;
React Redux Login Authentication Flow with JWT Access, Refresh Tokens, Cookies
https://www.youtube.com/watch?v=-JJFQ9bkUbo&list=PLldYJFgA6aTq-MvEwcD5NP1azPxAY1xgo&index=8
・JWT
・Refresh Token

GitHub: https://github.com/gitdagray/redux_jwt_auth

npm create vite@latest .
npm i @reduxjs/toolkit
npm i react-redux
npm i react-router-dom

app/api/apiSlice を変更
Strapi の auth/local から jwt 取得に成功！

Credentials action を使って state に格納
state.user
state.jwt

認証が必要なページを開いた時に、cookie に格納されている

[13_auth_Tom]
ログインボタンだけ。
API を呼び出して、ログインは成功している。
✅ インスペクターで結果をチェックすること。

[router]
Web Dev Simplified
https://www.youtube.com/watch?v=SLfhMt5OUPI
npm i react-router-dom

[14_router_modal]
npm i react-router-dom
npm i @reduxjs/toolkit
npm i react-redux

burger menu sample
https://alvarotrigo.com/blog/slide-menus/

useState：https://www.youtube.com/watch?v=Fhu5cu864ag
sidebar navigation menu：https://www.youtube.com/watch?v=zQBd3hNXJgI

sass を利用する
https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/

css を操作するには、JavaScript で、css の要素を取得する必要があります。
querySelector で要素を取得しますが、React では useRef を使います
https://bobbyhadz.com/blog/react-document-queryselector

validation
https://www.copycat.dev/blog/react-hook-form/
npm i react-hook-form
npm i @hookform/resolvers yup

yup と formik とは
https://codezine.jp/article/detail/13518

メニューを実装しただけ。
ログイン、新規登録モーダルは開かない

[14_router_modal_Tom]
ログイン、新規登録モーダルを実装

[16_sort]
一覧を、名前順、価格順などでソートします。
https://www.youtube.com/watch?v=g523Bj0y36Q
npm create vite@latest .

> React
> JavaScript + SWC
> npm i

ダミー JSON 作成サイト
https://www.mockaroo.com/

First Name をクリックすると、asc:ascending、dsc:descending で
並び替えがされる。

ー以上
