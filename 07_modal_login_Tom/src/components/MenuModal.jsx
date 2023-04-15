import React from 'react'
import { useDispatch } from 'react-redux'
import style from './MenuModal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { Icon } from '@iconify/react'
import TextLinkIcon from './TextLinkIcon'

export const MenuModal = () => {
  const dispatch = useDispatch()

  function clickClose() {
    dispatch(openModal({ name: 'menu', open: false }))
  }

  return (
    <div
      onClick={(event) => {
        clickClose(event)
      }}
      className={style.container}
    >
      <div
        onClick={(event) => {
          event.stopPropagation()
        }}
        className={style.menu}
      >
        <a className={style.btn} onClick={() => clickClose()}>
          <Icon icon="mdi:close-box-outline" width="50" />
        </a>
        <TextLinkIcon
          iconify="ic:round-mail-outline"
          link="/shopping"
        >お買い物</TextLinkIcon>
        <TextLinkIcon
          iconify="ic:round-mail-outline"
          link="/admin"
					>管理画面</TextLinkIcon>
        <TextLinkIcon iconify="mdi:company" link="/company" >会社概要</TextLinkIcon>
        <TextLinkIcon
          iconify="ic:round-mail-outline"
          link="/contact"
				>お問い合わせ</TextLinkIcon>
        <div>
          <ul></ul>
        </div>
      </div>
    </div>
  )
}

export default MenuModal
