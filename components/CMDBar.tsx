'use client'
import {
    Action,
    KBarAnimator,
    KBarPortal,
    KBarPositioner,
    KBarProvider,
    KBarResults,
    KBarSearch,
    useKBar,
    useMatches,
  } from "kbar";
  import React, { HTMLAttributes } from "react";
import { KBarProviderWrapper } from "./KBarProvider";

  interface CommandBarProps extends HTMLAttributes<HTMLElement> {
    actions: Action[];
  }
  
  const CMDBar: React.FC<CommandBarProps> = ({ actions, children }) => {
    return (
      <KBarProviderWrapper>

        <KBarPortal>
          <KBarPositioner className="bg-black/50 backdrop-blur-sm">
            <KBarAnimator className="bg-white rounded-xl shadow-xl flex flex-col gap-4 w-[35rem] overflow-hidden">
            <KBarSearchWrapper />
              <SearchResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProviderWrapper>

    );
  };
  const KBarSearchWrapper = React.forwardRef<HTMLInputElement>((props, ref) => {
      const { query } = useKBar();
      const inputRefSetter = (el: HTMLInputElement) => {
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
        }
      };
  
    return (
      <KBarSearch
        {...props}
        className="w-full outline-none px-6 py-4 text-black"
        ref={inputRefSetter} // Attach the ref here
      />
    );
  });
  
  const SearchResults = () => {
    const { results } = useMatches();
  
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            // Section header
            <div className="text-sm uppercase px-4 pt-3 pb-1 text-neutral-500 font-bold">
              {item}
            </div>
          ) : (
            // Single action
            <div
              className={`text-black flex px-4 py-3 ${
                active ? "bg-[#eeeeee]" : "bg-transparent"
              }`}
            >
              {item.name}
            </div>
          )
        }
      />
    );
  };
  
  export default CMDBar;