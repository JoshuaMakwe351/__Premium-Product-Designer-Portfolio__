"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = { kind: "idle" | "error" | "success"; msg: string };

/**
 * Contact form with client-side validation and loading/success/error states.
 * Ships as a mailto: composer by default — swap `handleSubmit` for a POST to
 * your API route / Formspree / Resend endpoint for real delivery.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle", msg: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      setStatus({
        kind: "error",
        msg: !name ? "Please enter your name." : !emailOk ? "Please enter a valid email address." : "Please add a short message.",
      });
      return;
    }

    setSending(true);
    const company = String(data.get("company") ?? "");
    const type = String(data.get("type") ?? "");
    const budget = String(data.get("budget") ?? "");
    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})${company ? `\nCompany: ${company}` : ""}${type ? `\nProject type: ${type}` : ""}${budget ? `\nBudget: ${budget}` : ""}`
    );
    setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${body}`;
      setStatus({ kind: "success", msg: "Thanks — opening your email client to send." });
      setSending(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" className="field" type="text" placeholder="Name *" aria-label="Name" required />
        <input name="email" className="field" type="email" placeholder="Email *" aria-label="Email" required />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="company" className="field" type="text" placeholder="Company" aria-label="Company" />
        <select name="type" className="field" aria-label="Project type" defaultValue="">
          <option value="">Project type</option>
          {["Enterprise SaaS", "Fintech", "AI Product", "Mobile App", "Web App", "Landing Page", "Design System", "Other"].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <input name="budget" className="field" type="text" placeholder="Budget (optional)" aria-label="Budget" />
      <textarea name="message" className="field resize-y" rows={5} placeholder="Tell me about your project… *" aria-label="Message" required />
      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-fit items-center gap-2.5 rounded-full bg-fg px-7 py-4 text-[15px] font-semibold text-bg transition-opacity disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send message →"}
      </button>
      <div
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm"
        style={{ color: status.kind === "error" ? "#ef4444" : "var(--accent)" }}
      >
        {status.msg}
      </div>
    </form>
  );
}
