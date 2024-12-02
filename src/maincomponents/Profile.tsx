import CustomFont from "../components/CustomFont"
import CustomColumn from "../components/CustomColumn"
import Animation from "../components/LottieFish"

function Profile() {

	return (
		<CustomColumn $width="100%" $alignitems="center" $justifycontent="center" $gap='1rem'>
			<Animation />
			<CustomFont $color='black' $font='1rem' $fontweight='bold'>hello world.</CustomFont>
		</CustomColumn>
	)
}

export default Profile
