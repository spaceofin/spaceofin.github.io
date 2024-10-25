import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className={`mt-20 text-4xl`}>{children}</h1>,
    h2: ({ children }) => (
      <h2 className={`mt-20 text-3xl text-blue-800`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`text-2xl dark:text-xl text-blue-600 dark:text-sky-300`}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className={`text-xl dark:text-xl text-slate-700 dark:text-sky-500`}>
        {children}
      </h4>
    ),
    hr: ({ children }) => <hr className="my-2">{children}</hr>,
    img: ({ src, alt }) => <img className="mt-1 mb-8" src={src} alt={alt} />,
  };
}
