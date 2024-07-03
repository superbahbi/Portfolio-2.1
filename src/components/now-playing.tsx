"use client";
import { getQueueItem } from "@/lib/spotify-api";
import { useQuery } from "react-query";
import { SpotifyAnimation } from "./spotify-animation";

export function NowPlaying() {
  const { data: queue, isLoading } = useQuery("queueItem", getQueueItem, {
    refetchInterval: 30000,
    initialData: {
      current: {
        albumImageUrl: "",
        artist: "",
        songUrl: "",
        title: "",
      },
      next: {
        song: "",
        artist: "",
      },
    },
  });

  const renderLoading = () => (
    <h2 className="mt-4 flex items-center gap-1 text-center text-lg font-bold text-white">
      Loading...
    </h2>
  );

  const renderQueueInfo = () => (
    <>
      <a href={queue?.current.songUrl} target="_blank">
        <h2 className="mt-2 flex items-center gap-1 text-center text-lg font-bold text-white">
          {queue?.current.title}
        </h2>
      </a>
      <p className="text-center text-base text-muted-foreground">
        {queue?.current.artist}
      </p>
      <p className="text-center text-xs text-muted-foreground">
        Next song: {queue?.next.song} by {queue?.next.artist}
      </p>
    </>
  );

  const renderOffline = () => (
    <h2 className="mt-4 flex items-center gap-1 text-center text-lg font-bold text-white">
      Currently offline
    </h2>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-48 w-48 overflow-hidden rounded-lg">
        <img
          src={queue ? queue.current.albumImageUrl : "/album-cover.png"}
          alt={queue ? `${queue.current.title} album art` : "Album art"}
          width={192}
          height={192}
          className="h-full w-full object-cover"
        />
        {queue && (
          <div className="absolute right-0 top-0 overflow-hidden rounded-lg p-2">
            <div className="size-6">
              <SpotifyAnimation />
            </div>
          </div>
        )}
      </div>

      {isLoading
        ? renderLoading()
        : queue
          ? renderQueueInfo()
          : renderOffline()}
    </div>
  );
}
