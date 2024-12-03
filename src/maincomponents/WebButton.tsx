import { useState } from 'react';

import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import CustomRow from "../components/CustomRow";
import StyledImg from "../components/StyledImg";
import WebImg from '../assets/img_Web.png';
import CustomColumn from "../components/CustomColumn";
import Modal from '../components/Modal';
import Monitor from '../components/LottieMonitor';

function WebButton() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const GoWeb = () => {
		window.location.href = 'https://leenayeong.vercel.app/';
	};

	const handleShareMeClick = () => {
		const textToCopy = "https://leenayeong.vercel.app/";

		navigator.clipboard.writeText(textToCopy).then(() => {
			setIsModalOpen(true);
		}).catch((err) => {
			console.error("텍스트 복사 실패:", err);
			alert("링크 복사에 실패했어요. lny021102@gmail.com으로 오류를 알려주세요.");
		});
	};

	return (
		<>
			<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoWeb}>
				<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
					$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
					<CustomRow $width="100%" $height="auto" $alignitems="center" $justifycontent="space-between">
						<CustomColumn $width="50%" $height='auto' $alignitems="center" $justifycontent="center" $gap='0.5rem'>
							<CustomBox $width="50%" $height="auto" $alignitems="center" $justifycontent="center"
								$backgroundcolor="transparent" $overflowy="hidden">
								<Monitor />
							</CustomBox>
							<CustomFont $color='#666666' $font='0.8rem' $fontweight="bold">데스크톱 접속만 가능해요!</CustomFont>
							<CustomFont $color='black' $font='0.8rem' $fontweight="bold">웹 포트폴리오 보기</CustomFont>
						</CustomColumn>
						<StyledImg src={WebImg} $width="50%" $height='auto' $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
					</CustomRow>
				</CustomBox>
			</CustomButton>

			<CustomButton $backgroundColor='white' $padding=' 0.5rem 1rem' $width='90%' $height='auto' $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)"
				$border="1px solid #D9D9D9" onClick={handleShareMeClick}>
				<CustomFont $color="#666666" $font='0.8rem' $fontweight="bold">웹 주소 복사하기</CustomFont>
			</CustomButton>

			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</>
	)
}

export default WebButton
