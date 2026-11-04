# galaxyconsultingllc.com — Email & Domain Migration Log

Goal: move the domain from HostGator to Cloudflare Registrar (DNS already in the
TurnstoneX Cloudflare account) and move email from HostGator cPanel mail to Google
Workspace. Owner decisions by Zaim; HostGator account owner is Charles Cooks.

Status as of **2026-10-31** — see "Open items" at the bottom.

## Accounts and contacts

| Item | Value |
|---|---|
| HostGator mail server | `gator3027.hostgator.com` (IMAP 993 / SMTP 465) |
| HostGator account owner | Charles Cooks (ccooks@galaxyconsultingllc.com) |
| Charles's personal Gmail (recovery email on the old Workspace tenant) | cooksc55@gmail.com |
| Cloudflare account | TurnstoneX (all client zones) |
| Cloudflare nameservers | `noah.ns.cloudflare.com`, `perla.ns.cloudflare.com` |
| Registrant contact (Cloudflare transfer) | Abdul Mirza / Galaxy Consulting LLC / galaxyconsultingllc@gmail.com |
| Google Workspace admin contact (planned) | Abdul Mirza, recovery galaxyconsultingllc@gmail.com |
| Google support case | 77069573 |
| Google Admin Toolbox recovery case | 77239317 (filed 2026-11-04) |

## Decisions

- **Workspace users (paid):** ccooks, amirza, bd, jjenkins.
- **Aliases (free, on bd@):** info, sales, admin, investments, scooks, agmirza, quotes,
  bills, fed-svcs, test. Their old mail is not migrated individually.
- **Local backup:** only ccooks, bd, sales, info are backed up locally (owner's call).
- **Do NOT recreate** the HostGator forwarder ccooks@ -> jnowiicki420@gmail.com
  (unrecognized; possible compromise) unless the owner says so.
- Website stays on Vercel (A `76.76.21.21`, `www` CNAME); transactional mail stays on
  Brevo/Resend `send` subdomain as before.

## Timeline

### 2026-10-30
- Cloudflare zone created and activated; 15 curated records, all DNS-only (Vercel,
  HostGator MX/mail, Resend `send` subdomain, old `MS=` TXT). cPanel plumbing records dropped.
- Domain transfer HostGator -> Cloudflare Registrar purchased ($10.46, paid by card).
- Google admin recovery case 77069573 filed. Google replied treating it as a
  "2SV enforcement extension for super admins" request, which confirmed that
  ccooks@galaxyconsultingllc.com is a super admin of a **dormant Google Workspace
  tenant that already owns the domain**. A fresh Workspace signup therefore fails
  with "domain no longer available".
- Local IMAP backup script written and run (see below).

### 2026-10-31
- Google extended the old tenant's 2SV enforcement by 60 days (to about 2026-12-30),
  so 2SV no longer blocks signing in as ccooks@. Only the password is missing.
- Backup verified complete: all four mailboxes re-run, only overnight mail was new.
- Google account recovery for ccooks@ accepts the recovery email cooksc55@gmail.com and
  sends a verification code there. First code was not seen by Charles; a second one was
  requested. Waiting on the code.
- Checked amirza@ and agmirza@galaxyconsultingllc.com: **neither exists at Google**.
  Only ccooks@ is in the old tenant.
- Fallback if the code never arrives: Google Admin Toolbox recovery form
  (`https://toolbox.googleapps.com/apps/recovery/form`), which verifies domain ownership
  by DNS record (we control the zone in Cloudflare). It has a reCAPTCHA, so a human must
  start it. Reviews can take up to 72 hours.
- Registry (RDAP) showed registrar Launchpad.com Inc. (HostGator), status
  `pending transfer`, NS already Cloudflare. Charles approved HostGator's
  outgoing-transfer email; HostGator says the transfer completes **2026-11-03**.

## Local mail backup

Location: `C:\Users\agmir\GalaxyMailBackup\` (outside the repo; never commit).

- `backup_imap.py` — downloads every IMAP folder to mbox. Run with
  `py -3 -I backup_imap.py creds_all.txt`. Re-runs are incremental (UID state in
  `mail/<mailbox>/_state.json`).
- `creds*.txt` — local-only credentials.
- `mail/<mailbox>/<folder>.mbox` — about 3.9 GB total.

| Mailbox | Messages (approx.) | Verified |
|---|---|---|
| ccooks@ | 9,300 inbox + Sent 2,073 + Trash 1,960 + spam 2,241 + folders | 2026-10-31 |
| info@ | 4,181 inbox + Sent/Trash/spam/folders | 2026-10-31 |
| bd@ | 1,396 inbox + Sent/Trash/spam | 2026-10-31 |
| sales@ | inbox + Sent/Trash/spam | 2026-10-31 |

Run one more incremental pass right before the MX cutover.

### 2026-11-04
- Mail to the domain started bouncing (Microsoft NDR "remote server is misconfigured")
  right after the registrar transfer. DNS at Cloudflare is intact (MX/SPF/mail A unchanged)
  and `mail.galaxyconsultingllc.com` (198.57.244.174 = gator3027) answers SMTP, accepts
  MAIL FROM and offers TLS; rejection must be at RCPT inside HostGator (domain likely
  dropped from cPanel / Email Routing flipped to Remote after the transfer). HostGator
  login not yet available; no verification code received at cooksc55@gmail.com.
- Owner chose the Admin Toolbox recovery form. Filed as ccooks@ / "I forgot my password" /
  contact galaxyconsultingllc@gmail.com -> case **77239317**. Google asks for a CNAME
  `77239317` -> `google.com` in the zone; added in Cloudflare (DNS only), verified by
  Google, request **submitted**. Google says automated review within 24-48 h, then an
  email with next steps to galaxyconsultingllc@gmail.com. The CNAME can be removed
  once the account is recovered.
- Google replied the same day with a KNOWLEDGE TEST. Answers were taken from the local
  ccooks@ backup and sent by the owner: tenant is **Cloud Identity Free**, Customer ID
  **02muc46p**, 1 user, last sign-in 03/06/2024, recovery email cooksc55@gmail.com,
  no billing (all payment questions N/A). Awaiting Google's decision.

## Remaining plan

1. Enter the Google verification code, set a new password for ccooks@, sign in to
   admin.google.com.
2. Create amirza@ as a second super admin (recovery galaxyconsultingllc@gmail.com);
   create bd@ and jjenkins@; add the ten aliases on bd@. Turn on 2SV for both admins
   before the extended deadline.
3. Verify the domain in Workspace (TXT in Cloudflare) if the old tenant asks for it.
4. Data Migration (IMAP from `gator3027.hostgator.com`) into each user while MX still
   points to HostGator; migrate the alias mailboxes into bd@.
5. Cutover: Google MX, SPF (`include:_spf.google.com`), DKIM, DMARC in Cloudflare.
   Final incremental IMAP sync after the cutover.
6. After 2026-11-03: confirm Cloudflare is the registrar; respond to any Cloudflare
   registrant-verification email (15-day deadline); then cancel HostGator hosting.

## Open items

- [ ] Verification code from cooksc55@gmail.com (check Spam/Promotions).
- [ ] Google Toolbox case 77239317 reply at galaxyconsultingllc@gmail.com (24-48 h from 2026-11-04).
- [ ] HostGator cPanel access to restore inbound mail meanwhile (Domains list / Email Routing = Local).
- [ ] Domain transfer completion on 2026-11-03.
- [ ] Cloudflare registrant-verification email to galaxyconsultingllc@gmail.com.
- [ ] Confirm with the owner before the MX cutover and before cancelling HostGator.
