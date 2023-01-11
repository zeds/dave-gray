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

06_lesson：Built from scratch
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome
npm i json-server -g

[run json server]
$ json-server --watch data/db.json --port 3500
http://localhost:3500/todos

@reduxjs/toolkit/query/react
React ToolKit Query








