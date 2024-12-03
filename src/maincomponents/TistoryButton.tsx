import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import TistoryImg from '../assets/img_Tistory.png';
import CustomRow from "../components/CustomRow";
import StyledImg from "../components/StyledImg";
import CustomColumn from "../components/CustomColumn";
import LottieHTML from "../components/LottieHTML";

function TistoryButton() {

	const GoTistory = () => {
		window.location.href = 'https://lny021102.tistory.com/';
	};

	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoTistory}>
			<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomRow $width="100%" $height="auto" $alignitems="center" $justifycontent="space-between">
					<CustomColumn $width="50%" $height="auto" $alignitems="center" $justifycontent="center">
						<CustomBox $width="100%" $height="auto" $alignitems="center" $justifycontent="center"
							$backgroundcolor="transparent" $overflowy="hidden">
							<LottieHTML />
						</CustomBox>

						<CustomFont $color='black' $font='0.8rem' $fontweight="bold">소프트웨어 고민 엿보기</CustomFont>
					</CustomColumn>
					<StyledImg src={TistoryImg} $width="50%" $height="auto" $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
				</CustomRow>
			</CustomBox>
		</CustomButton>
	)
}

export default TistoryButton
