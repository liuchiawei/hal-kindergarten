"use client";

import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "lucide-react";

export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 rounded-full cursor-pointer transition-all duration-300"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUpIcon className="size-4" />
    </Button>
  );
};
