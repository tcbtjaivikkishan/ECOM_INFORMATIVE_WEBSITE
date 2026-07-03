export function HelpWidget() {
  return (
    <a
      href="https://meet.google.com/kjx-gerh-rda"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg bg-linear-to-br from-green-500 to-emerald-600 text-white grid place-items-center p-0 leading-none overflow-hidden"
      aria-label="Live Support"
      title="Live Support"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="block h-[19px] w-[19px] shrink-0 -translate-x-[2px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4.5A2.5 2.5 0 0 1 3 13V5.5Z" />
        <path d="M7 8.5h10" />
        <path d="M7 11.5h7" />
      </svg>
    </a>
  );
}
