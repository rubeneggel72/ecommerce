import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Logo-4.png';
import CartIcon from '../components/CardIcon'
import WishIcon from '../components/WishIcon'
const BarNav = () => {
	return (
		<div id="header">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-5 col-lg-6 col-xl-8 clearfix header-ctn">
						<Link to='/'>
							<div >
								<img className="logo" src={logo} alt="" />
							</div>
						</Link>
					</div>
					<WishIcon />
					<CartIcon />
				</div>
			</div>
		</div>
	)
}
export default BarNav;
