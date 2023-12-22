"use client";
import { IProject } from "@/app/projects/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import React, { useRef, useState } from "react";

interface CardSpotlightProps {
  project: IProject;
}

const CardSpotlight = ({ project }: CardSpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

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

  return (
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
      <CardHeader>
        <CardTitle className="text-white">{project.title}</CardTitle>
        <CardDescription className="flex flex-col gap-2 text-slate-300">
          <span>{project.description}</span>
          <span className="flex gap-2 flex-wrap">
            {project.technology.map((tech) => (
              <Button
                key={tech.name}
                variant="outline"
                className="flex text-white hover:text-black gap-1 w-full sm:w-auto"
              >
                <span>{tech.icon}</span>
                <span className="font-light">{tech.name}</span>
              </Button>
            ))}
          </span>
        </CardDescription>
      </CardHeader>
      {/* <CardContent></CardContent> */}
      <CardFooter className="flex flex-col sm:flex-row justify-end gap-2">
        <Button className="relative flex gap-1 rounded-lg bg-slate-200 text-black hover:bg-white w-full sm:w-auto">
          Code
        </Button>
        <Button className="relative flex gap-1 rounded-lg bg-slate-200 text-black hover:bg-white w-full sm:w-auto">
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardSpotlight;
