import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
    <header>
			<div class="max-width">
				<h1>
					<a href="./">
						<img src="./assets/Logo.svg" alt="My Blo2g" /> 
					</a>
				</h1>
				<ul>
					<li class="profile-img">
						<a href="#">
							<img src="./assets/profile.jpg" alt="My Page" />
						</a>
					</li>
					<li>
						<a href="#" class="button">
							<img src="./assets/icon-modify-white.svg" alt="" />
							<span>Write</span>
						</a>
					</li>
					<li>
						<button class="button white">
							<img src="./assets/icon-logout.svg" alt="" />
							<span>Logout</span>
						</button>
					</li>
                    </ul>
			</div>
		</header>
        </>
  )
}

export default Header