import Link from "next/link";

export default function MobileContactBar() {
  return (
    <nav className="mobile-contact-bar" aria-label="Book a service">
      <Link href="/book">Book Now</Link>
    </nav>
  );
}
