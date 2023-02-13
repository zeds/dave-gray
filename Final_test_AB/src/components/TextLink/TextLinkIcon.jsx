import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice'
import style from './TextLinkIcon.module.css'

export const TextLinkIcon = ({
	iconify,	// "mdi:company"
	text,	// "会社概要"
	link	// "/company"
}) => {
	const dispatch = useDispatch();

	function clickLink() {
		dispatch(openModal({name:'menu',open:false}))
	}

	return (
		<li>
			<p className={style.p}><Icon icon={iconify} width="30" color="white" />
				<Link onClick={()=>clickLink()} to={link}>{text}</Link>
			</p>
		</li>
	)
}

export default TextLinkIcon