"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FocusLock from "react-focus-lock";
import { CircleX } from "lucide-react";

interface CustomDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export function CustomDrawer({ open, setOpen, children }: CustomDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer Content */}
          <motion.div
            ref={drawerRef}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg  z-50 max-h-[90vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <FocusLock>
              {/* Close Button */}
              {/* <button
                className="absolute -top-2 right-1 p-2"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6 text-gray-600" />
              </button> */}
              <CircleX
                className="absolute -top-1  right-0  cursor-pointer text-senaryWhite rounded-full"
                fill="red"
                size={30}
                onClick={() => setOpen(false)}
              />

              {/* Drawer Content */}
              {children}
            </FocusLock>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
