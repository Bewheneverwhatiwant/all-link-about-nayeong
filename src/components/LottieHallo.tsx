import Lottie from "react-lottie-player";
import lottieJson from "../assets/Hallo2.json";

export default function Hallo() {
	return <Lottie loop animationData={lottieJson} play />;
}