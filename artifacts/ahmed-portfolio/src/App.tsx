import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { LanguageProvider } from "@/hooks/use-language";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import Home from "@/pages/home";
import DataSales from "@/pages/data-sales";
import SoftwareSales from "@/pages/software-sales";
import Courses from "@/pages/courses";
import Policies from "@/pages/policies";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/data-sales" component={DataSales} />
      <Route path="/software-sales" component={SoftwareSales} />
      <Route path="/courses" component={Courses} />
      <Route path="/policies" component={Policies} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-grid-texture relative">
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <Header />
                <main>
                  <Router />
                </main>
                <Footer />
              </WouterRouter>
              <Toaster />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
