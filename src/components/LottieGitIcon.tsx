import Lottie from "react-lottie-player";
import lottieJson from "../assets/GitIcon.json";

export default function GitIcon() {
	return <Lottie loop animationData={lottieJson} play />;
}