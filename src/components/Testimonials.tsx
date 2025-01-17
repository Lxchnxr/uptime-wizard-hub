import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Dank UptimeGuard haben wir unsere Website-Ausfälle um 90% reduziert.",
    author: "Maria Schmidt",
    role: "CTO, TechStart GmbH",
  },
  {
    quote: "Einfach zu bedienen und zuverlässige Benachrichtigungen. Genau was wir gesucht haben.",
    author: "Thomas Weber",
    role: "IT-Manager, WebSolutions",
  },
  {
    quote: "Der beste Monitoring-Service, den wir je verwendet haben.",
    author: "Lisa Meyer",
    role: "Projektleiter, Digital AG",
  },
];

export const Testimonials = () => {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-secondary to-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Erfahren Sie, wie UptimeGuard Unternehmen dabei hilft, ihre Online-Präsenz zu optimieren
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-0 relative group hover:bg-white/10 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6 relative z-10">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg font-semibold mb-6 text-white">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};