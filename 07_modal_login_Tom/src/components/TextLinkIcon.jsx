import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'
import style from './TextLinkIcon.module.css'

/*
・linkがnullの場合、iconと、テキストのみ表示します。

**/


export const TextLinkIcon = ({
  iconify,	// "mdi:company"
  link,	// "/company"
	children
}) => {
  const dispatch = useDispatch()


  function clickLink() {
    dispatch(openModal({name:'menu',open:false}))
  }

  return (
    <li>
      <p className={style.p}><Icon icon={iconify} width="30" color="white" />
				{link ? <Link onClick={()=>clickLink()} to={link}>{children}</Link>
				: <div>{children}</div>}
      </p>
    </li>
  )
}

export default TextLinkIcon