/**
 * Fort Myers Field Guide: signup is explicit, resilient, and candid. Errors
 * stay beside the field; success exposes the file without artificial delay.
 */
import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Download, LoaderCircle } from "lucide-react";
import { track } from "@vercel/analytics";

const ENDPOINT =
  "https://assets.mailerlite.com/jsonp/2503920/forms/193565643324262311/subscribe";
export const CHECKLIST_PDF_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/CAiMgFCNGxjcyygO.pdf";

function trackSignup(name: string, placement: string) {
  track(name, { placement });
}

type State = "idle" | "sending" | "success" | "error";

export function SignupForm({ placement = "top" }: { placement?: "top" | "bottom" }) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const noteId = `${inputId}-note`;
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackSignup("signup_attempt", placement);

    const form = event.currentTarget;
    const input = form.elements.namedItem("fields[email]") as HTMLInputElement;
    if (!input.checkValidity()) {
      setMessage("Enter a complete email address, like name@example.com.");
      setState("error");
      trackSignup("signup_error", placement);
      input.focus();
      return;
    }

    setState("sending");
    setMessage("");
    const body = new URLSearchParams();
    body.set("fields[email]", email.trim());
    body.set("ml-submit", "1");
    body.set("anticsrf", "true");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: body.toString(),
      });
      const result = await response.json().catch(() => ({ success: response.ok }));
      if (!response.ok || result?.success !== true) throw new Error("MailerLite rejected request");
      setState("success");
      trackSignup("signup_success", placement);
    } catch {
      setMessage(
        "The form did not go through. Try once more, or use the direct checklist link below.",
      );
      setState("error");
      trackSignup("signup_error", placement);
      input.focus();
    }
  }

  if (state === "success") {
    return (
      <section className="signup-success" role="status" tabIndex={-1} aria-label="Signup complete">
        <CheckCircle2 aria-hidden="true" />
        <div>
          <strong>You’re in. Here’s the checklist.</strong>
          <p>
            Download it now. Check your inbox too, then click the confirmation link so next
            week’s note can reach you.
          </p>
          <a
            className="button button-download"
            href={CHECKLIST_PDF_URL}
            download
            onClick={() => trackSignup("checklist_download", placement)}
          >
            <Download aria-hidden="true" /> Download the PDF
          </a>
        </div>
      </section>
    );
  }

  return (
    <form
      className="signup-form"
      action={ENDPOINT}
      method="post"
      onSubmit={onSubmit}
      noValidate
    >
      <label htmlFor={inputId}>Email address</label>
      <div className="signup-row">
        <input
          id={inputId}
          name="fields[email]"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          aria-invalid={state === "error" ? "true" : undefined}
          aria-describedby={`${noteId}${state === "error" ? ` ${errorId}` : ""}`}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state === "error") setState("idle");
          }}
        />
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <button className="button" type="submit" disabled={state === "sending"}>
          {state === "sending" ? (
            <>
              <LoaderCircle className="spinner" aria-hidden="true" /> Sending…
            </>
          ) : (
            "Send me the checklist"
          )}
        </button>
      </div>
      <p className="form-note" id={noteId}>
        No spam. One useful email a week. Unsubscribe anytime.
      </p>
      {state === "error" && (
        <p className="form-error" id={errorId} role="alert">
          {message}
        </p>
      )}
      <p className="form-fallback">
        Form trouble? <a href={CHECKLIST_PDF_URL}>Open the checklist directly</a>.
      </p>
    </form>
  );
}
