'use client' // Added so we can check the current path for dynamic navigation hiding

import React from "react"
import { usePathname } from 'next/navigation' // Checks what page the user is currently looking at
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MobileNav } from '@/components/mobile-nav'
import { SidebarNav } from '@/components/sidebar-nav'
import './globals.css'

// Fixed fonts: Added back the variable configurations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  
  // If the user is on the root landing page ("/"), we hide the application dashboard navigation panels
  const isLandingPage = pathname === '/'

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Fixed fonts: Included the font variables inside the className string */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background`}>
        {!isLandingPage && (
          <>
            {/* Mobile Navigation */}
            <MobileNav />
            
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
              <SidebarNav />
            </div>
          </>
        )}
        
        {/* If it's the landing page, strip away the margin layout offsets */}
        <div className={isLandingPage ? "" : "pt-20 md:pt-0 md:ml-64"}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}