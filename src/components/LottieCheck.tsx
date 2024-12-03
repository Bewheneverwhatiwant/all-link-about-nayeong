import Lottie from "react-lottie-player";
import lottieJson from "../assets/Check.json";

export default function Check() {
	return <Lottie loop animationData={lottieJson} play />;
}