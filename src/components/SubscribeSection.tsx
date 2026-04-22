import { useState } from "react";
import { Send } from "lucide-react";
// 1. Assuming you are using shadcn/ui or a similar hook-based toast
import { useToast } from "@/hooks/use-toast"; 
import { Toaster } from "@/components/ui/toaster"; // Make sure this is in your App or here

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast(); // 2. Initialize the toast hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 3. Logic to handle the subscription
    console.log("Subscribing email:", email);
    
    // 4. Trigger the toast
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
      duration: 3000,
    });

    // Reset the input
    setEmail("");
  };

  return (
    <section id="subscribe" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Subscribe for Upcoming Workshops
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Stay updated with our latest courses, workshops, and training programs.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* 5. Toaster component renders the actual popups */}
      <Toaster /> 
    </section>
  );
};

export default SubscribeSection;