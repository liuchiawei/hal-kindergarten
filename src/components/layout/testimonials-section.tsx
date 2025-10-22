import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "先生方がとても温かく、子どもが毎日楽しく通っています。少人数制なので一人ひとりをよく見てくださり、成長を実感できます。",
      author: "年中組 保護者様"
    },
    {
      quote: "自然体験や創作活動が豊富で、子どもの感性が豊かになりました。先生たちの専門性が高く、安心して預けられます。",
      author: "年長組 保護者様"
    },
    {
      quote: "広々とした園庭で思いっきり遊べて、子どもがとても生き生きしています。行事も充実していて親子で楽しめます。",
      author: "年少組 保護者様"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          保護者の声
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 italic">
                  「{testimonial.quote}」
                </p>
                <p className="font-semibold text-sm">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
