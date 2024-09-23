export function RowFlexible({ children }) {
  return <section className={ "flex w-full h-screen gap-5 items-center flex-row" }>{children}</section>
}

export function ColFlexible({ children }) {
  return <section className={ "flex w-full h-screen gap-5 items-center flex-col" }>{children}</section>
}

export function Box({ children, }) {}
export function Grid({ children }) {}