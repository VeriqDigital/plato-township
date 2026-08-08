"use client";

import { useState, type FormEvent } from "react";

const fieldClassName =
  "mt-2 w-full border border-(--line) bg-white px-4 py-3 text-base text-(--ink) outline-none transition placeholder:text-(--ink-muted)/60 focus:border-(--red) focus:ring-2 focus:ring-(--red)/15";

const ContactForm = () => {
  const [showDemoMessage, setShowDemoMessage] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowDemoMessage(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby="contact-form-demo-note"
      className="bg-(--mist) p-6 sm:p-8 lg:p-10"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-(--navy)">
        General Contact Form
      </h2>
      <p
        id="contact-form-demo-note"
        className="mt-3 max-w-xl text-base leading-7 text-(--ink-muted)"
      >
        This is a demonstration form. Messages are not sent from this website
        preview.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="text-sm font-semibold text-(--navy)">
            First Name
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="last-name" className="text-sm font-semibold text-(--navy)">
            Last Name
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-sm font-semibold text-(--navy)">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-(--navy)">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className={`${fieldClassName} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex bg-(--red) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--red-dark)"
      >
        Send Message
      </button>

      {showDemoMessage && (
        <p
          role="status"
          className="mt-5 border-l-4 border-(--red) bg-white px-4 py-3 text-sm leading-6 text-(--navy)"
        >
          Messaging will be enabled for the production site. No message was
          delivered from this demo.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
