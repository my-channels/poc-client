import { HydrateProvider } from "@repo/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HydrateProvider>{children}</HydrateProvider>;
}
