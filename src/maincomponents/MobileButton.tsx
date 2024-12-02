import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import Mobile from '../assets/img_Mobile.png';
import CustomRow from "../components/CustomRow";
import StyledImg from "../components/StyledImg";
import CustomColumn from "../components/CustomColumn";

function MobileButton() {

	const GoMobile = () => {
		window.location.href = 'https://mobile-leenayeong.vercel.app/';
	};

	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoMobile}>
			<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomRow $width="100%" $height="auto" $alignitems="center" $justifycontent="space-between">
					<StyledImg src={Mobile} $width="50%" $height='auto' $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
					<CustomColumn $width="50%" $height='auto' $alignitems="center" $justifycontent="center">
						<CustomFont $color='black' $font='0.8rem' $fontweight="bold">모바일 포트폴리오 보기</CustomFont>
					</CustomColumn>
				</CustomRow>
			</CustomBox>
		</CustomButton>
	)
}

export default MobileButton
