import React from 'react'
import ReactDom from 'react-dom'
import HomePage from './pages/home'
import EditPage from './pages/edit'

ReactDom.render(<EditPage />, document.getElementById('app'))




// commonjs (es5) : require -> 옛날방법, node 명령어 사용가능
// esm (es6) : import -> 최신방법, 트랜스파일링, 번들링 필요
// so, 기본설정 파일들은 보통 번들링, 트랜스파일링을 거치지 않기때문에 require 방식 사용!