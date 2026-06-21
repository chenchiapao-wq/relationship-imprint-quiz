import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

interface ButtonLinkProps {
  to: string;
  children: string;
  variant?: "primary" | "ghost" | "light";
  eventName?: string;
}

export function ButtonLink({ to, children, variant = "primary", eventName }: ButtonLinkProps) {
  return (
    <Link
      className={`button button-${variant}`}
      to={to}
      onClick={() => eventName && trackEvent(eventName, { to })}
    >
      <span>{children}</span>
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
