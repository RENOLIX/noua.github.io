import type { PropsWithChildren } from "react";
import { AuthProvider } from "./auth";
import { ConvexProvider } from "./convex";
import { LanguageProvider } from "./language";
import { QueryClientProvider } from "./query-client";
import { ThemeProvider } from "./theme";

export function DefaultProviders({ children }: PropsWithChildren) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <QueryClientProvider>
          <ConvexProvider>
            <AuthProvider>{children}</AuthProvider>
          </ConvexProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
