import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import CustomRow from "../components/CustomRow";
import FreeImg from '../assets/img_Free.png';
import StyledImg from "../components/StyledImg";
import CustomColumn from "../components/CustomColumn";
import Toy from "../components/LottieToy";

function FreeButton() {

	const GoFree = () => {
		window.location.href = 'https://free-leenayeong.vercel.app/';
	};


	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoFree}>
			<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent="space-between">
					<StyledImg src={FreeImg} $width="50%" $height='auto' $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
					<CustomColumn $width="50%" $height='auto' $alignitems="center" $justifycontent="center" $gap='0.5rem'>

						<CustomBox $width="70%" $height="auto" $alignitems="center" $justifycontent="center"
							$backgroundcolor="transparent" $overflowy="hidden">
							<Toy />
						</CustomBox>
						<CustomFont $color='#666666' $font='0.8rem' $fontweight="bold">가볍고 자유분방한</CustomFont>
						<CustomFont $color='black' $font='0.8rem' $fontweight="bold">자기소개 읽어보기</CustomFont>
					</CustomColumn>
				</CustomRow>
			</CustomBox>
		</CustomButton>
	)
}

export default FreeButton
