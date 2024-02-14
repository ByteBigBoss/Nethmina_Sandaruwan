'use client'
import About from "@/components/About";
import BottomBar from "@/components/BottomBar";
import Hero from "@/components/Hero";
import ComingSoon from "@/components/System/ComingSoon";
import MaintenancePage from "@/components/System/MaintenancePage";
import ThemeToggleSwitch from "@/components/ThemeToggleSwitch";
import { ThemeProvider } from "@/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";

type SystemUpdateOptions = 'maintain' | 'deploy' | 'coming soon';

export default function Home() {

  const [systemUpdate, setSystemUpdate] = useState<SystemUpdateOptions>('deploy');

  return (
   
    <>
   
      {systemUpdate === 'maintain' ?
        <main >
          <MaintenancePage />
        </main>
        : systemUpdate === 'coming soon' ?
          <main >
            <ComingSoon />
          </main>
          :
          
          <ThemeProvider>
          <main className="flex min-h-screen bg-ns-primary dark:bg-ns-primary-dark flex-col items-center  bg-icx-primary dark:bg-icx-primary-dark overflow-hidden">
           <BottomBar/>
           <Hero/>

           <About/>

        
          </main>
          </ThemeProvider>
      }
    </>
  );
}
