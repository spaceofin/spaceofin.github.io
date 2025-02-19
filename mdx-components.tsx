import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className={`my-20 text-4xl`}>{children}</h1>,
    h2: ({ children }) => (
      <h2 className={`mt-20 text-3xl text-blue-900`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`text-2xl dark:text-2xl text-sky-700 dark:text-sky-300`}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className={`text-xl font-bold dark:text-xl mt-4 text-slate-800 dark:text-sky-500`}>
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        className={`text-lg font-bold dark:text-xl mt-4 text-slate-600 dark:text-sky-500`}>
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        className={`text-lg font-bold dark:text-xl mt-6 text-slate-600 dark:text-slate-600`}>
        {children}
      </h6>
    ),
    hr: ({ children }) => <hr className="my-2">{children}</hr>,
    img: ({ src, alt }) => <img className="mt-1 mb-8" src={src} alt={alt} />,
  };
}
