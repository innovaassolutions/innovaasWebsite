"use client";
import { useState } from "react";

const INTEREST_OPTIONS = [
  { value: "", label: "Select what you're interested in…" },
  { value: "distribution-vendor", label: "Distribution — I'm a vendor seeking a regional partner" },
  { value: "distribution-buyer", label: "Distribution — I want to source technology" },
  { value: "digital-readiness", label: "Digital Readiness Assessment" },
  { value: "consulting", label: "Consulting & Advisory Services" },
  { value: "custom-software", label: "Custom AI-Powered Software" },
  { value: "web-development", label: "Web Design & Development" },
  { value: "agentic-ai", label: "Agentic AI Systems" },
  { value: "flowforge", label: "FlowForge — AI Assessment Platform" },
  { value: "novakms", label: "NovaKMS — AI Knowledge Management" },
  { value: "novapredict", label: "NovaPredict — Predictive Maintenance" },
  { value: "systems-integration", label: "Systems Integration & Data Infrastructure" },
  { value: "other", label: "Something else" },
];

const NOVACRM_API_URL =
  process.env.NEXT_PUBLIC_NOVACRM_API_URL || "https://nova-cyan-mu.vercel.app";
const NOVACRM_API_KEY = process.env.NEXT_PUBLIC_NOVACRM_LEAD_API_KEY || "";

interface FormData {
  name: string;
  email: string;
  organization_name: string;
  role: string;
  interest: string;
  notes: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-line-strong bg-ink-950 px-4 py-3 text-sm text-ink-50 placeholder:text-ink-400 outline-none transition-colors focus:border-signal-500";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-ink-400">
        {label.toUpperCase()}
        {required && <span className="text-signal-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    organization_name: "",
    role: "",
    interest: "",
    notes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(`${NOVACRM_API_URL}/api/leads/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(NOVACRM_API_KEY ? { "X-Api-Key": NOVACRM_API_KEY } : {}),
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization_name: form.organization_name || undefined,
          role: form.role || undefined,
          interest: form.interest || undefined,
          notes: form.notes || undefined,
          page_slug: "innovaas-website",
          source: "innovaas-contact",
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Request failed (${res.status})`);
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="bg-ink-950 text-ink-100">
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="mb-6 font-mono text-xs tracking-[0.28em] text-signal-500">
            06 / CONTACT
          </p>
          <h1
            className="m-0 max-w-4xl uppercase leading-[0.95] tracking-tight text-ink-50"
            style={{ fontFamily: "var(--font-anton)", fontWeight: 400 }}
          >
            <span className="text-[clamp(2.4rem,6vw,4.6rem)]">
              Open a <span className="text-signal-500">channel.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Vendor, buyer, or builder — tell us what you&apos;re working on and
            we&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_320px]">
          <div className="rounded-lg border border-line bg-ink-900 p-8 md:p-10">
            {status === "success" ? (
              <div className="py-12 text-center">
                <p className="font-mono text-xs tracking-[0.28em] text-signal-500">
                  MESSAGE RECEIVED
                </p>
                <h3
                  className="mt-4 text-2xl font-semibold text-ink-50"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thanks — we&apos;ll be in touch shortly.
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm text-ink-300">
                  We&apos;ve received your message and will reach out within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Work email" required>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      name="organization_name"
                      value={form.organization_name}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Role">
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="VP of Operations"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Interest">
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={`${inputClass} ${form.interest ? "" : "text-ink-400"}`}
                  >
                    {INTEREST_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.value === ""}
                        style={{ color: "#181f2a" }}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Tell us more">
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What are you trying to move, build, or fix? Anything helps."
                    className={inputClass}
                  />
                </Field>

                {status === "error" && (
                  <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-md bg-signal-500 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-600 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <p className="text-center text-xs text-ink-400">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Direct channels */}
          <aside className="space-y-px self-start overflow-hidden rounded-lg border border-line bg-line">
            {[
              { k: "EMAIL", v: "info@innovaas.co", href: "mailto:info@innovaas.co" },
              { k: "ENTITY", v: "Innovaas Solutions Pte. Ltd." },
              { k: "HEADQUARTERS", v: "Singapore" },
              { k: "RESPONSE TIME", v: "Within one business day" },
            ].map((row) => (
              <div key={row.k} className="bg-ink-900 px-6 py-5">
                <p className="m-0 font-mono text-[11px] tracking-[0.22em] text-ink-400">{row.k}</p>
                {row.href ? (
                  <a
                    href={row.href}
                    className="mt-1 block text-sm font-medium !text-ink-100 hover:!text-signal-400"
                  >
                    {row.v}
                  </a>
                ) : (
                  <p className="m-0 mt-1 text-sm font-medium text-ink-100">{row.v}</p>
                )}
              </div>
            ))}
          </aside>
        </div>
      </section>
    </div>
  );
}
