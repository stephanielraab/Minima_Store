"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type CheckoutData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

type CheckoutContextType = {
  checkoutData: CheckoutData;
  updateCheckoutData: (data: Partial<CheckoutData>) => void;
  resetCheckoutData: () => void;
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

const initialData: CheckoutData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(initialData);

  function updateCheckoutData(data: Partial<CheckoutData>) {
    setCheckoutData((prev) => ({ ...prev, ...data }));
  }

  function resetCheckoutData() {
    setCheckoutData(initialData);
  }

  return (
    <CheckoutContext.Provider
      value={{
        checkoutData,
        updateCheckoutData,
        resetCheckoutData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx)
    throw new Error(
      "useCheckout deve ser usado dentro de CheckoutProvider"
    );
  return ctx;
}