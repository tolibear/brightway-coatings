'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface TransformationContextType {
  title: string;
  subtitle: string;
  setTransformation: (title: string, subtitle?: string) => void;
}

const defaultTitle = "Ready to Transform Your Concrete?";
const defaultSubtitle = "Join satisfied Northeast Florida homeowners who chose Brightway Coatings for 15 year durability, one-day installation, and unmatched craftsmanship.";

const TransformationContext = createContext<TransformationContextType | undefined>(undefined);

export function TransformationProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState(defaultTitle);
  const [subtitle, setSubtitle] = useState(defaultSubtitle);

  const setTransformation = (newTitle: string, newSubtitle?: string) => {
    setTitle(newTitle);
    if (newSubtitle) {
      setSubtitle(newSubtitle);
    } else {
      // Generate dynamic subtitle based on title
      const service = newTitle.replace('Ready to Transform Your ', '').replace('?', '').toLowerCase();
      if (service === 'concrete') {
        setSubtitle(defaultSubtitle);
      } else {
        setSubtitle(`Join satisfied Northeast Florida homeowners who chose Brightway Coatings for ${service} transformations with 15 year durability, one-day installation, and unmatched craftsmanship.`);
      }
    }
  };

  return (
    <TransformationContext.Provider value={{ title, subtitle, setTransformation }}>
      {children}
    </TransformationContext.Provider>
  );
}

export function useTransformation() {
  const context = useContext(TransformationContext);
  if (context === undefined) {
    throw new Error('useTransformation must be used within a TransformationProvider');
  }
  return context;
}

// Hook for pages to easily set their transformation text
export function useSetTransformation() {
  const { setTransformation } = useTransformation();
  return setTransformation;
}



