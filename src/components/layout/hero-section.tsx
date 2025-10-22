import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          子どもたちの笑顔があふれる場所
          <br />
          <span className="text-primary">ハル幼稚園</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          遊びを通して学び、成長する毎日
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            見学予約
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            資料請求
          </Button>
        </div>
      </div>
    </section>
  );
}
