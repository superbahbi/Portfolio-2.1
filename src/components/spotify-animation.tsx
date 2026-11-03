import { LazyLottie } from "./lazy-lottie";

const SpotifyAnimation: React.FC = () => {
  return (
    <LazyLottie
      getAnimationData={() => import("../lib/lottie/spotify-animation.json")}
      loop
      id="spotify-animation"
    />
  );
};

export { SpotifyAnimation };