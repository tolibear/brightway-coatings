'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'quote' | 'consultation' | null;

interface ModalContextType {
  activeModal: ModalType;
  openQuoteModal: () => void;
  openConsultationModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openQuoteModal = () => setActiveModal('quote');
  const openConsultationModal = () => setActiveModal('consultation');
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        openQuoteModal,
        openConsultationModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}


