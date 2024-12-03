import Lottie from "react-lottie-player";
import lottieJson from "../assets/Toy.json";

export default function Toy() {
	return <Lottie loop animationData={lottieJson} play />;
}