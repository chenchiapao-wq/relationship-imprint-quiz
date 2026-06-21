import { HeartHandshake, Sparkles } from "lucide-react";

export function DecorativeMark() {
  return (
    <div className="decorative-mark" aria-hidden="true">
      <div className="mark-panel">
        <div className="mark-glass" />
        <div className="mark-ribbon" />
        <div className="mark-circle mark-circle-large" />
        <div className="mark-circle mark-circle-small" />
        <div className="mark-line" />
        <div className="mark-icon">
          <HeartHandshake size={58} strokeWidth={1.15} />
        </div>
        <Sparkles className="mark-sparkle" size={28} strokeWidth={1.25} />
      </div>
    </div>
  );
}
