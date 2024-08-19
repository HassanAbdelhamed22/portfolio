import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkMode from "../ui/DarkMode";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Education", href: "#education", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="mt-[1.2rem] sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center text-xl text-gray-800 dark:text-gray-200 bg-[#fafafa] dark:bg-[#252529] p-[0.7rem] rounded-3xl shadow-md hover:bg-gray-200 dark:hover:bg-[#1f1f22] transition-colors duration-300 ml-auto sm:ml-0 border dark:border-borderDark border-borderLight"
                  aria-label={open ? "Close main menu" : "Open main menu"}
                >
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Centered Links with Rounded Background (visible on lg screens and larger) */}
              <div className="hidden md:flex flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-full bg-[#fff] dark:bg-[rgba(40,40,48,0.8)] py-2 px-6 backdrop-blur-md shadow-md">
                    <div className="flex space-x-4">
                      {navigation.map((item) => {
                        const isActive = location.hash === item.href;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              isActive
                                ? "text-accent dark:text-accent"
                                : "text-lightText dark:text-darkText opacity-[0.9]",
                              "text-sm font-semibold hover:text-accent dark:hover:text-accent hover:opacity-[1] transition duration-300 delay-75",
                              "rounded-md px-3 py-2"
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Mode Toggle Button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DarkMode className="ml-auto sm:ml-0 " />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel>
            <div className="fixed inset-0 bg-[rgba(250,250,250,0.11)] dark:bg-[rgba(40,40,48,0.8)] z-10">
              <div className="flex flex-col items-center justify-center p-4 space-y-4 w-[85%] ml-auto mr-auto mt-[2rem] rounded-2xl py-4 px-8 dark:bg-darkBg backdrop:blur-md bg-white animate-customScale">
                <Disclosure.Button
                  className="self-end transition duration-300   text-subtitle hover:text-[#B22222] hover:rotate-180 "
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon
                    className="block w-8 h-8"
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                {navigation.map((item) => {
                  const isActive = location.hash === item.href;
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        "dark:text-darkText text-base font-semibold hover:text-accent hover:dark:text-accent hover:opacity-[1] transition duration-300",
                        "block py-2 border-b-[1px] w-full border-solid border-borderLight dark:border-borderDark last:border-none"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
