import CustomFont from "../components/CustomFont"
import CustomColumn from "../components/CustomColumn"
import CustomBox from "../components/CustomBox"
import Animation from "../components/LottieFish"
import Hallo from "../components/LottieHallo"

function Profile() {

	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap='1rem'>
			<Animation />
			<CustomBox $width="50%" $backgroundcolor="transparent" $borderradius="0" $padding="0">
				<Hallo />
			</CustomBox>
			<CustomFont $color='black' $font='1rem' $fontweight='bold'>나영이의 모든 공간을 가리키는 이정표.</CustomFont>
			<CustomFont $color='black' $font='0.8rem'>lny021102@gmail.com</CustomFont>
		</CustomColumn>
	)
}

export default Profile
