import React from "react"

export default function Header(){
   return(
		<div>
			<header className='nav'>
				<nav >
					<img alt='logo' className='logo' src='./logo192.png' />
				</nav>
				<ul className='nav-items'>
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>						
			</header>
		</div>
	)
}