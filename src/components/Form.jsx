import React, { useState } from 'react'

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  requirements: '',
  communicationMethod: '',
}

const IconUser = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c1.4-3.4 4.4-5.2 7.5-5.2s6.1 1.8 7.5 5.2" />
  </svg>
)

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="M4.5 7 12 13l7.5-6" />
  </svg>
)

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4h3l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2C10.4 20 4 13.6 4 6a2 2 0 0 1 2-2Z" />
  </svg>
)

const IconBuilding = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="3.5" width="10" height="17" rx="1" />
    <path d="M14 9.5h5.5a1 1 0 0 1 1 1V20a.5.5 0 0 1-.5.5H14M8 7.5h.01M11 7.5h.01M8 11h.01M11 11h.01M8 14.5h.01M11 14.5h.01" />
  </svg>
)

const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8s-1.1 5.7-3.3 8c-2.2-2.3-3.3-5-3.3-8s1.1-5.7 3.3-8Z" />
  </svg>
)

const IconMessage = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 5.5h16v10a1 1 0 0 1-1 1H9l-4 3.5V6.5a1 1 0 0 1 1-1Z" />
  </svg>
)

const IconVideo = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3.5" y="6" width="12" height="12" rx="2" />
    <path d="M15.5 10.2 20 7.5v9l-4.5-2.7" />
  </svg>
)

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 13l4 4L19 7" />
  </svg>
)

const IconDownload = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3.5v11m0 0 4-4m-4 4-4-4M5 17v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V17" />
  </svg>
)

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

const highlights = [
  'Tailored cloud & infrastructure solutions',
'Dedicated point of contact for your project',
'Straightforward, transparent communication',
'Scalable solutions built around your business needs',
'Reliable infrastructure with performance in mind',
'Proactive support and ongoing technical guidance',
'Secure and efficient cloud environments',
'Flexible solutions that grow with your business',
'Clear project planning with practical recommendations',
'Long-term partnership focused on your success'
]

const communicationOptions = [
  { value: 'Email', icon: IconMail },
  { value: 'Phone Call', icon: IconPhone },
  { value: 'Video Call (Zoom/Meet)', icon: IconVideo },
]

const fieldClasses =
  'w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition duration-200 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100'

const Form = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, name, value } = e.target
    setFormData((prev) => ({ ...prev, [name || id]: value }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

 const API =
  "https://ndqi0xh17h.execute-api.ap-south-1.amazonaws.com/default/contactform-details";

  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();


    if (!response.ok || !result.success) {
      throw new Error(result.message || "Form submission failed");
    }

    setIsSubmitted(true);
    setFormData(initialFormData);
  } catch (error) {
    console.error("Contact form submission:", error);

    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="flex min-h-screen w-full items-stretch justify-center bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-100">
      <div className="grid w-full overflow-hidden bg-white lg:grid-cols-[minmax(0,340px)_1fr]">
        <div className="flex flex-col justify-space-between gap-4 bg-gradient-to-br from-violet-700 via-indigo-700 to-slate-900 p-6 text-white sm:p-8 lg:p-10 xl:p-14 sticky ">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center rounded-xl bg-white p-2 shadow-md">
              <a href="https://www.vcloudmaster.com/">
                <img
                  src="https://www.vcloudmaster.com/assets/logo_3-CaoEdpo9.png"
                  alt="vcloudmaster"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Let&apos;s talk</h1>
              <p className="text-sm leading-relaxed text-violet-100">
                Share a few details about your project and our team will get back to you.
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-violet-50">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/15">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>

          <p className="hidden text-xs text-violet-200 lg:block">
            &copy; {new Date().getFullYear()} vcloudmaster. All rights reserved.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8 ">
            <section className="space-y-4 sm:space-y-5 py-10 px-10 ">

              <h2 className="relative mx-auto w-fit text-center text-base font-bold text-slate-900 after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-16 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-violet-600 after:via-indigo-500 after:to-purple-500 sm:text-lg">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IconUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IconUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="yourname@example.com"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <IconPhone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <IconBuilding className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="website" className="text-sm font-semibold text-slate-700">
                    Website (if applicable)
                  </label>
                  <div className="relative">
                    <IconGlobe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="requirements" className="text-sm font-semibold text-slate-700">
                    Share your requirement
                  </label>
                  <div className="relative">
                    <IconMessage className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows="5"
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or requirements..."
                      className={`${fieldClasses} resize-y`}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-3 sm:space-y-4">
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">Preferences</h2>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-700">Preferred Communication Method</p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {communicationOptions.map(({ value, icon: Icon }) => {
                    const checked = formData.communicationMethod === value
                    return (
                      <label
                        key={value}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition ${checked
                            ? 'border-violet-500 bg-violet-50 text-violet-700 ring-1 ring-violet-200'
                            : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-violet-300 hover:bg-violet-50'
                          }`}
                      >
                        <input
                          type="radio"
                          name="communicationMethod"
                          value={value}
                          checked={checked}
                          onChange={handleChange}
                          className="h-4 w-4 accent-violet-600"
                        />
                        <Icon className="h-4 w-4 flex-none" />
                        <span>{value}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            </section>

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                <span className="text-red-500">*</span> Required fields
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition duration-200 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
          onClick={() => setIsSubmitted(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <IconClose className="h-4 w-4" />
            </button>

            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <IconCheck className="h-6 w-6 text-emerald-600" />
            </span>

            <h3 className="mt-4 text-lg font-bold text-slate-900">Thank you!</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Your message has been recorded . Our team will get back to you soon.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/vcloudmaster_deck.pdf"
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                <IconDownload className="h-4 w-4" />
                Download PDF
              </a>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form
