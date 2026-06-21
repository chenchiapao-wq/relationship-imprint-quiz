import { HeartHandshake, Sparkles } from "lucide-react";

export function DecorativeMark() {
  return (
    <div className="decorative-mark" aria-hidden="true">
      <div className="mark-panel">
        <div className="mark-circle mark-circle-large" />
        <div className="mark-line" />
        <HeartHandshake size={54} strokeWidth={1.25} />
        <Sparkles className="mark-sparkle" size={28} strokeWidth={1.25} />
      </div>
    </div>
  );
}
