import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"

function FreeButton() {

	const GoFree = () => {
		window.location.href = 'https://free-leenayeong.vercel.app/';
	};


	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoFree}>
			<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomFont $color='black' $font='0.8rem'>(가볍고 자유로운) 자기소개 보기</CustomFont>
			</CustomBox>
		</CustomButton>
	)
}

export default FreeButton
