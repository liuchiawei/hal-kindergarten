import { Button } from "@/components/ui/button";

export function ContactCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          見学・入園のご相談はお気軽に
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          受付時間：平日 9:00〜17:00
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            見学予約
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            お問い合わせ
          </Button>
        </div>
        <p className="mt-6 text-muted-foreground">
          TEL: 03-XXXX-XXXX ｜ info@hal-kindergarten.jp
        </p>
      </div>
    </section>
  );
}
