import React from "react";

function ContactLinks() {
  return (
    <section id="contact">
      <h2 className="contact-text content-padding">CONTACT ME</h2>

      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="c8d96c95-6bec-43b3-a1a7-56940a757654"
        />
        <label className="contact-label">Full Name </label>
        <input type="text" name="name" required />
        <label className="contact-label"> </label>
        Email Address
        <input type="email" name="email" required />
        <label className="contact-label">Message </label>
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
          target="_blank"
        />
        <button type="submit" className="contact-submit">
          Submit Form
        </button>
      </form>

      <div id="contact-links">
        <a
          className="profile-link"
          href="https://www.freecodecamp.org/joff"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img
            src="/images/fcc.png"
            className="social"
            alt="joff's free code-camp portfolio"
          />
        </a>
        <a
          className="profile-link"
          href="https://twitter.com/JonathanSutto10"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <img
            src="/images/twitter.png"
            className="social"
            alt="joff's Twitter profile"
          />
        </a>
        <a
          className="profile-link"
          href="https://www.linkedin.com/in/jonathan-sutton-63375652/"
        >
          <img
            src="/images/linkedin.png"
            className="social"
            alt="joff's linkedin profile"
          />
        </a>
        <a className="profile-link" href="tel:07427585938">
          <img src="/images/phone.png" className="social" alt="call me" />
        </a>
      </div>
    </section>
  );
}

export default ContactLinks;
