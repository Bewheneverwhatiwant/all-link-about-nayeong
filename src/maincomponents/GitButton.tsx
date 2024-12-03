import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import CustomRow from "../components/CustomRow";
import StyledImg from "../components/StyledImg";
import GitImg from '../assets/img_GitButton.png';
import CustomColumn from "../components/CustomColumn";
import GitIcon from "../components/LottieGitIcon";

function GitButton() {

	const GoGit = () => {
		window.location.href = 'https://github.com/Bewheneverwhatiwant';
	};

	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoGit}>
			<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomRow $width="100%" $alignitems="center" $justifycontent="space-between">
					<StyledImg src={GitImg} $width="50%" $height="auto" $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
					<CustomColumn $width="50%" $height="auto" $alignitems="center" $justifycontent="center">

						<CustomBox $width="50%" $height="auto" $alignitems="center" $justifycontent="center"
							$backgroundcolor="transparent" $overflowy="hidden">
							<GitIcon />
						</CustomBox>
						<CustomFont $color='black' $font='0.8rem' $fontweight="bold">Github 프로필 보기</CustomFont>
					</CustomColumn>
				</CustomRow>
			</CustomBox>
		</CustomButton>
	)
}

export default GitButton
