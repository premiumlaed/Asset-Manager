import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { GlassCard } from "@/components/ui/glass-card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO title="404 Not Found" />
      <div className="min-h-[80vh] w-full flex items-center justify-center pt-20 px-4">
        <GlassCard className="max-w-md w-full p-8 text-center flex flex-col items-center">
          <div className="bg-destructive/10 p-4 rounded-full mb-6">
            <AlertCircle className="w-12 h-12 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold mb-4">404</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </GlassCard>
      </div>
    </>
  );
}
