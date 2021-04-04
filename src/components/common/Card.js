import React from 'react';
import styled from 'styled-components';

const CardLayout = styled.div`
	width: 100%;
	height: 100%;
	min-width:297px;
	box-shadow: 0 5px 7px -1px gray;
	padding: 1.5rem;
`;
const CardHeader = styled.header`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:space-between;
`;
const CardHeaderLeft = styled.div`
	padding: 5px 0;
`; 

const UserName = styled.span`
	font-size:1.5rem;
	font-weight:600;
`;
const CardHeaderRight = styled.div`
	display:flex;
	flex-direction:column;
	align-items:flex-end;
`;
const CommonText = styled.span`
	font-size:0.625rem;
	color:rgba(132,127,127,1);
	font-weight:500;
	line-height:1rem;
`;
const MoneyText = styled.span`
	font-size:0.875rem;
	font-weight:700;
`;

const SectionPosition = styled.section`
	margin: 1rem 0;
`

const InfomationTitle = styled.div`
	border-bottom: 1px solid rgba(196, 196, 196, 1);
`;
const InfomationRow = styled.div`
	width:100%;
	display:flex;
	justify-content:space-between;
	margin: 6px 0;
`;
const InfomationMain = styled(CommonText)`
	display:block;
	width:69px;
	color: rgba(60, 47, 242, 1);
	font-weight:700;
`;
const InfomationRight = styled(CommonText)`
	width:45px;
`;
const InfomationMiddle = styled(CommonText)`
	flex:1;
`; 
const ButtonPosition = styled.div`
	margin-top:2rem;
	width:100%;
`;
const Button = styled.button`
	width:100%;
	height: 2.5rem;
	font-size: 1rem;
	color: rgba(60, 47, 242, 1);
	border: 1px solid rgba(60, 47, 242, 1);
	border-radius:20px;
    background-color:rgba(255,255,255,0);
	outline: none;
	cursor:pointer;
	&:hover{
		background-color:rgba(60, 47, 242, 1);
		color: white;

	}
`
const Card = (props) => {
	const { idx, info, openModal } = props;
	console.log(info);
	const univ = ['', '경희', '한양', '서울', '고려', '연세', '국민', '명지', '동양', '부산', '경북', '전북', '전남', '강원'];
	return (
		<CardLayout>
			<CardHeader>
				<CardHeaderLeft>
					<UserName>{info.name} </UserName>
					<span>님</span>
				</CardHeaderLeft>
				<CardHeaderRight>
					<CommonText>최대 출자 가능액</CommonText>
					<MoneyText>2,000만원</MoneyText>
				</CardHeaderRight>
			</CardHeader>
			<SectionPosition>
				<InfomationTitle>
					<CommonText>학력</CommonText>
				</InfomationTitle>
				<InfomationRow>
					<InfomationMain>
						경희대학교
					</InfomationMain>
					<InfomationMiddle>
						컴퓨터공학과
					</InfomationMiddle>
					<InfomationRight>
						학사
					</InfomationRight>
				</InfomationRow>
			</SectionPosition>

			<SectionPosition>
				<InfomationTitle>
					<CommonText>경력</CommonText>
				</InfomationTitle>

				<InfomationRow>
					<InfomationMain>
						자동차
					</InfomationMain>
					<InfomationMiddle>
						현대자동차
					</InfomationMiddle>
					<InfomationMiddle>
						UX
					</InfomationMiddle>
					<InfomationRight>
						24개월
					</InfomationRight>
				</InfomationRow>

				<InfomationRow>
					<InfomationMain>
						자동차
					</InfomationMain>
					<InfomationMiddle>
						현대자동차
					</InfomationMiddle>
					<InfomationMiddle>
						UX
					</InfomationMiddle>
					<InfomationRight>
						24개월
					</InfomationRight>
				</InfomationRow>
			</SectionPosition>



			<ButtonPosition>
				<Button onClick={() => openModal({ idx, info })}>문의하기</Button>
			</ButtonPosition>
		</CardLayout>
	);
};

export default Card;
