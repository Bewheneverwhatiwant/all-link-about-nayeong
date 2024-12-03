import Lottie from "react-lottie-player";
import lottieJson from "../assets/Diary.json";

export default function Diary() {
	return <Lottie loop animationData={lottieJson} play />;
}