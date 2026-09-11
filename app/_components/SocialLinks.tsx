function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M15 8.5h-2c-.28 0-.5.22-.5.5v2h2.4l-.35 2.5H12.5V21h-3v-7.5H8V11h1.5V8.8C9.5 6.6 10.8 5 13.2 5H15v3.5Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2 1.7 3.5 3.7 3.8v2.6c-1.4 0-2.7-.4-3.7-1.1v6.4a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.7a2.6 2.6 0 1 0 1.8 2.5V3h2.6Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H4.56V19h2.38V8.5ZM5.75 4.5a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75ZM19.5 19h-2.38v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V19H10.7V8.5h2.28v1.43h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68V19Z" />
    </svg>
  );
}

const platforms = [
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "TikTok", href: "#", Icon: TikTokIcon },
  { name: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

export default function SocialLinks({ className = "social-row" }: { className?: string }) {
  return (
    <div className={className}>
      {platforms.map(({ name, href, Icon }) => (
        <a href={href} key={name} aria-label={`Endeavor Cleaning on ${name}`}>
          <Icon />
        </a>
      ))}
    </div>
  );
}
