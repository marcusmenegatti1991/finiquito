import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { initAnalytics, trackPageView } from "./lib/analytics";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Blog from "./pages/blog/Blog";
import ComoCalcularFiniquito from "./pages/blog/ComoCalcularFiniquito";
import FiniquitoVsLiquidacion from "./pages/blog/FiniquitoVsLiquidacion";
import VacacionesDignas from "./pages/blog/VacacionesDignas";
import PrimaAntiguedad from "./pages/blog/PrimaAntiguedad";
import CuantoCorrespondeRenunciar from "./pages/blog/CuantoCorrespondeRenunciar";
import AguinaldoProporcional from "./pages/blog/AguinaldoProporcional";
import QueHacerConTuFiniquito from "./pages/blog/QueHacerConTuFiniquito";
import DondeInvertirTuFiniquito from "./pages/blog/DondeInvertirTuFiniquito";
import MejoresTarjetasSinEmpleo from "./pages/blog/MejoresTarjetasSinEmpleo";
import CuantoTiempoPagarFiniquito from "./pages/blog/CuantoTiempoPagarFiniquito";
import FiniquitoConEmbarazo from "./pages/blog/FiniquitoConEmbarazo";
import ComoImpugnarFiniquitoIncorrecto from "./pages/blog/ComoImpugnarFiniquitoIncorrecto";
import CartaDeRenuncia from "./pages/blog/CartaDeRenuncia";
import FiniquitoYSeguroSocial from "./pages/blog/FiniquitoYSeguroSocial";
import DespidoDuranteIncapacidad from "./pages/blog/DespidoDuranteIncapacidad";
import ActaAdministrativa from "./pages/blog/ActaAdministrativa";
import CursosIngresos from "./pages/blog/CursosIngresos";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={TermsOfService} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/como-calcular-finiquito"} component={ComoCalcularFiniquito} />
      <Route path={"/blog/finiquito-vs-liquidacion"} component={FiniquitoVsLiquidacion} />
      <Route path={"/blog/vacaciones-dignas-reforma-2023"} component={VacacionesDignas} />
      <Route path={"/blog/prima-de-antiguedad"} component={PrimaAntiguedad} />
      <Route path={"/blog/cuanto-corresponde-si-renuncio"} component={CuantoCorrespondeRenunciar} />
      <Route path={"/blog/aguinaldo-proporcional-finiquito"} component={AguinaldoProporcional} />
      <Route path={"/blog/que-hacer-con-tu-finiquito"} component={QueHacerConTuFiniquito} />
      <Route path={"/blog/donde-invertir-tu-finiquito"} component={DondeInvertirTuFiniquito} />
      <Route path={"/blog/mejores-tarjetas-sin-empleo"} component={MejoresTarjetasSinEmpleo} />
      <Route path={"/blog/cuanto-tiempo-para-pagar-finiquito"} component={CuantoTiempoPagarFiniquito} />
      <Route path={"/blog/finiquito-con-embarazo"} component={FiniquitoConEmbarazo} />
      <Route path={"/blog/como-impugnar-finiquito-incorrecto"} component={ComoImpugnarFiniquitoIncorrecto} />
      <Route path={"/blog/carta-de-renuncia-mexico"} component={CartaDeRenuncia} />
      <Route path={"/blog/finiquito-y-seguro-social-imss"} component={FiniquitoYSeguroSocial} />
      <Route path={"/blog/despido-durante-incapacidad"} component={DespidoDuranteIncapacidad} />
      <Route path={"/blog/acta-administrativa-finiquito"} component={ActaAdministrativa} />
      <Route path={"/blog/cursos-para-generar-ingresos"} component={CursosIngresos} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

// Inicializa GA4 y reporta un page_view en cada cambio de ruta (SPA).
// No renderiza nada; no-op si no hay VITE_GA_ID configurado.
function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Analytics />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
