"use client";

import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  // Helper function to get icon SVG by label
  const getIcon = (label: string) => {
    switch (label) {
      case "AI Chat Tool Ethics":
        return (
          // Ethical balance scales icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v10m-7 7h14" />
            <path d="M5 13a4 4 0 0 0 7 0" />
            <path d="M19 13a4 4 0 0 1-7 0" />
          </svg>
        );
      case "AI Chat Tool Impact Writing":
        return (
          // Document/paper icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M9 12h6m-6 4h6m2 4H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l5 5v11a2 2 0 0 1-2 2z" />
          </svg>
        );
      case "New Chat":
        return (
          // Plus circle icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8m-4-4h8" />
          </svg>
        );
      case "Clear Conversations":
        return (
          // Trash bin icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6m4-6v6" />
            <path d="M9 6V4h6v2" />
          </svg>
        );
      case "Light Mode":
        return (
          // Sun icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        );
      case "My Account":
        return (
          // User icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
          </svg>
        );
      case "Updates and FAQ":
        return (
          // Info icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
      case "Log Out":
        return (
          // Log out icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        );
      default:
        return null;
    }
  };

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
                  {getIcon(label)}
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
                label === "Log Out" ? "text-red-600" : "text-gray-700"
              }`}
            >
              {getIcon(label)}
              {label}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
