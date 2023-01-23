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


strictモード
https://ja.reactjs.org/docs/strict-mode.html
<React.StrictMode>
これを指定していると、中のコンポーネントが2度実行されます


[05_lesson]
新規POSTが、リストの最後に並んでしまう。
postsSlice.jsxの105行目付近のsortが動いていない。sortロジックをコメントアウトして動いている。
userのpostの更新が動いていない。


[06_lesson-rtk-query]
06_lesson：Built from scratch
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome
npm i json-server -g

[run json server]
$ json-server --watch data/db.json --port 3500
http://localhost:3500/todos
※Strapiに接続しているので上記は不要
[Strapi]
https://lusty.asia:1443/api/products

@reduxjs/toolkit/query/react
React ToolKit Query

[auth]
Daveの声はしわがれ声で嫌いだけど、感謝しながら聴こう^^;
https://www.youtube.com/watch?v=-JJFQ9bkUbo&list=PLldYJFgA6aTq-MvEwcD5NP1azPxAY1xgo&index=8&t=150s
・JWT
・Refresh Token

GitHub: https://github.com/gitdagray/redux_jwt_auth

npm create vite@latest .
npm i @reduxjs/toolkit
npm i react-redux
npm i react-router-dom

app/api/apiSliceを変更
Strapiのauth/localからjwt取得に成功！




[backend] 失敗！mongodbが面倒！
/Users/zebra/lesson/react/mern_stack_course/lesson_08-backend
GitHub: https://github.com/gitdagray/mern_stack_course

.envの設定
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
login時のmutationについて
https://redux-toolkit.js.org/rtk-query/usage/examples
のAuthenticationを参照
Strapiのapi/auth/localに接続して、jwtを取得まで完了

サンプル
[../JWT_Authentication_React-react_node_jwt_login]
https://codevoweb.com/react-redux-toolkit-jwt-authentication-and-authorization/

GitHub: https://github.com/wpcodevo/JWT_Authentication_React/tree/react_node_jwt_login
cd frontend
yarn install
yarn start
※ Buildはできた。


[10_layout]
npm create vite@latest .
> React
> JavaScript + SWC
npm i
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
> edit tailwind.config.cjs
> edit index.css for tailwindcss
> delete App.css
> rename main.jsx to index.jsx
> edit index.html to load index.jsx


npm run dev
https://www.youtube.com/watch?v=74ys-dT94mA&t=115s


[10_nav]
https://www.youtube.com/watch?v=amf18mxNX18


[11_tom]

npm i @reduxjs/toolkit
npm i react-redux






ー以上
