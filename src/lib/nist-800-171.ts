/**
 * The 110 security requirements of NIST SP 800-171 Rev 2 (CMMC Level 2), in 14 families, with the
 * point value each one carries in the NIST SP 800-171 DoD Assessment Methodology (Version 1.2.1,
 * Annex A). A score starts at 110 and loses the value of every requirement not yet met; meeting
 * none gives the minimum of -203. Requirement text is shortened; read NIST SP 800-171 Rev 2 for
 * the full wording.
 *
 * Special cases in the methodology:
 * - 3.5.3 (multi-factor authentication): 5 points if not implemented; 3 if MFA is in place for
 *   remote and privileged users but not for general users.
 * - 3.13.11 (FIPS-validated cryptography): 5 points if no encryption protects CUI; 3 if
 *   encryption is used but is not FIPS-validated.
 * - 3.12.4 (system security plan): carries no point value; without a current SSP the
 *   assessment cannot be completed at all.
 */

export type Weight = 0 | 1 | 3 | 5;

export type Requirement = {
  id: string;
  text: string;
  weight: Weight;
  /** Partial-credit value (3.5.3 and 3.13.11 only). */
  partial?: { weight: 3; label: string };
  /** Practice also appears in CMMC Level 1. */
  l1?: boolean;
  /** 3.12.4: required, but not scored. */
  unscored?: boolean;
};

export type Family = { code: string; name: string; reqs: Requirement[] };

