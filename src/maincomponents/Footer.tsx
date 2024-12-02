import CustomBox from "../components/CustomBox"
import StyledImg from "../components/StyledImg"
import FooterImg from '../assets/FooterMemo.svg';

function Footer() {

	return (
		<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0' $alignitems='center' $justifycontent='center'
			$backgroundcolor='transparent' $gap='0.5rem'>
			<StyledImg src={FooterImg} $width="100%" $height="auto" />
		</CustomBox>
	)
}

export default Footer
