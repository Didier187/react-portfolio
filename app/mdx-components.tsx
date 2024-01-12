import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 style={{ color: 'tomato' }} >{props.children}</h1>,
    h2: (props) => <h2 style={{ color: 'rebeccapurple' }} {...props} />,
    h3: (props) => <h3 style={{ color: 'rebeccapurple' }} {...props} />,
    h4: (props) => <h4 style={{ color: 'rebeccapurple' }} {...props} />,
    h5: (props) => <h5 style={{ color: 'rebeccapurple' }} {...props} />,
    h6: (props) => <h6 style={{ color: 'rebeccapurple' }} {...props} />,
    p: (props) => <p style={{ color: 'rebeccapurple' }} {...props} />,
    ...components,
  }
}