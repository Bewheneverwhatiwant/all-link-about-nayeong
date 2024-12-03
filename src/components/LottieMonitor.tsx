import Lottie from "react-lottie-player";
import lottieJson from "../assets/Monitor.json";

export default function Monitor() {
	return <Lottie loop animationData={lottieJson} play />;
}