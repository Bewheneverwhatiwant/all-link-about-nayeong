import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"


function Footer() {

	return (
		<CustomBox $width='100%' $height='5rem' $padding='1rem' $borderradius='0' $alignitems='center' $justifycontent='center'
			$backgroundcolor='#666666' $gap='0.5rem'>
			<CustomFont $color='white' $font='0.8rem'>lny021102@gmail.com</CustomFont>
		</CustomBox>
	)
}

export default Footer
