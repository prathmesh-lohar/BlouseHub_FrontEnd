"use client";

import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import React, { useState } from "react";

// small heart icon used in multiple places
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-6.7-4.35-9.33-8.2C.86 10.1 1.2 6.9 3.6 5.1 5.6 3.6 8.3 4 10 6c.7.85 1.3 1.7 2 2.55C12.7 7.7 13.3 6.85 14 6c1.7-2 4.4-2.4 6.4-.9 2.4 1.8 2.74 5 .93 7.7C18.7 16.65 12 21 12 21z" />
    </svg>
  );
}

// all custom SVGs to match the reference exactly
const benefitIcons = {
  custom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18L18 6" />
      <path d="M18 18L6 6" />
      <circle cx="5" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <path d="M19 5c1.5 1.5 2 4 0 5.5s-4 .5-5.5-1" />
    </svg>
  ),
  fabric: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="7" rx="5" ry="3" />
      <ellipse cx="12" cy="7" rx="2" ry="1.2" />
      <path d="M7 7v8c0 1.66 2.24 3 5 3s5-1.34 5-3V7" />
      <path d="M17 11h3.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H12" />
    </svg>
  ),
  tailor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5 19c0-3 2.5-5.5 6-5.5M19 19c0-3-2.5-5.5-6-5.5" />
      <path d="M9.5 13.5L12 17.5l2.5-4" />
      <path d="M5 19h14" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 16h13V6H2v10z" />
      <path d="M15 9h4l3 3v4h-7V9z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
      <line x1="5" y1="13" x2="11" y2="7" />
      <line x1="8" y1="13" x2="13" y2="8" />
    </svg>
  ),
};

const benefits = [
  {
    title: "Custom Designed for You",
    description: "Design your dream blouse your way.",
    icon: benefitIcons.custom,
  },
  {
    title: "Premium Quality Fabrics",
    description: "Handpicked fabrics for premium look & feel.",
    icon: benefitIcons.fabric,
  },
  {
    title: "Expert Tailors",
    description: "Skilled & experienced tailors for perfect fit.",
    icon: benefitIcons.tailor,
  },
  {
    title: "Pan India Delivery",
    description: "We deliver across India safely and on time.",
    icon: benefitIcons.delivery,
  },
];

