import CustomButton from "../components/CustomButton"
import CustomBox from "../components/CustomBox"
import CustomFont from "../components/CustomFont"
import CustomRow from "../components/CustomRow";
import BlogImg from '../assets/img_Blog.jpg';
import StyledImg from "../components/StyledImg";
import CustomColumn from "../components/CustomColumn";
import Diary from "../components/LittieDiary";

function BlogButton() {

	const GoBlog = () => {
		window.location.href = 'https://m.blog.naver.com/lny021102';
	};


	return (

		<CustomButton $backgroundColor='transparent' $padding='0' $width='90%' $height='auto' onClick={GoBlog}>
			<CustomBox $width='100%' $height='auto' $padding='0' $borderradius='0.5rem' $alignitems='flex-start' $justifycontent='center'
				$boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" $backgroundcolor='white' $gap='0.5rem'>
				<CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent="space-between">
					<StyledImg src={BlogImg} $width="50%" $height='auto' $boxshadow="0 4px 12px rgba(0, 0, 0, 0.1)" />
					<CustomColumn $width="50%" $height='auto' $alignitems="center" $justifycontent="center" $gap='0.5rem'>
						<CustomBox $width="50%" $height="auto" $alignitems="center" $justifycontent="center"
							$backgroundcolor="transparent" $overflowy="hidden">
							<Diary />
						</CustomBox>
						<CustomFont $color='#666666' $font='0.8rem' $fontweight="bold">가끔 쓰는 짧은 글</CustomFont>
						<CustomFont $color='black' $font='0.8rem' $fontweight="bold">블로그 구경하기</CustomFont>
					</CustomColumn>
				</CustomRow>
			</CustomBox>
		</CustomButton>
	)
}

export default BlogButton
