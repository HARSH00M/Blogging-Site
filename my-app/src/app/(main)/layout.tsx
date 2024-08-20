'use client'
import NavigationBar from "@/components/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div>
        <NavigationBar/>
        {children}
    </div>
  );
}
