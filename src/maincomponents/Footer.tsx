import CustomBox from "../components/CustomBox"
import CustomColumn from "../components/CustomColumn";
import CustomFont from "../components/CustomFont";
import CustomRow from "../components/CustomRow";

function Footer() {

	return (
		<CustomBox $flexdirection="column" $width='100%' $height='auto' $padding='1rem' $borderradius='0' $alignitems='center' $justifycontent='center'
			$backgroundcolor='black' $gap='1.5rem'>

			<CustomRow $width="100%" $height="auto" $alignitems="center" $justifycontent="center">
				<CustomColumn $width="50%" $height="auto" $alignitems="flex-end" $justifycontent="flex-start" $gap='0.5rem'>
					<CustomFont $color='white' $font="0.8rem">plan</CustomFont>
					<CustomFont $color='white' $font="0.8rem">design</CustomFont>
					<CustomFont $color='white' $font="0.8rem">programming</CustomFont>
					<CustomFont $color='white' $font="0.8rem">manage</CustomFont>
				</CustomColumn>

				<CustomColumn $width="50%" $height="auto" $alignitems="flex-start" $justifycontent="flex-start" $gap='0.5rem'>
					<CustomFont $color='white' $font="0.8rem">nayeong</CustomFont>
					<CustomFont $color='white' $font="0.8rem">nayeong</CustomFont>
					<CustomFont $color='white' $font="0.8rem">nayeong</CustomFont>
					<CustomFont $color='white' $font="0.8rem">nayeong</CustomFont>
				</CustomColumn>
			</CustomRow>

			<CustomFont $color='white' $font="1rem" $fontweight="bold">Continue.</CustomFont>
		</CustomBox>
	)
}

export default Footer
