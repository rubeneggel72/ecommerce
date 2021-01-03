import React from 'react'
import useWishContext from "../context/UseWishContext"
import { Link } from 'react-router-dom'
const WishIcon = () => {
	const { wish } = useWishContext()
	if (wish.length <= 1) {
		return (
			<Link to='/wishfilter'>
				<div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-2 clearfix header-ctn">
					<div>
						<i className="fa fa-heart-o "></i>
						<span>Me gusta</span>
					</div>
				</div>
			</Link>
		)
	}
	else {
		return (
			<Link to='/wishfilter' >

				<div className="col-4 col-sm-3 col-md-2 col-lg-1 col-xl-2 clearfix header-ctn ">
					<div>
						<i className="fa fa-heart "></i>
						<span>Me gusta</span>
						<div className="qty">{wish.length - 1}</div>
					</div>
				</div>
			</Link>
		)
	}
}
export default WishIcon

