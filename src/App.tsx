import React from "react";
import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

class ErrorBoundary extends React.Component<{children?: React.ReactNode}, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary caught an error', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding:20, color:'#fff', textAlign:'center'}}>
          Something went wrong loading the scene. Try enabling WebGL or using another browser.
        </div>
      );
    }
    return this.props.children || null;
  }
}

const App = () => {
  return (
    <>
      <LoadingProvider>
        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <MainContainer>
              <Suspense fallback={<div />}>
                <CharacterModel />
              </Suspense>
            </MainContainer>
          </Suspense>
        </ErrorBoundary>
      </LoadingProvider>
    </>
  );
};

export default App;
