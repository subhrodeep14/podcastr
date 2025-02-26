
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black-1">
        <main>
        <p className="text-white-1">
        leftsidebar
        </p>
        {children}
        <p className="text-white-1">right side</p>

        </main>
       
    </div>
  );
}
