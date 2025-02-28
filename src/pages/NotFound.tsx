
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold mb-6 text-gradient">404</h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mb-6"></div>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Oops! This page doesn't exist
          </h2>
          
          <p className="text-foreground/70 max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className="px-8 py-3 rounded-lg bg-neon-purple text-white font-medium button-glow inline-flex items-center"
          >
            <Home size={18} className="mr-2" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
