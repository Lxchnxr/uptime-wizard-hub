import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-black py-20 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">
            Website Monitoring der
            <span className="block">nächsten Generation</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            Revolutionieren Sie Ihr Website-Monitoring mit Echtzeit-Überwachung, KI-gestützter Analyse und blitzschnellen Benachrichtigungen. Für Unternehmen, die keine Kompromisse eingehen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300">
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="link" className="text-white hover:text-primary transition-colors">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <Activity className="h-96 w-96 text-primary animate-pulse" />
      </div>
      <div className="absolute left-0 bottom-0 opacity-10">
        <Activity className="h-96 w-96 text-accent rotate-180" />
      </div>
    </div>
  );
};