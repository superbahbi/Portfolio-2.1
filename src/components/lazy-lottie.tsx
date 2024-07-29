import { useQuery } from "react-query";
import { type LottieComponentProps } from "lottie-react";
import { Suspense, lazy } from "react";

const LazyLottieComponent = lazy(() => import("lottie-react"));

interface LottieProps<T extends Record<string, unknown>> {
  getAnimationData: () => Promise<T>;
  id: string;
}

const LazyLottie = <T extends Record<string, unknown>>({
  getAnimationData,
  id,
  ref,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, "animationData">) => {
  const { data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      void import("lottie-react");
      return getAnimationData();
    },
    enabled: typeof window !== "undefined",
  });

  if (!data) return <span>Loading...</span>;
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  );
}

export { LazyLottie };