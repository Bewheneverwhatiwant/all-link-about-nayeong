import Lottie from "react-lottie-player";
import lottieJson from "../assets/Cards.json";

export default function Cards() {
	return <Lottie loop animationData={lottieJson} play />;
}