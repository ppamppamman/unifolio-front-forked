import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive.js';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette.js';

const NavbarPosition = styled.div`
	position: fixed;
	width: 100%;
	height: 4rem;
	z-index: 1;
`;

const Spacer = styled.div`
	height: 4rem;
`;

const NavbarLayout = styled.div`
	height: 100%;
	background-color: ${palette.blue[0]};
	padding-left: 1rem;
	padding-right: 2rem;

	display: flex;
	justify-content: space-between;
  align-items: center;

	.logo {
	}

	.header-left {
		display: flex;
		justify-content: flex-start;

		.button {
			margin-left: 1rem;
			color: white;
		}
	}

	.header-right {
		display: flex;
		justify-content: flex-end;

		.button {
			margin-left: 1rem;
			color: white;
		}
	}
`;

const Navbar = () => {
	return (
		<>
			<NavbarPosition className="Navbar">
				<NavbarLayout>
					<div className="header-left">
						<Link to="/" className="button landing">
							로고
						</Link>
						<Link to="/finding-association" className="button home">
							조합 찾기
						</Link>
						<Link to="/association-manage" className="button manage">
							조합 관리
						</Link>
					</div>
					<div className="header-right">
						<Link to="/profile" className="button my">
							마이페이지
						</Link>
						<Link to="/signin" className="button signin">
							로그인
						</Link>
					</div>
				</NavbarLayout>
			</NavbarPosition>
			<Spacer />
		</>
	);
};

export default Navbar;
