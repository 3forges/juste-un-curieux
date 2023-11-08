import React from "preact/compat";
/**
 * Inspired by https://codesandbox.io/s/react-with-tailwinds-drawer-bjbfr?file=/src/App.js:251-273
 **/
export function SocialDrawerCard() {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export interface SocialDrawerProps {
  children: any;
  isOpen: boolean;
  /**
   * The React Component State Hook to set the value of 'isOpen'
   */
  setIsOpen: any;
}
export default function SocialDrawer(props: SocialDrawerProps) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (props.isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (props.isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Header</header>
          {props.children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          props.setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
