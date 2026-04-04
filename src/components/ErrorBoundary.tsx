import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };

type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50 text-gray-900">
          <div className="max-w-md text-center space-y-4">
            <h1 className="text-xl font-bold">Impossible d&apos;afficher la page</h1>
            <p className="text-sm text-gray-600">{this.state.error.message}</p>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-brand-blue text-white text-sm font-medium"
              onClick={() => window.location.reload()}>
              Recharger
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
