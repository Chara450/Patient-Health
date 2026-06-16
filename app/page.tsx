'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Wind, 
  Thermometer, 
  Activity, 
  ArrowRight, 
  Lock, 
  Mail, 
  ShieldCheck 
} from 'lucide-react'

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Directly bypasses for development to hit your dashboard URL route
    window.location.href = '/metrics' 
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Dynamic Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50 px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2.5">
          <div className="bg-primary p-2 rounded-xl text-primary-foreground shadow-sm shadow-primary/20">
            <Activity className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Wheel<span className="text-primary">Health</span>
          </span>
        </div>
        <Button 
          variant={showLogin ? "outline" : "default"}
          onClick={() => setShowLogin(!showLogin)}
          className="rounded-xl font-semibold text-sm transition-all shadow-sm"
        >
          {showLogin ? "Back to Home" : "Sign In"}
        </Button>
      </nav>

      {/* Hero / Login Workspace Container */}
      <main className="pt-24 min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {!showLogin ? (
          /* LANDING PAGE CONTENT */
          <div className="max-w-5xl w-full text-center py-12 space-y-16 animate-in fade-in duration-500">
            <div className="space-y-6 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="w-3.5 h-3.5" /> Next-Gen Wheelchair Telemetry
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-none">
                Continuous safety monitoring, built for <span className="text-primary">wheelchair mobility.</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Keep vital metrics clear and organized. A secure ecosystem delivering clean, live heart rate, blood oxygen, and core temperature updates directly to your team.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => setShowLogin(true)}
                  size="lg"
                  className="gap-2 rounded-2xl font-bold transition-all shadow-lg shadow-primary/10 group text-base px-8 py-6"
                >
                  Access Dashboard <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Micro-Features Grid matching your custom card vibe */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left max-w-4xl mx-auto">
              <Card className="border-2 border-muted/60 bg-gradient-to-br from-card to-background shadow-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">Heart Rate Monitoring</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Continuous diagnostic checks configured to flag irregularities and trigger sudden threshold warnings immediately.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted/60 bg-gradient-to-br from-card to-background shadow-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">Blood Oxygen (SpO2)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Real-time blood saturation trend evaluations optimized to isolate respiratory drops during movement.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted/60 bg-gradient-to-br from-card to-background shadow-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">Thermal Integrity</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Integrated skin sensors mapping core temperature shifts to actively manage internal overheating threats.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* LOGIN COMPONENT INTERFACE */
          <div className="w-full max-w-md animate-in zoom-in-95 duration-300">
            <Card className="border-2 border-border shadow-xl p-2 bg-card">
              <CardContent className="pt-8 px-6 pb-8 space-y-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">Portal Authentication</h2>
                  <p className="text-sm text-muted-foreground">Sign in to initialize secure medical sensor feeds</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                      <input 
                        type="email" 
                        required
                        placeholder="medical@personnel.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-2.5 bg-muted/40 border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</label>
                      <a href="#" className="text-xs font-semibold text-primary hover:underline">Forgot?</a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
                      <input 
                        type="password" 
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-2.5 bg-muted/40 border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background transition-all placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-xl font-bold py-5 mt-2 transition-all shadow-md text-sm"
                  >
                    Authenticate and Enter
                  </Button>
                </form>

                <div className="text-center text-xs text-muted-foreground border-t border-border pt-4">
                  Telemetry kit registration or sync problems? <a href="#" className="text-primary font-semibold hover:underline">Contact System Admin</a>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}