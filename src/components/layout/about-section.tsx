import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          ハル幼稚園について
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          私たちハル幼稚園は、子どもたち一人ひとりの個性を大切にし、
          <br />
          遊びを通じて豊かな心と健やかな体を育む教育を実践しています。
          <br />
          経験豊富な先生たちと、広々とした園庭で、お子様の成長を
          <br />
          全力でサポートします。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">少人数制クラス</h3>
              <p className="text-muted-foreground">
                一人ひとりに寄り添う丁寧な保育
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">充実した設備</h3>
              <p className="text-muted-foreground">
                安全で広々とした園庭と教室
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">経験豊富な教員</h3>
              <p className="text-muted-foreground">
                資格を持ったプロの先生たち
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
