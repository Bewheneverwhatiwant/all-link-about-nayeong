import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"

function TistoryButton() {

	const GoTistory = () => {
		window.location.href = 'https://lny021102.tistory.com/';
	};

	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoTistory}>
			<CustomBox $width='100%' $height='auto' $padding='1rem' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomFont $color='black' $font='0.8rem'>나영이의 고민 엿보기</CustomFont>
			</CustomBox>
		</CustomButton>
	)
}

export default TistoryButton
