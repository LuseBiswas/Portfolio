"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

function FieldWrapper({ children }) {
  // Adds the little * badge on the top-right corner
  return (
    <div className="relative">
      <span className="pointer-events-none absolute -right-[clamp(6px,0.8vw,10px)] -top-[clamp(6px,0.8vw,10px)] inline-flex h-[clamp(20px,2.4vw,28px)] w-[clamp(20px,2.4vw,28px)] items-center justify-center rounded-full border border-neutral-200 bg-white text-[clamp(11px,1.3vw,16px)] text-neutral-700 shadow-sm">
        *
      </span>
      {children}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function validateForm(data) {
    const newErrors = {};

    // Name validation
    if (!data.name || data.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!data.email || data.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!data.message || data.message.trim() === "") {
      newErrors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  }

  function clearFieldError(fieldName) {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
    if (status === "sent" || status === "error") {
      setStatus("idle");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const data = {
      name: form.elements.namedItem("name")?.value,
      email: form.elements.namedItem("email")?.value,
      message: form.elements.namedItem("message")?.value,
    };

    // Validate
    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("sent");
      form.reset();
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mt-[clamp(32px,4.5vw,80px)] pb-[clamp(40px,6vw,80px)]">
      <div className="mx-auto w-full max-w-[min(1600px,92vw)] px-[clamp(20px,6vw,128px)]">
        <div
          className="grid items-start gap-[clamp(20px,5vw,80px)]
                     md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          {/* Left: copy */}
          <div>
            <h2 className="font-dm-sans font-semibold text-[#33322e] text-[clamp(18px,2.6vw,40px)]">
              Let's Work Together
            </h2>
            <p className="mt-[clamp(10px,1.4vw,16px)] max-w-[48ch] text-[clamp(12px,1.4vw,18px)] leading-relaxed text-neutral-700">
              If you&apos;re interested to maximize your and your team&apos;s efficiency,
              send me a message to get started.
            </p>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col"
            noValidate
            aria-label="Contact form"
          >
            <div className="space-y-[clamp(12px,1.6vw,20px)]">
              <div>
                <FieldWrapper>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                    placeholder="Name"
                    onChange={() => clearFieldError("name")}
                    className={`w-full rounded-xl border bg-white px-[clamp(12px,1.6vw,20px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(13px,1.5vw,18px)] text-[#33322e] shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-200 focus:ring-neutral-400"
                    }`}
                  />
                </FieldWrapper>
                {errors.name && (
                  <p className="mt-[clamp(4px,0.6vw,6px)] text-[clamp(11px,1.2vw,14px)] text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <FieldWrapper>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="Email"
                    onChange={() => clearFieldError("email")}
                    className={`w-full rounded-xl border bg-white px-[clamp(12px,1.6vw,20px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(13px,1.5vw,18px)] text-[#33322e] shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-200 focus:ring-neutral-400"
                    }`}
                  />
                </FieldWrapper>
                {errors.email && (
                  <p className="mt-[clamp(4px,0.6vw,6px)] text-[clamp(11px,1.2vw,14px)] text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <FieldWrapper>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : "false"}
                    placeholder="Your Message"
                    rows={6}
                    onChange={() => clearFieldError("message")}
                    className={`w-full resize-y rounded-xl border bg-white px-[clamp(12px,1.6vw,20px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(13px,1.5vw,18px)] text-[#33322e] shadow-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-200 focus:ring-neutral-400"
                    }`}
                  />
                </FieldWrapper>
                {errors.message && (
                  <p className="mt-[clamp(4px,0.6vw,6px)] text-[clamp(11px,1.2vw,14px)] text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-[clamp(16px,2vw,24px)]">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-[clamp(6px,0.8vw,10px)] rounded-xl border border-black bg-neutral-900 px-[clamp(14px,2vw,24px)] py-[clamp(10px,1.4vw,16px)] text-[clamp(13px,1.5vw,18px)] font-medium text-white shadow-sm hover:bg-neutral-800 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send me a message"}
                <ArrowRight className="w-[clamp(14px,1.6vw,18px)] h-[clamp(14px,1.6vw,18px)]" aria-hidden />
              </button>

              {status === "sent" && (
                <p className="mt-[clamp(10px,1.4vw,16px)] text-[clamp(12px,1.3vw,16px)] text-green-700">Thanks! I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="mt-[clamp(10px,1.4vw,16px)] text-[clamp(12px,1.3vw,16px)] text-red-700">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
