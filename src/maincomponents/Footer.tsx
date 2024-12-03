import styled, { keyframes } from "styled-components";
import CustomBox from "../components/CustomBox";
import CustomColumn from "../components/CustomColumn";
import CustomFont from "../components/CustomFont";
import CustomRow from "../components/CustomRow";

const scrollAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const ScrollingBox = styled(CustomBox)`
  position: relative;
  overflow: hidden;
  height: 100px;
`;

const ScrollingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  animation: ${scrollAnimation} 10s linear infinite;
`;

function Footer() {
	return (
		<ScrollingBox
			$flexdirection="column"
			$width="100%"
			$height="auto"
			$padding="1rem"
			$borderradius="0"
			$alignitems="center"
			$justifycontent="center"
			$backgroundcolor="black"
			$gap="1.5rem"
		>
			<ScrollingContent>
				<CustomRow
					$width="100%"
					$height="auto"
					$alignitems="center"
					$justifycontent="center"
				>
					<CustomColumn
						$width="50%"
						$height="auto"
						$alignitems="flex-end"
						$justifycontent="flex-start"
						$gap="0.5rem"
					>
						<CustomFont $color="white" $font="0.8rem">
							plan
						</CustomFont>
						<CustomFont $color="white" $font="0.8rem">
							design
						</CustomFont>
						<CustomFont $color="white" $font="0.8rem">
							programming
						</CustomFont>
						<CustomFont $color="white" $font="0.8rem">
							manage
						</CustomFont>
					</CustomColumn>

					<CustomColumn
						$width="50%"
						$height="auto"
						$alignitems="flex-start"
						$justifycontent="flex-start"
						$gap="0.5rem"
					>
						<CustomFont $color="white" $font="0.8rem">
							nayeong
						</CustomFont>
						<CustomFont $color="white" $font="0.8rem">
							nayeong
						</CustomFont>
						<CustomFont $color="white" $font="0.8rem">
							nayeong
						</CustomFont>
						<CustomFont $color="white" $font="0.8rem">
							nayeong
						</CustomFont>
					</CustomColumn>
				</CustomRow>
				<CustomFont $color="white" $font="1rem" $fontweight="bold">
					Continue.
				</CustomFont>
			</ScrollingContent>
		</ScrollingBox>
	);
}

export default Footer;
