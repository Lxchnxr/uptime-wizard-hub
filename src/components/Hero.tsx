import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-secondary py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Website Monitoring
            <span className="text-primary"> leicht gemacht</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Überwachen Sie die Verfügbarkeit Ihrer Websites rund um die Uhr.
            Erhalten Sie sofortige Benachrichtigungen bei Ausfällen und detaillierte Performance-Analysen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="group">
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="link" className="text-white hover:text-primary">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
      <Activity className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/10 h-96 w-96" />
    </div>
  );
};