import Lottie from "react-lottie-player";

import lottieJson from "../assets/fish.json";

export default function Animation() {
	return <Lottie loop animationData={lottieJson} play />;
}