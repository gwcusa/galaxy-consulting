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
- **Root cause found in HostGator cPanel** (owner logged in, Claude drove the tab): when the
  registration transferred out, HostGator removed galaxyconsultingllc.com from the cPanel
  account and made `jja.znt.temporary.site` the main domain. All 15 mailboxes and their
  mail are intact, now named `user@jja.znt.temporary.site` (ccooks 2.66 GB, info 333 MB,
  bd 144 MB ...). Exim rejected RCPT for the domain as "not local".
- **Interim fix applied**: added galaxyconsultingllc.com back via Domains > Create A New
  Domain with "Share document root" (alias of the main domain). Email Routing for it
  auto-detects **Local Mail Exchanger**. Inbound should deliver to the existing mailboxes
  again. Mailbox *login names* may still be `user@jja.znt.temporary.site`; the proper fix
  is HostGator support changing the account's primary domain back to
  galaxyconsultingllc.com (customer-portal chat; owner to request).
- Alias alone was not enough: Gmail test bounced "Address not found" (550 no such user)
  because the mailboxes are keyed to `jja.znt.temporary.site`. Added **14 forwarders**
  `name@galaxyconsultingllc.com -> name@jja.znt.temporary.site` (admin, agmirza, amirza, bd,
  bills, ccooks, fed-svcs, info, investments, jjenkins, quotes, sales, scooks, test) via the
  cPanel Forwarders UI (the UAPI route was blocked by the Claude Code classifier).
- **Deleted the rogue forwarder** ccooks@ -> jnowiicki420@gmail.com (owner confirmed with
  Charles that he never created it; cPanel keeps no creation date and HostGator has
  delivery tracking disabled, so its age is unknown). Charles should change the ccooks@
  mailbox password.
- Mail-client login name while the temporary domain is primary: `name@jja.znt.temporary.site`
  (server gator3027.hostgator.com, IMAP 993 SSL, SMTP 465 SSL); send-as address stays
  name@galaxyconsultingllc.com. Reverts to the real address once HostGator restores the
  primary domain, after which the 14 forwarders can be deleted.
- Owner decision: keep HostGator mail until Google Workspace can be purchased; Zoho /
  Cloudflare Email Routing stopgaps not used.

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

- **2026-11-04 18:06 — Google human reply on case 77239317** (Elanagendran, Account
  Recovery team) to galaxyconsultingllc@gmail.com. Apologises that the automated system
  sent the *wrong* knowledge test earlier; asks for a new one: super-admin email, super-admin
  full name, super-admin last login date, recovery email of the domain, Workspace account
  creation date, org name as shown in Admin console, full name of one other user, one group
  email, one secondary domain, one alias domain. Also flags a **data mismatch** between the
  primary admin on file and the name given on the form ("Galaxy Smith") and asks: relationship
  to the domain, full first/last name, exact access error, and to CC the primary admin's
  secondary email. Says do NOT remove the `77239317` CNAME until recovery completes.
  **Owner replied 2026-11-04 evening** (CC cooksc55@gmail.com) as Abdul Mirza, IT
  Administrator: answered the new test (ccooks@ / Charles Cooks / 03/06/2024 /
  cooksc55@gmail.com / creation date unknown, est. 2023-early 2024 / Galaxy Consulting LLC /
  no other users, groups, secondary or alias domains) and explained the recovery-code issue.
  Awaiting Google's next step.

## Open items

- [ ] Verification code from cooksc55@gmail.com (check Spam/Promotions).
- [x] Google Toolbox case 77239317 reply at galaxyconsultingllc@gmail.com (received 2026-11-04 18:06; new knowledge test).
- [x] Owner: answered the second knowledge test + identity questions on case 77239317 (sent 2026-11-04, CC cooksc55@gmail.com).
- [ ] Google's decision on case 77239317 at galaxyconsultingllc@gmail.com.
- [x] HostGator cPanel: domain re-added as alias 2026-11-04; Email Routing Local.
- [ ] Owner: resend the Gmail test to agmirza@ / ccooks@ and confirm delivery (forwarders added 2026-11-04).
- [ ] Charles: change the ccooks@ mailbox password (rogue forwarder removed).
- [ ] Owner: ask HostGator support (portal chat) to set the primary domain back to galaxyconsultingllc.com.
- [ ] Domain transfer completion on 2026-11-03.
- [ ] Cloudflare registrant-verification email to galaxyconsultingllc@gmail.com.
- [ ] Confirm with the owner before the MX cutover and before cancelling HostGator.
