'use client';

import { useEffect } from 'react';
import { useSetTransformation } from '@/contexts/TransformationContext';

interface TransformationSetterProps {
  title: string;
  subtitle?: string;
}

/**
 * Component that sets the transformation text for the current page
 * Include this at the top of any page component to customize the footer CTA
 */
export default function TransformationSetter({ title, subtitle }: TransformationSetterProps) {
  const setTransformation = useSetTransformation();

  useEffect(() => {
    setTransformation(title, subtitle);
  }, [title, subtitle, setTransformation]);

  // This component renders nothing - it just sets the transformation text
  return null;
}
