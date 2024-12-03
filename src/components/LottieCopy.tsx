import Lottie from "react-lottie-player";
import lottieJson from "../assets/Copy2.json";

export default function Copy() {
	return <Lottie loop animationData={lottieJson} play />;
}