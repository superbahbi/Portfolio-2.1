"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Project } from "@/lib/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { LinkPreview } from "./link-preview";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
interface CardCarouselProps {
  projects: Project[];
}
const CardCarousel = ({ projects }: CardCarouselProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api],
  );

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent className="-ml-1">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1">
              <Card
                ref={divRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative w-full bg-transparent"
              >
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                  style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 80%)`,
                  }}
                />
                <div>
                  <LinkPreview url={project.website_link} className="p-0.5" />
                </div>
                <CardHeader>
                  <CardTitle className="flex flex-row gap-1">
                    {project.title}
                    {project.tags && (
                      <span className="text-xs font-light text-muted-foreground">
                        ({project.tags?.join(", ")})
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="h-26 text-xs md:h-16 lg:h-14">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex justify-center gap-2 sm:justify-between">
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.technology.map((tech) => (
                        <Button
                          key={tech.name}
                          variant="outline"
                          size="icon"
                          className="hidden md:flex"
                        >
                          <span>{tech.icon}</span>
                          <span className="sr-only">{tech.name}</span>
                        </Button>
                      ))}

                      {project.code && (
                        <a href={project.code} target="_blank">
                          <Button variant="outline">Code</Button>
                        </a>
                      )}
                      <a href={project.website_link} target="_blank">
                        <Button variant="outline">
                          {project.website_label}
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="py-1 text-center text-sm text-muted-foreground">
        {Array.from({ length: count }).map((_, index) => (
          <button
            onClick={() => onDotButtonClick(index)}
            key={index}
            className={`mx-1 inline-block h-2 w-2 rounded-full ${
              index === current - 1 ? "bg-primary" : "bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};
export { CardCarousel };
