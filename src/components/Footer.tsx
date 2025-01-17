import { Button } from "@/components/ui/button";

const navigation = {
  product: [
    { name: "Features", href: "#" },
    { name: "Preise", href: "#" },
    { name: "API", href: "#" },
  ],
  support: [
    { name: "Dokumentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Status", href: "#" },
  ],
  company: [
    { name: "Über uns", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Karriere", href: "#" },
  ],
  legal: [
    { name: "Datenschutz", href: "#" },
    { name: "AGB", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">UptimeGuard</h3>
            <p className="text-sm leading-6 text-gray-300">
              Professionelles Website Monitoring für Unternehmen jeder Größe.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Produkt</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Button variant="link" className="text-gray-300 hover:text-primary p-0">
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Button variant="link" className="text-gray-300 hover:text-primary p-0">
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Unternehmen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Button variant="link" className="text-gray-300 hover:text-primary p-0">
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Rechtliches</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Button variant="link" className="text-gray-300 hover:text-primary p-0">
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} UptimeGuard. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};