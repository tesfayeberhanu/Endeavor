import Link from "next/link";

export default function MobileContactBar() {
  return (
    <nav className="mobile-contact-bar" aria-label="Quick contact">
      <a href="tel:+971529597778"><span aria-hidden="true">☎</span>Call</a>
      <a href="https://wa.me/971588754060"><span aria-hidden="true">◉</span>WhatsApp</a>
      <Link href="/book"><span aria-hidden="true">▣</span>Book Now</Link>
    </nav>
  );
}

