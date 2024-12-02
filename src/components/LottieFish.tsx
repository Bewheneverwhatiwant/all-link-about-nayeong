import Lottie from "react-lottie-player";

import lottieJson from "../assets/light.json";

export default function Animation() {
	return <Lottie loop animationData={lottieJson} play />;
}