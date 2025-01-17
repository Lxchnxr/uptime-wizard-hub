import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/30 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Häufig gestellte Fragen</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Finden Sie schnell Antworten auf Ihre wichtigsten Fragen
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-8 grid gap-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Was macht Ihr Monitoring-System besonders?</AccordionTrigger>
              <AccordionContent>
                Unser System bietet Echtzeit-Überwachung, intelligente Alarme und umfassende Analysen. 
                Wir kombinieren modernste Technologie mit benutzerfreundlicher Bedienung und 
                ermöglichen so eine effektive Überwachung Ihrer gesamten Infrastruktur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie funktioniert die Preisgestaltung?</AccordionTrigger>
              <AccordionContent>
                Wir bieten flexible Preispläne, die sich nach Ihren Bedürfnissen richten. 
                Von kostenlosen Starter-Paketen bis hin zu Enterprise-Lösungen - Sie zahlen nur 
                für die Features, die Sie wirklich benötigen. Alle Pläne beinhalten grundlegende 
                Monitoring-Funktionen und technischen Support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Welche Art von Support bieten Sie an?</AccordionTrigger>
              <AccordionContent>
                Unser Support-Team ist 24/7 für Sie da. Wir bieten technische Unterstützung 
                per E-Mail, Chat und Telefon. Enterprise-Kunden erhalten zusätzlich einen 
                persönlichen Account Manager und priorisierten Support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Wie schnell kann ich mit dem Monitoring beginnen?</AccordionTrigger>
              <AccordionContent>
                Die Einrichtung ist in wenigen Minuten erledigt. Nach der Registrierung können 
                Sie sofort mit dem Monitoring beginnen. Unsere intuitive Benutzeroberfläche und 
                ausführliche Dokumentation machen den Einstieg besonders einfach.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Gibt es eine Mindestvertragslaufzeit?</AccordionTrigger>
              <AccordionContent>
                Nein, wir bieten flexible Laufzeiten an. Sie können monatlich oder jährlich 
                zahlen, wobei Sie bei jährlicher Zahlung von einem Rabatt profitieren. Sie können 
                Ihr Abonnement jederzeit anpassen oder kündigen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};