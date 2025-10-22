import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Music, Palette, Activity } from "lucide-react";

export function ProgramsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          教育プログラム
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-chart-4/20 rounded-lg flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-lg font-bold mb-2">自然体験活動</h3>
              <p className="text-sm text-muted-foreground">
                季節ごとの自然観察や野菜の栽培を通じて、生命の大切さを学びます
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-lg font-bold mb-2">音楽とリズム</h3>
              <p className="text-sm text-muted-foreground">
                歌やダンス、楽器演奏で表現力と感性を育てます
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-chart-1/20 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-lg font-bold mb-2">創作活動</h3>
              <p className="text-sm text-muted-foreground">
                絵画や工作で創造力と手先の器用さを養います
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-lg font-bold mb-2">運動プログラム</h3>
              <p className="text-sm text-muted-foreground">
                体操や外遊びで健康な体づくりをサポートします
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
