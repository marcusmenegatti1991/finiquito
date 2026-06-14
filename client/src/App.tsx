import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
