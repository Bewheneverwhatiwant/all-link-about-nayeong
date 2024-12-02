import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import OddImg from '../assets/img_Odd.png';
import StyledImg from "../components/StyledImg";
import CustomRow from "../components/CustomRow";
import CustomColumn from "../components/CustomColumn";

function OddButton() {

	const GoOdd = () => {
		window.location.href = 'https://odd-nayeong.vercel.app/';
	}

	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoOdd}>
			<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomRow $width='100%' $height='auto' $alignitems="center" $justifycontent="space-between">
					<CustomColumn $width="50%" $height="auto" $alignitems="center" $justifycontent="center" $gap='0.5rem'>
						<CustomFont $color='red' $font='0.8rem' $fontweight="bold">♞🙿🙿🙿🙿🙿🙿🙿</CustomFont>
						<CustomFont $color='red' $font='0.8rem' $fontweight="bold">『이상한 나라의 나영이』</CustomFont>
						<CustomFont $color='red' $font='0.8rem' $fontweight="bold">🙾🙾🙾🙾🙾🙾🙾♜</CustomFont>
					</CustomColumn>
					<StyledImg src={OddImg} $width="50%" $height='auto' $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
				</CustomRow>
			</CustomBox>
		</CustomButton>
	)
}

export default OddButton