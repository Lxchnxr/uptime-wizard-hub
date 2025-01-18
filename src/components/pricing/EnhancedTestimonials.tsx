import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Award, Star } from "lucide-react";

const testimonials = [
  {
    quote: "UptimeGuard hat unsere Erwartungen übertroffen. Wir konnten unsere Systemausfälle um 90% reduzieren.",
    author: "Dr. Maria Schmidt",
    role: "CTO, TechStart GmbH",
    company: {
      name: "TechStart GmbH",
      logo: "/placeholder.svg",
    },
    rating: 5,
  },
  {
    quote: "Die proaktiven Benachrichtigungen und das intuitive Dashboard haben uns überzeugt.",
    author: "Thomas Weber",
    role: "IT-Manager, WebSolutions AG",
    company: {
      name: "WebSolutions AG",
      logo: "/placeholder.svg",
    },
    rating: 5,
  },
  {
    quote: "Seit wir UptimeGuard nutzen, haben wir einen klaren Überblick über unsere System-Performance.",
    author: "Lisa Meyer",
    role: "Projektleiter, Digital AG",
    company: {
      name: "Digital AG",
      logo: "/placeholder.svg",
    },
    rating: 5,
  },
];

export const EnhancedTestimonials = () => {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-br from-secondary to-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">
            Von führenden Unternehmen empfohlen
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Erfahren Sie, warum über 1.000 Unternehmen UptimeGuard vertrauen
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-0 relative group hover:bg-white/10 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6 relative z-10">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg font-semibold mb-6 text-white">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.company.logo}
                    alt={testimonial.company.name}
                    className="h-8 w-8 rounded-full bg-gray-800 mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};