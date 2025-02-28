import LeftSideBar from "@/components/LeftSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black-1">
        <main>
       <LeftSideBar/>
        {children}
        <p className="text-white-1">right side</p>

        </main>
       
    </div>
  );
}
