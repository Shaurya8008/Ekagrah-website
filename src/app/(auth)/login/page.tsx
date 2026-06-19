"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-[85vh] flex flex-col justify-center bg-[#ffe5b3] border-b-2 border-foreground relative">
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
      <Container className="max-w-md w-full relative z-10">
        <BrutalistCard className="p-8 bg-white border-4">
          <div className="w-16 h-16 bg-[#feecee] border-2 border-foreground shadow-[4px_4px_0px_#141414] rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="font-heading text-3xl font-black text-center mb-6 uppercase tracking-wide">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          {error && (
            <div className="mb-6 p-4 bg-[#feecee] border-2 border-foreground shadow-[2px_2px_0px_#141414] text-primary font-bold text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-bold mb-2 uppercase text-sm">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                required
              />
            </div>
            <div>
              <label className="block text-base font-bold mb-2 uppercase text-sm">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                required
              />
            </div>
            <Button variant="primary" type="submit" className="w-full py-4 text-lg" loading={loading}>
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="mt-8 text-center text-base font-bold">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-primary underline decoration-2 underline-offset-4 hover:text-primary-dark"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </BrutalistCard>
      </Container>
    </div>
  );
}
