import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"

function WebButton() {

	const GoWeb = () => {
		window.location.href = 'https://leenayeong.vercel.app/';
	};

	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoWeb}>
			<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomFont $color='black' $font='0.8rem'>(데스크톱 전용) 포트폴리오 보기</CustomFont>
			</CustomBox>
		</CustomButton>
	)
}

export default WebButton
