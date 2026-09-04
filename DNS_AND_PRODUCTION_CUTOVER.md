# My Huckleberry Life — DNS and Production Cutover

**Domain:** `myhuckleberrylife.com`  
**Authoritative DNS:** GoDaddy (`ns55.domaincontrol.com`, `ns56.domaincontrol.com`)  
**Current production host:** Vercel project `my-huckleberry-life` in team `My Huckleberry`

## 1. Repair email authentication first

The current root SPF record is invalid:

```text
v=spf1 include:spf.protection.outlook.com include:_spf.mlsens.com-all
```

Replace that single TXT value with:

```text
v=spf1 include:spf.protection.outlook.com include:_spf.mlsend.com -all
```

This preserves Microsoft 365 authorization, corrects the MailerLite hostname, and puts the required space before the final `-all` mechanism. Keep exactly one SPF record at the root.

Add the MailerLite DKIM record shown in **MailerLite → Account settings → Domains → myhuckleberrylife.com → Authenticate**. MailerLite’s standard record is:

| Type | Name / Host | Value / Target |
|---|---|---|
| CNAME | `litesrv._domainkey` | `litesrv._domainkey.mlsend.com` |

Before saving, compare the target with the value displayed in the account. The account value is the final authority.

Do not delete these working records:

| Record | Current status |
|---|---|
| MailerLite domain-verification TXT | Present |
| Microsoft 365 DKIM selectors 1 and 2 | Present |
| DMARC with `p=quarantine` | Present and valid |
| Microsoft 365 MX | Present |

## 2. Verify email authentication

After DNS propagates, run MailerLite’s **Check DNS Records** action. SPF and DKIM must both show approved. Then verify publicly:

```text
SPF: valid
DKIM: litesrv._domainkey.myhuckleberrylife.com resolves by CNAME
DMARC: valid, p=quarantine
```

Submit one controlled address through the live form. Confirm all of the following before sending traffic:

1. The website shows the success panel.
2. The confirmation email reaches Inbox rather than Spam.
3. The From name and Reply-To address are correct.
4. The confirmation link updates the subscriber in MailerLite.
5. The tagged checklist PDF opens.
6. Unsubscribe works.

## 3. Publish the repaired site

The repaired project includes:

- real Privacy, Contact, Affiliate Disclosure, Checklist, and 404 routes;
- resilient MailerLite forms with the correct `fields[email]` name and no-JavaScript fallback;
- Vercel Analytics events for signup attempts, successes, errors, and checklist downloads;
- tagged accessible PDF plus the interactive HTML checklist;
- canonical, Open Graph, Twitter Card, JSON-LD, robots, sitemap, manifest, and favicon data;
- `www` to apex host normalization;
- long-lived caching for versioned assets;
- CSP, framing, referrer, MIME, permissions, and opener security headers.

Publish the verified checkpoint from the Manus management panel. When binding the existing custom domain, make `myhuckleberrylife.com` primary and redirect `www.myhuckleberrylife.com` to the apex host. Do not change the domain until the preview checks pass.

## 4. Acceptance checks after cutover

| Check | Required result |
|---|---|
| `/` | `200`, correct landing page |
| `/privacy-policy` | `200`, real policy |
| `/contact` | `200`, working email link |
| `/affiliate-disclosure` | `200`, clear disclosure |
| `/checklist` | `200`, all 27 checks |
| `/robots.txt` | `200`, sitemap reference |
| `/sitemap.xml` | `200`, five public routes |
| nonexistent path | branded 404 experience |
| `www` URL | permanent redirect to apex |
| response headers | CSP, no-sniff, referrer, permissions, framing protection |
| mobile width | no horizontal overflow |
| keyboard | skip link first, form error associated, checklist operable |
| form events | attempt, success, error, and download visible in Vercel Analytics |

## 5. Rollback rule

If the repaired site has a form or routing regression, restore the prior Vercel production deployment while leaving the corrected SPF, DKIM, DMARC, and MX records in place. Email-authentication repairs are independent of the webpage deployment and should not be rolled back unless Microsoft 365 or MailerLite testing shows a verified mail failure.
