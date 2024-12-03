import Lottie from "react-lottie-player";
import lottieJson from "../assets/Graph.json";

export default function Graph() {
	return <Lottie loop animationData={lottieJson} play />;
}