import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600 text-center font-semibold bg-red-50 rounded-lg">
          ⚠️ Terjadi kesalahan, coba lagi nanti.
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
