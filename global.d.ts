declare module "react-lottie-player" {
	import React from "react";

	interface LottieProps {
		animationData: object;
		loop?: boolean;
		play?: boolean;
	}

	const Lottie: React.FC<LottieProps>;
	export default Lottie;
}
