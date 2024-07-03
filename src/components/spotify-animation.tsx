import { LazyLottie } from "./lazy-lottie";

export const SpotifyAnimation: React.FC = () => {
  return (
    <LazyLottie
      getAnimationData={() => import("../lib/lottie/spotify-animation.json")}
      loop
      id="spotify-animation"
    />
  );
};
