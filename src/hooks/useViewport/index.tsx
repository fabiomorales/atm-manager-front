import React, { createContext, useContext, useEffect, useState } from 'react';

interface ViewportCtx {
  viewportSize: number;
  greaterThan: (breakpoint: number) => boolean;
  lessThan: (breakpoint: number) => boolean;
}

const ViewportContext = createContext({} as ViewportCtx);

export const ViewportProvider: React.FC = ({ children }) => {
  const [viewportSize, setViewportSize] = useState<number>(0);

  const greaterThan = (breakpoint: number) => viewportSize! > breakpoint;

  const lessThan = (breakpoint: number) => viewportSize! < breakpoint;

  const handleWindowResize = () => {
    setViewportSize(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        viewportSize,
        greaterThan,
        lessThan,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = (): ViewportCtx => {
  const context = useContext(ViewportContext);

  if (!context) {
    throw new Error('useViewport hook must be used under ViewportProvider');
  }

  return context;
};
