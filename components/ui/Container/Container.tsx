import { ReactNode,FC,ComponentType,HTMLAttributes } from "react";



interface Props {
    children: ReactNode | ReactNode[]
    Element?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container:FC<Props>= ({children,Element:Component="div"}) => {
  return (
  <Component className="px-6 mx-auto max-w-8xl">
      {children}
  </Component>
  )
};

export default Container;
