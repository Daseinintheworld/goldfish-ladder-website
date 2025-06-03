"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <aside
      className={`bg-white shadow-md transition-all duration-300 overflow-hidden h-screen flex flex-col ${
        isOpen ? "w-64" : "w-12"
      }`}
    >
      {/* Top Section */}
      <div className="p-3 flex flex-col gap-3">
        <button
          className="self-end p-1 hover:bg-gray-100 rounded transition duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          )}
        </button>

        {isOpen && (
          <>
            <button className="bg-black text-white text-sm py-2 px-3 rounded transition duration-200 hover:opacity-90">
              + New Chat
            </button>

            <nav className="flex flex-col text-sm gap-2 mt-2">
              {[
                "AI Chat Tool Ethics",
                "AI Chat Tool Impact Writing",
                "New Chat",
              ].map((label, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-2 text-left hover:bg-gray-100 px-3 py-2 rounded transition duration-200"
                >
                  <Image
                    src="/path/to/icon.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                  {label}
                </button>
              ))}
            </nav>
          </>
        )}
      </div>

      {/* Middle Section */}
      {isOpen && (
        <div className="flex-1 overflow-auto px-3 text-sm text-gray-500">
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-400">No recent chats</p>
          </div>
        </div>
      )}

      {/* Bottom Section */}
      {isOpen && (
        <div className="p-3 border-t text-sm flex flex-col gap-2">
          {[
            "Clear Conversations",
            "Light Mode",
            "My Account",
            "Updates and FAQ",
            "Log Out",
          ].map((label, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-2 text-left hover:bg-gray-100 px-3 py-2 rounded transition duration-200 ${
                label === "Log Out" ? "text-red-600" : ""
              }`}
            >
              <Image
                src="/path/to/icon.png"
                alt=""
                width={16}
                height={16}
              />
              {label}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
