import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";

/* Legal pages (Privacy Policy / Terms of Use) for PROEKT TSIFROVOI OSOO,
   doing business as Zifrovoy. Modeled on a standard non-custodial wallet
   policy set, adapted with Zifrovoy data and Kyrgyz Republic governing law.
   Routed from App.tsx at /terms and /privacy. */

const COMPANY = "PROEKT TSIFROVOI OSOO";
const DBA = "Zifrovoy";
const ADDRESS = "5, 18 per. Klubny, Bishkek, Kyrgyz Republic";
const DUNS = "44-756-0123";
const EMAIL = "hi@zifrovoy.com";
const WEBSITE = "https://zifrovoy.com";
const EFFECTIVE = "June 20, 2026";

function H({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-black text-[22px] font-medium mt-9 mb-3" style={{ letterSpacing: "-0.02em" }}>
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-black/90 text-base font-semibold mt-5 mb-2">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-black/70 text-[15px] leading-relaxed mb-3">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 space-y-1.5 mb-3 text-black/70 text-[15px] leading-relaxed">{children}</ul>;
}

export function LegalPage({ kind }: { kind: "terms" | "privacy" }) {
  return (
    <div className="flex flex-col bg-page min-h-screen">
      <header className="px-6 py-5 border-b border-black/10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-black">
            <img src="/logo.png" alt="" className="w-6 h-6" style={{ filter: "brightness(0)" }} />
            <span className="text-lg font-medium tracking-tight">Zifrovoy</span>
          </a>
          <a href="/" className="inline-flex items-center gap-1.5 text-black/60 hover:text-black text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 py-14">
        <div className="max-w-3xl mx-auto">
          {kind === "terms" ? <Terms /> : <Privacy />}
          <p className="text-black/40 text-xs mt-12 pt-6 border-t border-black/10">
            {COMPANY} (doing business as {DBA}) · D-U-N-S® {DUNS} · {ADDRESS} · {EMAIL}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Title({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-black/40 text-xs uppercase tracking-[0.18em] mb-3">{eyebrow}</p>
      <h1 className="text-black text-4xl md:text-5xl font-medium leading-tight" style={{ letterSpacing: "-0.03em" }}>
        {title}
      </h1>
      <p className="text-black/50 text-sm mt-4">Effective: {EFFECTIVE}</p>
    </>
  );
}

/* ───────────────────────── PRIVACY POLICY ───────────────────────── */
function Privacy() {
  return (
    <article>
      <Title eyebrow="Legal" title="Privacy Policy" />

      <P>
        This Privacy Policy for {COMPANY} (doing business as {DBA} wallet) ("{DBA}", "we", "us", or
        "our") describes how and why we might collect, store, use, and/or share ("process") your
        information when you use our services ("Services"), such as when you:
      </P>
      <UL>
        <li>Visit our website at {WEBSITE}, or any website of ours that links to this Privacy Policy.</li>
        <li>Download and use our mobile application ({DBA} wallet), or any other application of ours that links to this Privacy Policy.</li>
        <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
      </UL>
      <P>
        Questions or concerns? Reading this Privacy Policy will help you understand your privacy rights
        and choices. If you do not agree with our policies and practices, please do not use our
        Services. If you still have questions or concerns, contact us at {EMAIL}.
      </P>

      <H>1. What information do we collect?</H>
      <H3>Personal information you disclose to us</H3>
      <P>
        We collect personal information that you voluntarily provide to us when you register on the
        Services, express an interest in obtaining information about us or our products and Services,
        when you participate in activities on the Services, or otherwise when you contact us. This may
        include name, usernames, email addresses, or other contact data. All personal information you
        provide must be true, complete, and accurate, and you must notify us of any changes.
      </P>
      <H3>Payment data</H3>
      <P>
        We may collect data necessary to process your transaction if you make purchases, such as your
        wallet address and payment instrument details. {DBA} is a non-custodial wallet and does not
        store your private keys, recovery phrase, or wallet password.
      </P>
      <H3>Mobile device access &amp; application data</H3>
      <P>
        We may request access to your mobile device's camera, storage, Bluetooth, biometrics, and
        other features (for example, to scan a QR code or enable secure sign-in). You can change these
        permissions in your device settings. If you use our application(s), we may also collect
        location data if you choose to provide us access.
      </P>
      <H3>Device data</H3>
      <P>
        We automatically collect device information (such as your device ID, model, manufacturer,
        operating system, browser type, ISP and/or mobile carrier, and IP address), primarily to
        maintain the security and operation of our application(s), for troubleshooting, and for
        internal analytics and reporting.
      </P>
      <H3>Push notifications</H3>
      <P>
        We may request to send you push notifications regarding your account or features of the
        application(s). You can opt out at any time in your device settings.
      </P>
      <H3>Information automatically collected</H3>
      <P>
        We automatically collect certain information when you use the Services. This does not reveal
        your specific identity but may include device and usage information, IP address, language
        preferences, referring URLs, social/identity-provider login data, connected-wallet data, and
        public on-chain transaction history, and similar technical information.
      </P>
      <H3>Recipients of the data</H3>
      <UL>
        <li><b>Internal departments</b> — authorized personnel within Customer Support, IT, Compliance, and other relevant departments on a need-to-know basis.</li>
        <li><b>Service providers</b> — third-party partners (e.g., cloud hosting, database management, analytics) processing data under our agreements.</li>
        <li><b>Legal authorities</b> — government bodies, regulatory authorities, or law enforcement where required by law.</li>
      </UL>

      <H>2. Why do we process your information?</H>
      <P>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent, including:</P>
      <UL>
        <li>To facilitate account creation, authentication, and account management.</li>
        <li>To request feedback about your use of our Services.</li>
        <li>To protect our Services, including fraud monitoring and prevention.</li>
        <li>To identify usage trends and improve our Services.</li>
        <li>To determine the effectiveness of our marketing and promotional campaigns.</li>
        <li>To save or protect an individual's vital interest.</li>
      </UL>

      <H>3. Legal bases we rely on</H>
      <P>We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law. Depending on your jurisdiction, we may rely on your consent (which you can withdraw at any time), our legitimate interests (such as analyzing usage, preventing fraud, and improving the Services), compliance with legal obligations, and the protection of vital interests. Where your local law (such as the EU/UK GDPR) applies, we honor the rights and bases it requires.</P>

      <H>4. When and with whom we share personal information</H>
      <UL>
        <li><b>Vendors and service providers</b> — hosting, customer service, cloud services, content delivery, analytics, communications, and transaction infrastructure providers, who access data only to perform their duties to us.</li>
        <li><b>Business transfers</b> — in connection with a merger, reorganization, or sale of assets, your data may be transferred to a successor or affiliate.</li>
        <li><b>Government authorities or other third parties</b> — where required by law, to defend our rights, to detect or prevent fraud or illegal activity, or to protect users or the public.</li>
        <li><b>Affiliates</b> — entities under common control with {COMPANY}, used consistently with this Policy.</li>
      </UL>

      <H>5. Cookies and tracking technologies</H>
      <P>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information for functionality, security, and analytics. You can refuse certain cookies through your browser or device settings; note this may affect some features.</P>

      <H>6. How long do we keep your information?</H>
      <P>We keep your personal information only for as long as necessary for the purposes set out in this Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or AML requirements). When there is no ongoing legitimate need, we delete or anonymize it, or securely isolate it from further processing until deletion is possible.</P>

      <H>7. How do we keep your information safe?</H>
      <P>We have implemented appropriate and reasonable technical and organizational security measures designed to protect your personal information. However, no electronic transmission or storage can be guaranteed 100% secure. Transmission to and from our Services is at your own risk, and you should only access the Services within a secure environment.</P>

      <H>8. Do we collect information from minors?</H>
      <P>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services you represent that you are at least 18, or are the parent/guardian of such a minor and consent to their use. If we learn that data from a user under 18 has been collected, we will deactivate the account and take reasonable measures to delete the data. Contact {EMAIL} (Ref: Privacy) if you become aware of any such data.</P>

      <H>9. What are your privacy rights?</H>
      <P>Depending on your region, you may have the right to request access to and a copy of your personal information, request rectification or erasure, restrict or object to processing, and (where applicable) data portability. To make a request, use the contact details in section 13. If you are in the EEA or UK and believe we are unlawfully processing your data, you may complain to your local data protection authority.</P>
      <H3>Withdrawing your consent</H3>
      <P>If we are relying on your consent, you may withdraw it at any time by contacting us. Withdrawal does not affect the lawfulness of processing before withdrawal.</P>
      <H3>Account changes &amp; termination</H3>
      <P>You can review or change your account information or terminate your account at any time. Upon a termination request, we will deactivate or delete your account from our active databases, retaining some information only as necessary to prevent fraud, troubleshoot, assist investigations, enforce our terms, and comply with applicable legal and AML requirements.</P>

      <H>10. Controls for Do-Not-Track features</H>
      <P>Most browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature. As no uniform standard for recognizing DNT signals has been finalized, we do not currently respond to DNT browser signals. If a standard is adopted that we must follow, we will inform you in a revised version of this Policy.</P>

      <H>11. Updates to this policy</H>
      <P>We may update this Privacy Policy from time to time. The updated version will be effective as soon as it is accessible, and we encourage you to review it frequently.</P>

      <H>12. International data transfers</H>
      <P>Your information may be processed in countries other than your own, including where our service providers operate. Where required, we use appropriate safeguards for such transfers.</P>

      <H>13. How can you contact us about this policy?</H>
      <P>
        The data controller for the processing of your personal data is {COMPANY}. If you have any
        questions, requests, or concerns regarding your personal data, please contact us:
      </P>
      <P>
        {EMAIL} (Ref: Privacy)<br />
        {COMPANY}<br />
        {ADDRESS}
      </P>

      <H>14. How can you review, update, or delete your data?</H>
      <P>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect, change it, or delete it. To do so, contact us at {EMAIL} (Ref: Privacy).</P>
    </article>
  );
}

/* ───────────────────────── TERMS OF USE ───────────────────────── */
function Terms() {
  return (
    <article>
      <Title eyebrow="Legal" title="Terms of Use" />

      <P>
        Thank you for using the {DBA} Wallet! Our Privacy Policy explains how we collect and use
        personal information. It is an important document that you should read along with these Terms
        of Use.
      </P>

      <H>1. Agreement to terms</H>
      <P>
        These Terms of Use constitute a legally binding agreement made between you, whether personally
        or on behalf of an entity ("you", "User"), and {COMPANY}, doing business as {DBA} ("{DBA}",
        "we", "us", or "our"), concerning your access to and use of the {DBA} Wallet and related
        services for individuals, and any associated software applications and websites, including the
        website {WEBSITE}, our applications on the Apple App Store and Google Play Store, our official
        social accounts, and any other related media (collectively, the "Site"). We are registered in
        the Kyrgyz Republic (D-U-N-S® {DUNS}) with our registered office at {ADDRESS}.
      </P>
      <P>
        By accessing the Site, you confirm that you have read, understood, and agreed to be bound by
        all of these Terms of Use. If you do not agree, you are expressly prohibited from using the
        Site and must discontinue use immediately. We may make changes to these Terms from time to
        time; continued use after revised Terms are posted constitutes acceptance. You must be at least
        18 years old, or the minimum age required in your country to consent, to use the Services.
      </P>

      <H>2. Intellectual property rights</H>
      <P>
        The Site is our property, and all source code, databases, functionality, software, designs,
        text, and graphics (the "Content"), and the trademarks, service marks, and logos (the
        "Marks"), are owned or controlled by us or licensed to us and protected by applicable law. You
        are granted a limited license to access and use the Site for your personal, non-commercial use.
        We reserve all rights not expressly granted. We welcome feedback, comments, and suggestions
        ("Feedback") and shall have an exclusive, perpetual, irrevocable, royalty-free license to use
        such Feedback without compensation.
      </P>

      <H>3. User representations</H>
      <P>By using the Site, you represent and warrant that: (1) all registration information you submit is true, accurate, current, and complete; (2) you will maintain its accuracy; (3) you have the legal capacity to comply with these Terms; (4) you are not a minor, or have parental permission; (5) you will not access the Site through automated or non-human means; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use will not violate any applicable law. If you provide untrue or incomplete information, we may suspend or terminate your account.</P>

      <H>4. User registration</H>
      <P>You may be required to register with the Site. You agree to keep your credentials confidential and are responsible for all use of your account. You may not share your credentials or make your account available to others. You represent and warrant that you are not subject to any economic sanctions (including UN, OFAC SDN, EU, UK, or similar lists) and are not located in any jurisdiction where use of the Services would be illegal. You are responsible for ensuring your devices meet the system and compatibility requirements; we are not responsible for failed transactions due to internet or device issues.</P>

      <H>5. Prohibited activities</H>
      <P>You may not access or use the Site for any purpose other than that for which we make it available. You agree not to:</P>
      <UL>
        <li>Systematically retrieve data to create a collection or database without our written permission.</li>
        <li>Trick, defraud, or mislead us or other users.</li>
        <li>Circumvent, disable, or interfere with security-related features.</li>
        <li>Disparage, tarnish, or otherwise harm us or the Site.</li>
        <li>Use information from the Site to harass, abuse, or harm another person.</li>
        <li>Make improper use of our support services or submit false reports.</li>
        <li>Use the Site inconsistently with applicable laws or regulations.</li>
        <li>Upload viruses or other malicious material, or disrupt the Site.</li>
        <li>Engage in automated use of the system (scripts, bots, scrapers).</li>
        <li>Reverse engineer, decompile, or disassemble any software comprising the Site.</li>
        <li>Use the Site for any unauthorized commercial enterprise, or sell/transfer your profile.</li>
      </UL>

      <H>6. Mobile application license</H>
      <P>If you access the Site via a mobile application (the "Application"), we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the Application on devices you own or control, strictly in accordance with these Terms. You shall not: (1) decompile or reverse engineer the Application; (2) make modifications or derivative works; (3) violate applicable laws; (4) remove proprietary notices; (5) use it for any commercial enterprise; (6) make it available over a network for multi-user use; (7) create a competitive product; or (8) use it for spam.</P>
      <H3>App stores</H3>
      <P>When you obtain the Application from the Apple App Store or Google Play (each an "App Distributor"): the license is limited to use on a device running the relevant OS in accordance with the App Distributor's terms; we provide maintenance and support; you represent you are not located in an embargoed country or on a prohibited-party list; and the App Distributors are third-party beneficiaries of this license.</P>

      <H>7. Third-party websites &amp; content</H>
      <P>The Site may contain links to third-party websites and content, and lets you connect to third-party apps, protocols, and on-chain services (such as Hyperliquid, decentralized exchanges, and bridges). We do not investigate, monitor, or guarantee third-party services and are not responsible for them. Interactions and transactions with third parties are solely between you and them and may carry risks including high market volatility and the irreversible nature of blockchain transactions. You must review the applicable terms and policies, and by using third-party tools you release us from related claims. We may limit or discontinue access to third-party integrations at any time.</P>

      <H>8. Site management</H>
      <P>We reserve the right, but not the obligation, to: (1) monitor the Site for violations; (2) take legal action against violators; (3) refuse, restrict, or disable any contributions; (4) remove files that are excessive or burdensome; and (5) otherwise manage the Site to protect our rights and property.</P>

      <H>9. Privacy policy</H>
      <P>We care about data privacy and security. Please review our Privacy Policy. By using the Site, you agree to be bound by it. Your data may be processed and disclosed to our service providers and affiliates in other jurisdictions.</P>

      <H>10. Term and termination</H>
      <P>These Terms remain in full force while you use the Site. We may deny access to and use of the Site for any reason, including breach of these Terms or applicable law, and may terminate your use and delete your account at any time, without warning, in our sole discretion. You can stop using the Services and close your account at any time by contacting {EMAIL}. If you believe your account was suspended or terminated in error, you can appeal by contacting {EMAIL}.</P>

      <H>11. Modifications and interruptions</H>
      <P>We reserve the right to change, modify, or remove the contents of the Site at any time without notice, and we may experience interruptions, delays, or errors. We have no liability for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime.</P>

      <H>12. Governing law</H>
      <P>These Terms are governed by and interpreted in accordance with the laws of the Kyrgyz Republic, and the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. If you are a consumer, you additionally retain the protection of mandatory provisions of the law of your country of residence. You and {COMPANY} agree to submit to the non-exclusive jurisdiction of the competent courts of Bishkek, Kyrgyz Republic.</P>

      <H>13. Dispute resolution</H>
      <H3>Informal negotiations</H3>
      <P>The parties agree to first attempt to negotiate any dispute informally for at least thirty (30) days before initiating arbitration, commencing upon written notice from one party to the other.</P>
      <H3>Binding arbitration</H3>
      <P>Any dispute that cannot be resolved informally shall be finally settled by arbitration administered under the rules of the International Court of Arbitration at the Chamber of Commerce and Industry of the Kyrgyz Republic. The seat of arbitration shall be Bishkek, Kyrgyz Republic; the language shall be Russian or English; and the applicable substantive law shall be that of the Kyrgyz Republic.</P>
      <H3>Restrictions &amp; exceptions</H3>
      <P>Arbitration shall be limited to the dispute between the parties individually; no class or representative actions are permitted. The following are not subject to informal negotiation and binding arbitration: (a) disputes to enforce or protect intellectual property rights; (b) disputes related to theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.</P>

      <H>14. Corrections</H>
      <P>There may be information on the Site containing typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors and to update information at any time without prior notice.</P>

      <H>15. Disclaimer</H>
      <P>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOUR USE OF THE SITE AND OUR SERVICES IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE ASSUME NO LIABILITY FOR ANY ERRORS, INACCURACIES, UNAUTHORIZED ACCESS, INTERRUPTION OF TRANSMISSION, BUGS, VIRUSES, OR LOSS RESULTING FROM USE OF ANY CONTENT OR THE SERVICES.</P>

      <H>16. Limitations of liability</H>
      <P>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR LOSS OF DIGITAL ASSETS, ARISING FROM YOUR USE OF THE SITE. OUR AGGREGATE LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO USD $100. Some jurisdictions do not allow such limitations, in which case some of the above may not apply to you.</P>

      <H>17. Indemnification</H>
      <P>You agree to defend, indemnify, and hold us harmless, including our affiliates and our respective officers, agents, and employees, from any loss, liability, claim, or demand, including reasonable attorneys' fees, arising from: (1) your use of the Site; (2) breach of these Terms; (3) breach of your representations and warranties; (4) violation of the rights of a third party; or (5) any harmful act toward another user.</P>

      <H>18. User data</H>
      <P>We will maintain certain data that you transmit to the Site for the purpose of managing its performance, as well as data relating to your use of the Site. Although we perform routine backups, you are solely responsible for all data you transmit or that relates to activity you undertake using the Site.</P>

      <H>19. Electronic communications, transactions, and signatures</H>
      <P>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications and agree that all agreements, notices, and disclosures we provide electronically satisfy any legal requirement that they be in writing. You agree to the use of electronic signatures and records, and to electronic delivery of notices and policies. You may agree to receive push notifications for transaction alerts and similar updates.</P>

      <H>20. Miscellaneous</H>
      <P>These Terms and any policies posted by us constitute the entire agreement between you and us. Our failure to enforce any right is not a waiver. We may assign our rights and obligations at any time. If any provision is unlawful or unenforceable, it is severable from the remaining Terms. No joint venture, partnership, employment, or agency relationship is created, and these Terms will not be construed against us by virtue of having drafted them.</P>

      <H>21. Private key storage mechanism</H>
      <P>At the heart of our operations is a commitment to security and privacy. {DBA} employs a private-key storage mechanism designed to maximize security while granting users full control over their cryptographic keys.</P>
      <UL>
        <li><b>Encryption algorithm</b> — our security model uses the AES-256-GCM encryption algorithm, recognized for its strength and resistance to attack.</li>
        <li><b>Seed phrase encryption</b> — every user's recovery phrase is encrypted using AES-256-GCM, with an encryption key derived from a password created solely and independently by the user.</li>
        <li><b>User's role in security</b> — the encryption password is neither stored on our servers nor backed up by us, ensuring you remain the sole custodian of your keys.</li>
        <li><b>Storage on your device</b> — the encrypted recovery phrase is stored on your device. We have no means to access encrypted recovery phrases stored on user devices.</li>
      </UL>
      <P>{DBA} shall not be liable for any breach of wallet security due to the User's conduct. You must notify us immediately of any unauthorized use of your private key or any breach of wallet security.</P>

      <H>22. Technical infrastructure</H>
      <P>{DBA} is a non-custodial, multi-chain wallet supporting 100+ EVM networks and Bitcoin, enabling you to store, send, swap, and bridge assets, use an AI assistant and automations, and access copy trading and perpetuals through third-party on-chain protocols such as Hyperliquid. For reliable encryption we rely on the browser/device cryptographic modules; for blockchain interactions we use widely tested libraries; and we leverage smart-account infrastructure for account features and transactions.</P>

      <H>23. Declaration of intent</H>
      <P>We, the team behind {DBA}, declare that to the best of our knowledge and abilities, no malicious activities are executed on our platform that might compromise user data or harm our users. Our commitment is to a secure environment where users can operate with peace of mind.</P>

      <H>24. Payments and fees</H>
      <P>{DBA} may charge a fee for certain Site features. We reserve the right to change such fees at any time at our sole discretion; applicable fees are disclosed in-app before you confirm.</P>

      <H>25. Transactions</H>
      <P>You acknowledge that digital-asset transactions are confirmed and recorded on the associated blockchain, which may be a decentralized, peer-to-peer network supported by independent third parties. {DBA} does not own, control, or ensure the confirmation of transactions, cannot cancel or modify transactions, and is not a custodian of any digital asset. Any transfer occurs on the relevant blockchain network and not on a network owned by {DBA}.</P>

      <H>26. Transaction fees</H>
      <P>Digital-asset transactions may require network (gas) fees or other fees when engaging with third-party networks. You must ensure an adequate balance to complete transactions. {DBA} shall not be liable for losses or failed transactions due to inadequate gas or transaction fees.</P>

      <H>27. Taxes</H>
      <P>You are responsible, as required under applicable law, for identifying and paying all taxes and other governmental fees, penalties, interest, and similar charges imposed on you or in respect of your transactions and payments under these Terms.</P>

      <H>28. Assumption of risk</H>
      <P>You assume the risks associated with transactions that rely on smart contracts and other experimental technologies, including blockchains, cryptographic tokens, and nascent software that interact with blockchain-based networks. These technologies are experimental, speculative, inherently risky, and subject to change. The regulatory regime governing blockchain technologies and digital assets is uncertain, and new regulations may materially and adversely affect the Services, which may also be subject to technological interference such as network downtime.</P>

      <H>29. Release</H>
      <P>To the fullest extent permitted by applicable law, you release {DBA} and its affiliates from responsibility, liability, claims, demands, and damages (actual and consequential) of every kind, known and unknown, arising out of or related to disputes between users and the acts or omissions of third parties.</P>

      <H>30. No investment advice</H>
      <P>All content and descriptions, including the AI assistant, automations, and any signals or analytics, are for informational purposes only. Nothing on our Site constitutes a solicitation, recommendation, endorsement, or offer to buy or sell any securities or financial instruments. You alone assume responsibility for evaluating the merits and risks of any decision based on such information.</P>
      <H3>What are the key risks?</H3>
      <UL>
        <li><b>You could lose all the money you invest.</b> Crypto assets can be highly volatile; be prepared to lose everything you invest. The market is largely unregulated.</li>
        <li><b>You may not be able to sell when you want.</b> There is no guarantee a digital asset can be sold at any given time; outages, attacks, or other failures could cause delay.</li>
        <li><b>Crypto investments can be complex.</b> Do your own research. If something sounds too good to be true, it probably is.</li>
        <li><b>Don't put all your eggs in one basket.</b> Concentrating your money in a single investment is risky.</li>
      </UL>

      <H>31. Contact us</H>
      <P>
        To resolve a complaint regarding the Site or to receive further information, please contact us:
      </P>
      <P>
        {EMAIL}<br />
        {COMPANY}<br />
        {ADDRESS}
      </P>
    </article>
  );
}
