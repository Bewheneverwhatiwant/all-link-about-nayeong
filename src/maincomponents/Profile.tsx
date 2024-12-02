import CustomRow from "../components/CustomRow"
import CustomFont from "../components/CustomFont"

function Profile() {

	return (
		<CustomRow $width='100%' $alignitems='center' $justifycontent='center'>
			<CustomFont $color='black' $font='1rem' $fontweight='bold'>hello world.</CustomFont>
		</CustomRow>
	)
}

export default Profile
