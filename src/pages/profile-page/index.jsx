import Header from './components/header'
import NavPanel from './components/nav-panel'
import Chats from './components/chats'
import Screen from './components/screens'
import { useState } from 'react'

function Index() {
	const [userScreen, setUserScreen] = useState('profile')

	return (
		<section className='w-[100vw] pb-[80px] px-[50px] relative top-[-34px]'>
			<div className='w-[100%] relative top-[70px]'>
				<Header setUserScreen={setUserScreen} userScreen={userScreen} className='' />
			</div>
			<div className='flex gap-0'>
				<NavPanel setUserScreen={setUserScreen} userScreen={userScreen} />
				<Screen userScreen={userScreen} />
			</div>
			<div className='fixed bottom-0 right-16 z-10'>
				<Chats />
			</div>
		</section>
	)
}

export default Index
