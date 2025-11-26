import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PerformanceMonitor from "@/components/performance-monitor";
import { useScrollReset } from "@/hooks/use-scroll-reset";
import Home from "@/pages/home";
import AngelsShare from "@/pages/angels-share";
import BaccaratRouge540 from "@/pages/baccarat-rouge-540";
import CreedMillesimeImperial from "@/pages/creed-millesime-imperial";
import TomFordLostCherry from "@/pages/tom-ford-lost-cherry";
import XerjoffNaxos from "@/pages/xerjoff-naxos";
import Coleccion from "@/pages/coleccion";
import NuestroConcepto from "@/pages/nuestro-concepto";
import Manifiesto from "@/pages/manifiesto";
import EnviosDevoluciones from "@/pages/envios-devoluciones";
import Contacto from "@/pages/contacto";
import Terminos from "@/pages/terminos";
import Privacy from "@/pages/privacy";
import Liderazgo from "@/pages/liderazgo";
import NotFound from "@/pages/not-found";

/**
 * Application router component
 * Handles all route definitions and automatic scroll reset on navigation
 */
function Router() {
  // Reset scroll position when navigating between pages
  useScrollReset();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/angels-share" component={AngelsShare} />
      <Route path="/baccarat-rouge-540" component={BaccaratRouge540} />
      <Route path="/creed-millesime-imperial" component={CreedMillesimeImperial} />
      <Route path="/tom-ford-lost-cherry" component={TomFordLostCherry} />
      <Route path="/xerjoff-naxos" component={XerjoffNaxos} />
      <Route path="/coleccion" component={Coleccion} />
      <Route path="/nuestro-concepto" component={NuestroConcepto} />
      <Route path="/manifiesto" component={Manifiesto} />
      <Route path="/envios-devoluciones" component={EnviosDevoluciones} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/terminos" component={Terminos} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/liderazgo" component={Liderazgo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <PerformanceMonitor />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
