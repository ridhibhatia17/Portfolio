// src/types/spline-viewer.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          [key: string]: unknown;
        },
        HTMLElement
      >;
    }
  }
}