export const FAMILIES: Family[] = [
  {
    code: 'AC', name: 'Access Control', reqs: [
      { id: '3.1.1', text: 'Limit system access to authorized users, processes acting for them, and devices.', weight: 5, l1: true },
      { id: '3.1.2', text: 'Limit system access to the types of transactions and functions authorized users may run.', weight: 5, l1: true },
      { id: '3.1.3', text: 'Control the flow of CUI in line with approved authorizations.', weight: 1 },
      { id: '3.1.4', text: 'Separate the duties of individuals to reduce the risk of malicious activity without collusion.', weight: 1 },
      { id: '3.1.5', text: 'Apply least privilege, including for specific security functions and privileged accounts.', weight: 3 },
      { id: '3.1.6', text: 'Use non-privileged accounts or roles for non-security functions.', weight: 1 },
      { id: '3.1.7', text: 'Prevent non-privileged users from running privileged functions, and log their execution.', weight: 1 },
      { id: '3.1.8', text: 'Limit unsuccessful logon attempts.', weight: 1 },
      { id: '3.1.9', text: 'Show privacy and security notices consistent with CUI rules.', weight: 1 },
      { id: '3.1.10', text: 'Use session lock with pattern-hiding displays after inactivity.', weight: 1 },
      { id: '3.1.11', text: 'Terminate user sessions automatically after a defined condition.', weight: 1 },
      { id: '3.1.12', text: 'Monitor and control remote access sessions.', weight: 5 },
      { id: '3.1.13', text: 'Use cryptography to protect the confidentiality of remote access sessions.', weight: 5 },
      { id: '3.1.14', text: 'Route remote access through managed access control points.', weight: 1 },
      { id: '3.1.15', text: 'Authorize remote execution of privileged commands and remote access to security information.', weight: 1 },
      { id: '3.1.16', text: 'Authorize wireless access before allowing connections.', weight: 5 },
      { id: '3.1.17', text: 'Protect wireless access with authentication and encryption.', weight: 5 },
      { id: '3.1.18', text: 'Control the connection of mobile devices.', weight: 5 },
      { id: '3.1.19', text: 'Encrypt CUI on mobile devices and mobile computing platforms.', weight: 3 },
      { id: '3.1.20', text: 'Verify and control or limit connections to and use of external systems.', weight: 1, l1: true },
      { id: '3.1.21', text: 'Limit the use of portable storage devices on external systems.', weight: 1 },
      { id: '3.1.22', text: 'Control CUI posted or processed on publicly accessible systems.', weight: 1, l1: true },
    ],
  },
  {
    code: 'AT', name: 'Awareness and Training', reqs: [
      { id: '3.2.1', text: 'Make managers, administrators and users aware of security risks and the applicable policies and procedures.', weight: 5 },
      { id: '3.2.2', text: 'Train personnel to carry out their security-related duties.', weight: 5 },
      { id: '3.2.3', text: 'Provide awareness training on recognizing and reporting insider threats.', weight: 1 },
    ],
  },
  {
    code: 'AU', name: 'Audit and Accountability', reqs: [
      { id: '3.3.1', text: 'Create and keep system audit logs to allow monitoring, analysis, investigation and reporting.', weight: 5 },
      { id: '3.3.2', text: 'Make sure the actions of individual users can be traced to them.', weight: 3 },
      { id: '3.3.3', text: 'Review and update logged events.', weight: 1 },
      { id: '3.3.4', text: 'Alert when an audit logging process fails.', weight: 1 },
      { id: '3.3.5', text: 'Correlate audit record review, analysis and reporting for investigation and response.', weight: 5 },
      { id: '3.3.6', text: 'Provide audit record reduction and report generation.', weight: 1 },
      { id: '3.3.7', text: 'Synchronize system clocks with an authoritative time source for audit time stamps.', weight: 1 },
      { id: '3.3.8', text: 'Protect audit information and logging tools from unauthorized access, change and deletion.', weight: 1 },
      { id: '3.3.9', text: 'Limit management of audit logging to a subset of privileged users.', weight: 1 },
    ],
  },
  {
    code: 'CM', name: 'Configuration Management', reqs: [
      { id: '3.4.1', text: 'Establish and maintain baseline configurations and inventories of systems.', weight: 5 },
      { id: '3.4.2', text: 'Establish and enforce security configuration settings.', weight: 5 },
      { id: '3.4.3', text: 'Track, review, approve or disapprove, and log changes to systems.', weight: 1 },
      { id: '3.4.4', text: 'Analyze the security impact of changes before implementing them.', weight: 1 },
      { id: '3.4.5', text: 'Define, document, approve and enforce access restrictions for changes.', weight: 5 },
      { id: '3.4.6', text: 'Apply least functionality: configure systems to provide only essential capabilities.', weight: 5 },
      { id: '3.4.7', text: 'Restrict, disable or prevent nonessential programs, functions, ports, protocols and services.', weight: 5 },
      { id: '3.4.8', text: 'Apply deny-by-exception (blacklist) or permit-by-exception (whitelist) policy to software.', weight: 5 },
      { id: '3.4.9', text: 'Control and monitor user-installed software.', weight: 1 },
    ],
  },
  {
    code: 'IA', name: 'Identification and Authentication', reqs: [
      { id: '3.5.1', text: 'Identify system users, processes acting for users, and devices.', weight: 5, l1: true },
      { id: '3.5.2', text: 'Authenticate users, processes and devices before allowing access.', weight: 5, l1: true },
      { id: '3.5.3', text: 'Use multi-factor authentication for local and network access to privileged accounts and network access to non-privileged accounts.', weight: 5, partial: { weight: 3, label: 'MFA for remote and privileged users only' } },
      { id: '3.5.4', text: 'Use replay-resistant authentication for network access to accounts.', weight: 1 },
      { id: '3.5.5', text: 'Prevent reuse of identifiers for a defined period.', weight: 1 },
      { id: '3.5.6', text: 'Disable identifiers after a defined period of inactivity.', weight: 1 },
      { id: '3.5.7', text: 'Enforce minimum password complexity and change of characters for new passwords.', weight: 1 },
      { id: '3.5.8', text: 'Prohibit password reuse for a specified number of generations.', weight: 1 },
      { id: '3.5.9', text: 'Allow temporary passwords for logon only with an immediate change to a permanent password.', weight: 1 },
      { id: '3.5.10', text: 'Store and transmit only cryptographically protected passwords.', weight: 5 },
      { id: '3.5.11', text: 'Obscure feedback of authentication information.', weight: 1 },
    ],
  },
  {
    code: 'IR', name: 'Incident Response', reqs: [
      { id: '3.6.1', text: 'Establish an incident-handling capability: preparation, detection, analysis, containment, recovery and user response.', weight: 5 },
      { id: '3.6.2', text: 'Track, document and report incidents to designated officials and authorities.', weight: 5 },
      { id: '3.6.3', text: 'Test the incident response capability.', weight: 1 },
    ],
  },
  {
    code: 'MA', name: 'Maintenance', reqs: [
      { id: '3.7.1', text: 'Perform maintenance on systems.', weight: 3 },
      { id: '3.7.2', text: 'Control the tools, techniques, mechanisms and personnel used for system maintenance.', weight: 5 },
      { id: '3.7.3', text: 'Sanitize equipment removed for off-site maintenance of any CUI.', weight: 1 },
      { id: '3.7.4', text: 'Check media with diagnostic and test programs for malicious code before use.', weight: 3 },
      { id: '3.7.5', text: 'Require multi-factor authentication for nonlocal maintenance sessions, and end them when done.', weight: 5 },
      { id: '3.7.6', text: 'Supervise the maintenance activities of personnel without required access authorization.', weight: 1 },
    ],
  },
  {
    code: 'MP', name: 'Media Protection', reqs: [
      { id: '3.8.1', text: 'Protect (physically control and securely store) system media containing CUI, paper and digital.', weight: 3 },
      { id: '3.8.2', text: 'Limit access to CUI on system media to authorized users.', weight: 3 },
      { id: '3.8.3', text: 'Sanitize or destroy system media containing CUI before disposal or reuse.', weight: 5, l1: true },
      { id: '3.8.4', text: 'Mark media with the necessary CUI markings and distribution limits.', weight: 1 },
      { id: '3.8.5', text: 'Control access to media with CUI and maintain accountability during transport outside controlled areas.', weight: 1 },
      { id: '3.8.6', text: 'Use cryptography to protect CUI on digital media during transport unless otherwise physically safeguarded.', weight: 1 },
      { id: '3.8.7', text: 'Control the use of removable media on system components.', weight: 5 },
      { id: '3.8.8', text: 'Prohibit portable storage devices that have no identifiable owner.', weight: 3 },
      { id: '3.8.9', text: 'Protect the confidentiality of backup CUI at storage locations.', weight: 1 },
    ],
  },
  {
    code: 'PS', name: 'Personnel Security', reqs: [
      { id: '3.9.1', text: 'Screen individuals before authorizing access to systems containing CUI.', weight: 3 },
      { id: '3.9.2', text: 'Protect CUI and systems during and after personnel actions such as terminations and transfers.', weight: 5 },
    ],
  },
  {
    code: 'PE', name: 'Physical Protection', reqs: [
      { id: '3.10.1', text: 'Limit physical access to systems, equipment and operating environments to authorized individuals.', weight: 5, l1: true },
      { id: '3.10.2', text: 'Protect and monitor the physical facility and support infrastructure.', weight: 5 },
      { id: '3.10.3', text: 'Escort visitors and monitor visitor activity.', weight: 1, l1: true },
      { id: '3.10.4', text: 'Keep audit logs of physical access.', weight: 1, l1: true },
      { id: '3.10.5', text: 'Control and manage physical access devices.', weight: 1, l1: true },
      { id: '3.10.6', text: 'Enforce safeguarding measures for CUI at alternate work sites.', weight: 1 },
    ],
  },
  {
    code: 'RA', name: 'Risk Assessment', reqs: [
      { id: '3.11.1', text: 'Periodically assess the risk to operations, assets and individuals from operating systems that handle CUI.', weight: 3 },
      { id: '3.11.2', text: 'Scan for vulnerabilities periodically and when new vulnerabilities are identified.', weight: 5 },
      { id: '3.11.3', text: 'Remediate vulnerabilities in line with risk assessments.', weight: 1 },
    ],
  },
  {
    code: 'CA', name: 'Security Assessment', reqs: [
      { id: '3.12.1', text: 'Periodically assess security controls to determine whether they are effective.', weight: 5 },
      { id: '3.12.2', text: 'Develop and carry out plans of action to correct deficiencies and reduce vulnerabilities.', weight: 3 },
      { id: '3.12.3', text: 'Monitor security controls on an ongoing basis.', weight: 5 },
      { id: '3.12.4', text: 'Develop, document, update and maintain a system security plan (SSP).', weight: 0, unscored: true },
    ],
  },
  {
    code: 'SC', name: 'System and Communications Protection', reqs: [
      { id: '3.13.1', text: 'Monitor, control and protect communications at external and key internal system boundaries.', weight: 5, l1: true },
      { id: '3.13.2', text: 'Use architectural designs, development techniques and engineering principles that promote security.', weight: 5 },
      { id: '3.13.3', text: 'Separate user functionality from system management functionality.', weight: 1 },
      { id: '3.13.4', text: 'Prevent unauthorized and unintended information transfer through shared system resources.', weight: 1 },
      { id: '3.13.5', text: 'Put publicly accessible system components in subnetworks separated from internal networks.', weight: 5, l1: true },
      { id: '3.13.6', text: 'Deny network traffic by default and allow it by exception.', weight: 5 },
      { id: '3.13.7', text: 'Prevent split tunneling for remote devices.', weight: 1 },
      { id: '3.13.8', text: 'Use cryptography to prevent unauthorized disclosure of CUI in transit unless otherwise protected.', weight: 3 },
      { id: '3.13.9', text: 'End network connections at the end of sessions or after inactivity.', weight: 1 },
      { id: '3.13.10', text: 'Establish and manage cryptographic keys.', weight: 1 },
      { id: '3.13.11', text: 'Use FIPS-validated cryptography when it protects the confidentiality of CUI.', weight: 5, partial: { weight: 3, label: 'Encryption in use, not FIPS-validated' } },
      { id: '3.13.12', text: 'Prohibit remote activation of collaborative computing devices and show users when they are in use.', weight: 1 },
      { id: '3.13.13', text: 'Control and monitor the use of mobile code.', weight: 1 },
      { id: '3.13.14', text: 'Control and monitor the use of Voice over Internet Protocol (VoIP).', weight: 1 },
      { id: '3.13.15', text: 'Protect the authenticity of communications sessions.', weight: 5 },
      { id: '3.13.16', text: 'Protect the confidentiality of CUI at rest.', weight: 1 },
    ],
  },
  {
    code: 'SI', name: 'System and Information Integrity', reqs: [
      { id: '3.14.1', text: 'Identify, report and correct system flaws in a timely manner.', weight: 5, l1: true },
      { id: '3.14.2', text: 'Provide protection from malicious code at appropriate locations.', weight: 5, l1: true },
      { id: '3.14.3', text: 'Monitor security alerts and advisories and act on them.', weight: 5 },
      { id: '3.14.4', text: 'Update malicious code protection mechanisms when new releases are available.', weight: 5, l1: true },
      { id: '3.14.5', text: 'Run periodic scans of systems and real-time scans of files from external sources.', weight: 3, l1: true },
      { id: '3.14.6', text: 'Monitor systems, including inbound and outbound traffic, to detect attacks and indicators of attack.', weight: 5 },
      { id: '3.14.7', text: 'Identify unauthorized use of systems.', weight: 3 },
    ],
  },
];

export const ALL_REQUIREMENTS: Requirement[] = FAMILIES.flatMap((f) => f.reqs);
export const MAX_SCORE = 110;
/** 110 minus the sum of every requirement's full value. */
export const MIN_SCORE = MAX_SCORE - ALL_REQUIREMENTS.reduce((t, r) => t + r.weight, 0);