const formIcons = {
  user: (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  ),
  phone: (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  email: (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  lock: (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  ),
  eye: (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  ),
  arrow: (
    <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  ),
  phoneSolid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
};

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signin-outer">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .signin-outer {
          min-height: 100vh;
          background: #FFF4F6;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #222222;
          -webkit-font-smoothing: antialiased;
        }
        .signin-main {
          padding: 2rem 1rem;
          max-width: 1360px;
          margin: 0 auto;
        }
        @media (min-width: 640px) { .signin-main { padding: 2rem 1.5rem; } }
        @media (min-width: 1024px) { .signin-main { padding: 1rem 1rem; } }

        .signin-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid #FEEBF2;
          padding: 2rem;
          box-shadow: 0 10px 40px rgba(226, 23, 97, 0.06);
        }
        @media (min-width: 640px) { .signin-card { padding: 3rem; } }
        @media (min-width: 1024px) { .signin-card { padding: 4rem; } }

        /* Core Fix: Full background and curve design */
        .signin-floral {
          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;
          z-index: 0;
          width: 480px; /* Expands to cover full side */
          pointer-events: none;
        }
        .signin-floral img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures coverage and allows curve placement */
          object-position: left bottom; /* Pin to left/bottom to maintain alignment */
          opacity: 1; /* Keep fully visible as requested */
        }

        .signin-grid {
          position: relative;
          z-index: 10;
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .signin-grid { grid-template-columns: 1.05fr auto 1fr; gap: 2rem; }
        }

        /* Core Fix: Increased left-col margin to prevent overlap with expanded flowers */
        .left-col {
            margin-left: 47px;
          display: flex;
          flex-direction: column;
          padding-top: 1rem;
          position: relative;
          z-index: 10;
          padding-left: 2rem; /* Initial margin for separation */
        }
        @media (min-width: 1024px) {
          .left-col { padding-left: 3.5rem; } /* Substantial shift right on desktop */
        }

        .headline { text-align: center; }
        @media (min-width: 1024px) { .headline { text-align: center;         margin-top: -25px;} }
        .headline h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: 35px;
          color: #1A1116;
          line-height: 1.15;
          margin: 0;
        }
        .headline p {
          margin: 0.875rem 44px 0px;
          font-size: 19px;
          font-weight: 500;
          color: #6B5A65;
        }

        .divider-row {
          margin: 1.5rem auto 0;
          display: flex;
          align-items: center;
          gap: 0.875rem;
          max-width: 293px;
        }
        @media (min-width: 1024px) { .divider-row { margin-left: 66px; margin-right: 0; } }
        .divider-line { height: 1px; flex: 1; background: #E8D4A2; }
        .divider-heart { color: #E21761; width: 13px; height: 13px; flex-shrink: 0; }

        .benefits {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 1024px) { .benefits { margin-left: 55px; margin-right: 0; } }
        .benefit-row { display: flex; align-items: center; gap: 1.5rem; }
        .benefit-icon {
          display: flex;
          height: 52px;
          width: 52px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: #FFEBF2;
          border: 1px solid #FFE3EE;
        }
        .benefit-icon svg { width: 26px; height: 26px; color: #E21761; }
        .benefit-title { font-size: 15px; font-weight: 700; color: #1A1116; margin: 0; }
        .benefit-desc { margin: 3px 0 0; font-size: 13.5px; font-weight: 500; color: #6B5A65; }

        .center-divider { display: none; }
        @media (min-width: 1024px) {
          .center-divider {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-self: stretch;
            position: relative;
            padding: 0 1.5rem;
          }
        }
        .center-divider .line {
          width: 1px;
          height: 100%;
          background: #F3E2E8;
        }
        .center-divider .heart-badge {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #ffffff;
          padding: 0.5rem 0;
          color: #E21761;
        }
        .center-divider .heart-badge svg { width: 13px; height: 13px; }

        .right-col { width: 100%; }
        @media (min-width: 1024px) { .right-col { padding-left: 1rem; } }

        .signin-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .field label {
          display: block;
          margin-bottom: 0.375rem;
          font-size: 14px;
          font-weight: 700;
          color: #1A1116;
        }
        .field-wrap { position: relative; }
        .field-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #E21761;
          display: flex;
        }
        .field-icon svg { width: 19px; height: 19px; }
        .field-wrap input {
          width: 100%;
          box-sizing: border-box;
          border-radius: 8px;
          border: 1px solid #E8D5DD;
          background: #ffffff;
          padding: 0.75rem 1rem 0.75rem 3rem;
          font-size: 14px;
          font-weight: 500;
          color: #1A1116;
          outline: none;
          font-family: inherit;
          transition: border-color 0.15s ease;
        }
        .field-wrap input::placeholder { color: #A0939A; }
        .field-wrap input:focus { border-color: #E21761; }
        .field-wrap.has-toggle input { padding-right: 3rem; }
        .toggle-btn {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #999999;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
        }
        .toggle-btn svg { width: 19px; height: 19px; }

        .forgot-password {
          text-align: right;
          margin-top: -0.5rem;
        }
        .forgot-password a {
          font-size: 14px;
          font-weight: 600;
          color: #E21761;
          text-decoration: none;
        }
        .forgot-password a:hover {
          text-decoration: underline;
        }

        .remember-me { display: flex; align-items: center; gap: 0.625rem; padding-top: 0.5rem; }
        .remember-me input[type="checkbox"] {
          height: 19px;
          width: 19px;
          border-radius: 5px;
          border: 1px solid #D5C2CA;
          accent-color: #E21761;
          cursor: pointer;
          flex-shrink: 0;
        }
        .remember-me label { font-size: 14px; font-weight: 600; color: #6B5A65; cursor: pointer; }

        .submit-btn {
          width: 100%;
          margin-top: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border-radius: 8px;
          background: #E21761;
          padding: 0.875rem;
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          border: none;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          transition: background 0.15s ease;
          font-family: inherit;
        }
        .submit-btn:hover { background: #C91857; }
        .submit-btn svg { width: 17px; height: 17px; }

        .or-row {
          margin: 1.75rem 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.875rem;
          font-size: 13px;
          font-weight: 700;
          color: #A0939A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .or-row .line { height: 1px; flex: 1; background: #E8D5DD; }

        .social-row { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
        @media (min-width: 640px) { .social-row { grid-template-columns: 1fr 1fr; } }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border-radius: 8px;
          border: 1px solid #F2D6E0;
          background: #ffffff;
          padding: 0.75rem 1rem;
          font-size: 15px;
          font-weight: 700;
          color: #444444;
          cursor: pointer;
          transition: background 0.15s ease;
          font-family: inherit;
        }
        .social-btn:hover { background: #f9fafb; }
        .social-btn svg { width: 22px; height: 22px; flex-shrink: 0; }
        .social-btn .phone-icon svg { width: 18px; height: 18px; color: #E21761; }

        .signup-row { margin-top: 2.5rem; text-align: center; font-size: 15px; font-weight: 500; color: #444444; }
        .signup-row a { margin-left: 0.375rem; font-weight: 700; color: #E21761; text-decoration: none; }
        .signup-row a:hover { text-decoration: underline; }
      `}} />

      <TopBanner />
      <Header />

      <main className="signin-main">
        <div className="signin-card">

          {/* Correct floral drawing placement - spans full left half with curve */}
          <div className="signin-floral">
            <img
              src="/images/left-floral.png"
              alt="Decorative floral artwork"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <div className="signin-grid">

            <div className="left-col">
              <div className="headline">
                <h1>Welcome Back</h1>
                <p>Sign in to continue your 
                  perfect blouse journey</p>

                <div className="divider-row">
                  <span className="divider-line" />
                  <HeartIcon className="divider-heart" />
                  <span className="divider-line" />
                </div>
              </div>

              <div className="benefits">
                {benefits.map((item) => (
                  <div key={item.title} className="benefit-row">
                    <div className="benefit-icon">{item.icon}</div>
                    <div>
                      <h2 className="benefit-title">{item.title}</h2>
                      <p className="benefit-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="center-divider">
              <div className="line" />
              <div className="heart-badge">
                <HeartIcon />
              </div>
            </div>

            <div className="right-col">
              <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
                <div className="field">
                  <label>Email Address</label>
                  <div className="field-wrap">
                    <span className="field-icon">{formIcons.email}</span>
                    <input type="email" placeholder="Enter your email address" />
                  </div>
                </div>

                <div className="field">
                  <label>Password</label>
                  <div className="field-wrap has-toggle">
                    <span className="field-icon">{formIcons.lock}</span>
                    <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-btn">
                      {formIcons.eye}
                    </button>
                  </div>
                </div>

                <div className="forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>

                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Sign In</span>
                  {formIcons.arrow}
                </button>
              </form>

              <div className="or-row">
                <span className="line" />
                <span>or continue with</span>
                <span className="line" />
              </div>

              <div className="social-row">
                <button type="button" className="social-btn">
                  <svg viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-8.87z"/>
                    <path fill="#34A853" d="M12 24c3.3 0 6.08-1.09 8.11-2.96l-3.88-3.05c-1.1.74-2.5 1.18-4.23 1.18-3.25 0-6.01-2.19-6.99-5.14H1.01v3.15C3.06 21.3 7.24 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.01 14.03c-.25-.74-.39-1.54-.39-2.03s.14-1.29.39-2.03V6.82H1.01C.37 8.1.01 9.54.01 11s.36 2.9 1 4.18l4-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.8 0 3.41.62 4.68 1.82l3.51-3.51C18.07 1.19 15.3 0 12 0 7.24 0 3.06 2.7 1.01 6.82l4 3.15c.98-2.95 3.74-5.22 6.99-5.22z"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button type="button" className="social-btn">
                  <span className="phone-icon">{formIcons.phoneSolid}</span>
                  <span>Phone OTP</span>
                </button>
              </div>

              <p className="signup-row">
                Don&apos;t have an account?
                <a href="#">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
