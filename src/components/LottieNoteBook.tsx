import Lottie from "react-lottie-player";
import lottieJson from "../assets/NoteBook.json";

export default function NoteBook() {
	return <Lottie loop animationData={lottieJson} play />;
}