import ModalProvider from "@/providers/modal-providers";
import "../globals.css";
import AppLayout from "./_components/global/AppLayout";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "EventPeddle | Organizer",
  description: "Create and manage all event all in one place",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          <NextTopLoader color="#1B4AF5" />
          <ModalProvider>{children}</ModalProvider>
        </AppLayout>
      </body>
    </html>
  );
}
