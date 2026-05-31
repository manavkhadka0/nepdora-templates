"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <p className="prose" role="status">
        Your message is on its way. Saunak&apos;s team will respond shortly.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">
          Name
        </label>
        <input
          className="contact-form__input"
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
        />
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="org">
          Organization
        </label>
        <input
          className="contact-form__input"
          id="org"
          name="org"
          type="text"
          autoComplete="organization"
        />
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="event-type">
          Event type
        </label>
        <select
          className="contact-form__select"
          id="event-type"
          name="eventType"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="training">Training</option>
          <option value="seminar">Peak Seminar</option>
          <option value="coaching">Coaching</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contact-form__textarea"
          id="message"
          name="message"
          required
          rows={5}
        />
      </div>
      <button
        className="contact-form__submit"
        type="submit"
        disabled={loading}
        data-state={loading ? "loading" : undefined}
      >
        {loading ? "Sending…" : "Begin a chapter →"}
      </button>
    </form>
  );
}
