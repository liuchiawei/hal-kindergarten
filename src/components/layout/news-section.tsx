import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function NewsSection() {
  const news = [
    {
      date: "2024年3月15日",
      title: "春の入園説明会のお知らせ",
      excerpt: "4月からの入園をご検討の保護者様向けに、説明会を開催いたします...",
      gradient: "from-chart-1/20 to-chart-2/20"
    },
    {
      date: "2024年3月10日",
      title: "卒園式を行いました",
      excerpt: "年長組の子どもたちが元気に巣立っていきました...",
      gradient: "from-chart-3/20 to-chart-4/20"
    },
    {
      date: "2024年3月5日",
      title: "お楽しみ会の様子",
      excerpt: "今年度最後のお楽しみ会で、子どもたちが発表を行いました...",
      gradient: "from-chart-5/20 to-chart-1/20"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          お知らせ・ブログ
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <Calendar className="w-16 h-16 text-muted-foreground" />
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            もっと見る
          </Button>
        </div>
      </div>
    </section>
  );
}
