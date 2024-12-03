import Lottie from "react-lottie-player";
import lottieJson from "../assets/html.json";

export default function LottieHTML() {
	return <Lottie loop animationData={lottieJson} play />;
}