import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/app/components/services/service-page-shell";
import ContentBlock from "@/app/components/services/content-block";

export const metadata: Metadata = {
  title: "Privacy Notice for California Residents",
};

// Text and inline styles follow the reference page, which was written in a word processor
export default function CcpaPrivacyPolicyPage() {
  return (
    <ServicePageShell secondary={null} strongWeight="medium">
      {/* pt-10! wins over the shared content block padding */}
      <ContentBlock className="pt-10!">
        <p />
        <h1>California Privacy Policy &ndash; Notice at Collection</h1>
        <p className="cursor-default whitespace-nowrap text-[14px] font-medium tracking-[0.75px] text-[#db0020] uppercase">
          Last Modified: February 19, 2026
        </p>
        <h4>
          <strong>Introduction</strong>
          <strong />
        </h4>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          This California Privacy Policy &ndash; Notice at Collection (&ldquo;CA Privacy Policy&rdquo;) supplements the
          information contained in Safelite&rsquo;s <Link href="/safelite-group-privacy-policy">Privacy Policy</Link>{" "}
          and describes our privacy practices with respect to individuals who reside in the State of California
          (&ldquo;consumers&rdquo; or &ldquo;you&rdquo;). You should read this CA Privacy Policy alongside our{" "}
          <Link href="/safelite-group-privacy-policy">Privacy Policy</Link>.
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>&nbsp;</p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          This CA Privacy Policy does not apply to information we collect when:
        </p>
        <ul>
          <li>You are acting as a job applicant to or employee or independent contractor of Safelite;</li>
          <li>
            You have been designated as an emergency contact for a job applicant or employee and your information has
            been collected for use solely within that context;
          </li>
          <li>We need your Personal Information to administer benefits obtained through an employee; or&nbsp;</li>
          <li>
            We are collecting or processing your information as a service provider to a third-party business. If you
            arrived at this CA Privacy Policy page through a link located on a website operated by Safelite Solutions on
            behalf of your automobile insurance provider and you want to understand how your insurer collects,
            processes, stores and shares your personal information, and your rights related thereto, then please go to
            the home page for your insurer and search for Privacy Policy.&nbsp;
          </li>
        </ul>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          For information on our privacy practices as they relate to any of the information collected in &nbsp;the above
          scenarios, contact us at: <a href="mailto:onlinehelp@safelite.com">onlinehelp@safelite.com</a>. Alternatively,
          you may send a letter to the following address:
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>&nbsp;</p>
        <p style={{ margin: "0in 0in 0in 0.5in", lineHeight: "normal" }}>Safelite Group, Inc.</p>
        <p style={{ margin: "0in 0in 0in 0.5in", lineHeight: "normal" }}>Attn. Customer Care</p>
        <p style={{ margin: "0in 0in 0in 0.5in", lineHeight: "normal" }}>7400 Safelite Way</p>
        <p style={{ margin: "0in 0in 0in 0.5in", lineHeight: "normal" }}>Columbus, Ohio 43235</p>
        <p style={{ margin: "0in 0in 0in 0.5in", lineHeight: "normal" }}>&nbsp;</p>
        <p>
          California Shine the Light Requests are to be submitted for processing to{" "}
          <a href="mailto:Legal@Safelite.com">Legal@Safelite.com</a>
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          We adopt this CA Privacy Policy to comply with the California Consumer Privacy Act (&ldquo;CCPA&rdquo;), as
          may be amended, replaced, or superseded as well as any implementing regulations. Any terms defined in the CCPA
          have the same meaning when used in this CA Privacy Policy.
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>&nbsp;</p>
        <h4 style={{ margin: "0in", lineHeight: "normal" }}>
          <strong>Information we collect about California consumers</strong>
        </h4>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          <strong>&nbsp;</strong>
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          Safelite collects information that identifies, relates to, describes, references, is reasonably capable of
          being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or
          device (&ldquo;Personal Information&rdquo;). However, Personal Information for purposes of this CA Privacy
          Policy does not include:
        </p>
        <ul>
          <li>Publicly available information from government records.</li>
          <li>Deidentified or aggregated consumer information.</li>
          <li>
            Information excluded from the CCPA&apos;s scope, like: health or medical information covered by the Health
            Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical
            Information Act (CMIA) or clinical trial data; and
          </li>
          <li>
            Personal Information covered by certain sector-specific privacy laws, including the Fair Credit Reporting
            Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and
            the Driver&apos;s Privacy Protection Act of 1994.&nbsp;
            <p style={{ margin: "0in", lineHeight: "normal" }}>
              Specifically, we collect the following categories of Personal Information:
            </p>
            <p style={{ margin: "0in", lineHeight: "normal" }}>&nbsp;</p>
            <table style={{ textAlign: "left", borderWidth: "1px", borderStyle: "solid", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    <strong>Category</strong>
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    <strong>Examples</strong>
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    <strong>Do we collect this information?</strong>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    A. Identifiers
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol
                    address, email address, account name, Social Security number, driver&apos;s license number, passport
                    number, or other similar identifiers.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    B. Personal Information listed in California Customer Records statute (Cal. Civ Code 1798.80(e))
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    A name, signature, Social Security number, physical characteristics or description, address,
                    telephone number, passport number, driver&apos;s license or state identification card number,
                    insurance policy number, education, employment, employment history, bank account number, credit card
                    number, debit card number, or any other financial information, medical information, or health
                    insurance information.
                    <br />
                    Some Personal Information included in this category may overlap with other
                    categories.&nbsp;&nbsp;&nbsp;
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    C. Protected classification characteristics under California or federal law
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed,
                    marital status, medical condition, physical or mental disability, sex (including gender, gender
                    identity, gender expression, pregnancy or childbirth and related medical conditions), sexual
                    orientation, veteran or military status, genetic information (including familial genetic
                    information).&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>No</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    D. Commercial Information
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Records of personal property, products or services purchased, obtained, or considered, or other
                    purchasing or consuming histories or tendencies.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    E. Biometric Information
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to
                    extract a template or other identifier or identifying information, such as, fingerprints,
                    faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and
                    sleep, health, or exercise data.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>No</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    F. Internet or other similar network activity
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Browsing history, search history, information on a consumer&apos;s interaction with a website,
                    application, or advertisement.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    G. Geolocation data
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Physical location or movements.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>No</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    H. Sensory Data
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Audio, electronic, visual, thermal, olfactory, or similar information.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>Yes</td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    I. Professional or employment related information
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Current or past job history or performance evaluations.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Only for job applicants and employees
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C.
                    Section 1232g, 34 C.F.R. Part 99)).
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Education records directly related to a student maintained by an educational institution or party
                    acting on its behalf, such as grades, transcripts, class lists, student schedules, student
                    identification codes, student financial information, or student disciplinary records.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Only for job applicants and employees
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    K. Interferences drawn from other Personal Information
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    Profile reflecting a person&apos;s preferences, characteristics, psychological trends,
                    predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
                  </td>
                  <td style={{ width: "33.3333%", borderWidth: "1px", borderStyle: "solid", padding: "12px" }}>
                    No&nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <div>
          <h4>Sensitive Personal Information</h4>
        </div>
        <div>
          <p>
            We may also collect and use Sensitive Personal Information, as defined under California law, in limited
            contexts. Specifically, we at times collect information about a person&rsquo;s health and a person&rsquo;s
            social security number and driver&rsquo;s license number in connection with processing casualty loss and
            liability claims and/or pursuing or defending legal claims. We do not use Sensitive Personal Information for
            purposes other than those permitted by 11 Cal. Code. of Regs. &sect; 7027(l): (1) to perform services
            reasonably expected by consumers; (2) to prevent, detect, and investigate security incidents; (3) to resist
            malicious, deceptive, fraudulent, or illegal actions; (4) to ensure physical safety; (5) for short-term,
            transient use; (6) to verify or maintain service quality; and (7) as otherwise permitted by CPRA
            regulations. We do not use sensitive personal information to infer characteristics about you.&nbsp;
            Therefore, we do not offer a right to limit.&nbsp; Therefore, we do not offer you a right to limit our use
            of disclosure of your sensitive personal information.
          </p>
        </div>
        <h4>
          <strong>Why we collect your Personal Information</strong>
        </h4>
        <p>
          We may collect, use, or disclose the Personal Information in the above categories for the following purposes:
        </p>
        <ul>
          <li>
            To fulfill or meet the reason you provided the information. For example, if you share your name and contact
            information to request a price quote or ask a question about our products or services, we will use that
            Personal Information to respond to your inquiry. If you provide your Personal Information to purchase a
            product or service, we will use that information to process your payment and facilitate delivery. We may
            also save your information to facilitate new product orders or process returns.
          </li>
          <li>To provide, support, personalize, and develop our Website, products, and services.</li>
          <li>To create, maintain, customize, and secure your account with us.</li>
          <li>To process your requests, purchases, transactions, and payments and prevent transactional fraud.</li>
          <li>
            To provide you with support and to respond to your inquiries, including to investigate and address your
            concerns and monitor and improve our responses.
          </li>
          <li>
            To personalize your Website experience and to deliver content and product and service offerings we believe
            are relevant to your interests, including targeted offers and ads through our Website, third-party sites,
            and via mail, email, telephone calls, or text messages (with your consent, where required by law).
          </li>
          <li>
            To help maintain the safety, security, and integrity of our Website, products and services, databases and
            other technology assets, and business.
          </li>
          <li>
            For testing, research, analysis, and product development, including to develop and improve our Website,
            products, services, marketing, and business processes.
          </li>
          <li>
            To respond to governmental and law enforcement requests and as required by applicable law, court order, or
            governmental regulations.
          </li>
          <li>
            To take steps we deem necessary to protect, defend, and enforce our rights and the rights of others,
            including for billing and collection.
          </li>
          <li>As described to you when collecting your Personal Information or as otherwise set forth in the CCPA.</li>
          <li>
            To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or
            transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or
            similar proceeding, in which Personal Information held by us about consumers is among the assets
            transferred.
          </li>
        </ul>
        <p>
          We do not engage in automated decision-making that produces legal or similarly significant effects. Any
          automated processing we conduct is limited to operational purposes such as fraud prevention, system security,
          and service optimization, and does not result in decisions that significantly impact your rights or interests.
        </p>
        <h4 style={{ margin: "0in", lineHeight: "normal" }}>
          <strong>Notice of our collection, use, and disclosure of Personal Information in the last 12 months</strong>
        </h4>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          <strong>&nbsp;</strong>
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          In the last twelve (12) months, we have collected, used, and disclosed the following categories of Personal
          Information for a business purpose:
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>&nbsp;</p>
        <p>1. Categories of information collected in the last 12 months</p>
        <ul>
          <li>Category A: Identifiers.</li>
          <li>Category B: California Customer Records Personal Information categories.</li>
          <li>Category D: Commercial Information.</li>
          <li>Category F: Internet or other similar network activity.</li>
          <li>Category H: Sensory data.</li>
        </ul>
        <p>2. How we collected this information</p>
        <p style={{ margin: "0in", lineHeight: "normal", textIndent: "0.25in" }}>
          We collect the above categories of your Personal Information from the following sources:
        </p>
        <ul>
          <li>
            Directly from you. For example, from forms you complete or products and services you purchase,&nbsp; when
            you communicate with us, or when you provide us services.
          </li>
          <li>Indirectly from you. For example, from observing your actions on our Website.</li>
          <li>From third parties.&nbsp; This includes third party data brokers, web analytics tools.</li>
        </ul>
        <p>3. Why we collected Personal Information?</p>
        <p style={{ margin: "0in", lineHeight: "normal", textIndent: "0.25in" }}>
          We have collected and disclosed Personal Information in the above categories for the purposes described above.
        </p>
        <p style={{ margin: "0in", lineHeight: "normal", textIndent: "0.25in" }}>&nbsp;</p>
        <p>4. Who we have disclosed this information to for a business purpose</p>
        <p style={{ margin: "0in", lineHeight: "normal", textIndent: "0.25in" }}>
          For each of the above categories, in the past twelve months we disclosed Personal Information to our service
          providers that provide the following services:
        </p>
        <ul>
          <li>Payment processing</li>
          <li>Marketing and non-marketing communications</li>
          <li>Advertising platforms</li>
          <li>Data aggregation and brokerage</li>
          <li>Business analytics (marketing and non-marketing)</li>
          <li>IT and network administration such as data storage and management, website hosting, and data security</li>
          <li>Professional advice such as legal, accounting, tax, and business advisers</li>
          <li>
            Day-to-day business operation support such as courier services, document destruction, insurance, and
            electronic signature platforms
          </li>
        </ul>
        <div>
          <p>
            Some of the above disclosures may be considered a disclosure to a non-service provider third party for a
            business purpose under California law. In the past twelve months we have disclosed Personal Information to
            the following third parties for business purposes:&nbsp;
          </p>
        </div>
        <div
          style={{
            margin: "0px",
            padding: "0px",
            overflow: "visible",
            clear: "both",
            position: "relative",
            direction: "ltr",
            fontFamily: "'Segoe UI', 'Segoe UI Web', Arial, Verdana, sans-serif",
            backgroundColor: "#ffffff",
          }}
        >
          <p
            style={{
              marginBottom: "0px",
              padding: "0px",
              overflowWrap: "break-word",
              whiteSpace: "pre-wrap",
              verticalAlign: "baseline",
              fontKerning: "none",
              backgroundColor: "transparent",
              color: "windowtext",
            }}
          >
            &nbsp;
          </p>
        </div>
        <div
          style={{
            margin: "0px",
            padding: "0px",
            overflow: "visible",
            clear: "both",
            position: "relative",
            direction: "ltr",
            fontFamily: "'Segoe UI', 'Segoe UI Web', Arial, Verdana, sans-serif",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              margin: "2px 0px 2px -5px",
              padding: "0px",
              overflow: "visible",
              position: "relative",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <table
              border={1}
              style={{
                margin: "0px",
                padding: "0px",
                tableLayout: "fixed",
                width: "0px",
                overflow: "visible",
                borderCollapse: "collapse",
                emptyCells: "show",
                position: "relative",
                background: "transparent",
                borderSpacing: "0px",
              }}
            >
              <tbody style={{ margin: "0px", padding: "0px" }}>
                <tr style={{ margin: "0px", padding: "0px", overflow: "visible", height: "0px" }}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "220px",
                    }}
                  >
                    <div>
                      <div>
                        <p>
                          <strong>Category of Third Party&nbsp;</strong>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "201px",
                    }}
                  >
                    <div>
                      <div>
                        <p>
                          <strong>Business Purpose for Disclosure&nbsp;</strong>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "201px",
                    }}
                  >
                    <div>
                      <div>
                        <p>
                          <strong>Categories of Personal Information&nbsp;</strong>
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr style={{ margin: "0px", padding: "0px", overflow: "visible", height: "0px" }}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "220px",
                    }}
                  >
                    <div>
                      <div>
                        <p>Advertising platforms (including social media companies)&nbsp;</p>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "201px",
                    }}
                  >
                    <div>
                      <div>
                        <p>Cross-context behavioral advertising&nbsp;</p>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "201px",
                    }}
                  >
                    <div>
                      <div>
                        <div>Category A: Identifiers</div>
                        <div>Category B: California Customer Records Personal Information categories.</div>
                        <div>Category F: Internet or other similar network activity</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr style={{ margin: "0px", padding: "0px", overflow: "visible", height: "0px" }}>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "220px",
                    }}
                  >
                    <div>
                      <div>
                        <p>Data aggregators/brokers&nbsp;</p>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "201px",
                    }}
                  >
                    <div>
                      <div>
                        <p>Data matching, append, and hygiene services; cross-context behavioral advertising&nbsp;</p>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "0px",
                      verticalAlign: "top",
                      overflow: "visible",
                      position: "relative",
                      backgroundColor: "transparent",
                      border: "1px solid",
                      width: "201px",
                    }}
                  >
                    <div>
                      <div>
                        <div>Category A: Identifiers</div>
                        <div>Category B: California Customer Records Personal Information categories.</div>
                        <div>Category D: Commercial Information.</div>
                        <div>Category F: Internet or other similar network activity</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
          </div>
        </div>
        <div
          style={{
            margin: "0px",
            padding: "0px",
            overflow: "visible",
            clear: "both",
            position: "relative",
            direction: "ltr",
            fontFamily: "'Segoe UI', 'Segoe UI Web', Arial, Verdana, sans-serif",
            backgroundColor: "#ffffff",
          }}
        >
          <p
            style={{
              marginBottom: "0px",
              padding: "0px",
              overflowWrap: "break-word",
              whiteSpace: "pre-wrap",
              verticalAlign: "baseline",
              fontKerning: "none",
              backgroundColor: "transparent",
              color: "windowtext",
            }}
          >
            &nbsp;
          </p>
        </div>
        <div>
          <p>
            We occasionally use third-party repair companies to fulfill orders to consumers. If we use a third-party
            repair company in connection with services provided to you, we may disclose your Personal Information to
            them for the purpose of fulfilling the service.&nbsp;
          </p>
          <p>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              We may also share the above categories of Personal Information, excluding Sensitive Personal Information,
              with advertising platforms and data aggregation and brokerage companies for cross-context behavioral
              advertising purposes, improving the quality of your website experience, the performance of our
              advertisements, facilitate engagement with you and display relevant information to you.&nbsp; For more
              detailed information review the Cookies and Automatic Data Collection Technologies and Third-Party Use of
              Cookies and Other Tracking Technologies sections of the{" "}
            </span>
            <Link
              href="/safelite-group-privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              Privacy Policy
            </Link>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              .&nbsp;
            </span>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            />
          </p>
        </div>
        <div>
          <p>
            Under California law, &apos;sale&apos; means disclosing personal information to third parties for monetary
            or other valuable consideration. &apos;Sharing&apos; means disclosing personal information to third parties
            for cross-context behavioral advertising. We engage in sharing personal information with advertising
            platforms and social media companies for targeted advertising purposes.
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            />
          </p>
        </div>
        <div>
          <h4>Retention&nbsp;</h4>
        </div>
        <div>
          <p>
            We maintain Personal Information in accordance with our record retention policies which are informed by
            business needs and our legal and contractual obligations. For more detailed information, review the Data
            Retention sections of the{" "}
            <Link href="/safelite-group-privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </Link>
            .&nbsp;&nbsp;
          </p>
        </div>
        <h4>Your Rights and Choices</h4>
        <p>
          California law provides consumers with specific rights regarding their Personal Information. This section
          describes your privacy rights and explains how to exercise those rights.
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          A. Right to Know&ndash; Specific Pieces of Personal Information and/or Categories of Personal Information
        </p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>&nbsp;</p>
        <p style={{ margin: "0in", lineHeight: "normal" }}>
          You have the right to request that we disclose certain information to you about our collection, use,
          disclosure, and sale of your Personal Information over the past 12 months. Once we receive and confirm your
          verifiable consumer request (see <em>Introduction</em>), we will disclose to you:
        </p>
        <ul>
          <li>The categories of Personal Information we collected about you.</li>
          <li>The categories of sources for the Personal Information we collected about you.</li>
          <li>Our business or commercial purpose for collecting or selling that Personal Information.</li>
          <li>The categories of third parties with whom we share that Personal Information.</li>
          <li>The specific pieces of Personal Information we collected about you.</li>
          <li>
            If we sold or disclosed your Personal Information for a business purpose, two separate lists disclosing:
            <ul style={{ listStyleType: "circle" }}>
              <li>
                sales, identifying the Personal Information categories that each category of recipient purchased;
                and{" "}
              </li>
              <li>
                disclosures for a business purpose, identifying the Personal Information categories that each category
                of recipient obtained.
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <p>B. Right to Delete Personal Information&nbsp;</p>
          <p>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              You have the right to request that we delete any of your Personal Information that we collected and
              retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request (see
              Introduction), we will delete (and direct our service providers to delete) your Personal Information from
              our records, unless an exception applies.&nbsp;
            </span>
          </p>
        </div>
        <div>
          <p>
            We may deny a deletion request if retaining the information is necessary for us or our service provider(s)
            to:&nbsp;&nbsp;
          </p>
        </div>
        <ul>
          <li>
            Complete the transaction for which we collected the Personal Information, provide a good or service that you
            requested, take actions reasonably anticipated within the context of our ongoing business relationship with
            you, fulfill the terms or a written warranty or product recall conducted in accordance with federal law, or
            otherwise perform our contract with you.
          </li>
          <li>
            Help to ensure security and integrity to the extent the use of the Personal Information is reasonably
            necessary and proportionate for those purposes.
          </li>
          <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
          <li>
            Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise
            another right provided for by law.
          </li>
          <li>
            Comply with the California Electronic Communications Privacy Act (Cal. Penal Code &sect; 1546 et. seq.)
            <br />
          </li>
          <li>
            Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest
            that adheres to all other applicable ethics and privacy laws, when the information&rsquo;s deletion may
            likely render impossible or seriously impair the research&rsquo;s achievement, if you previously provided
            informed consent.
          </li>
          <li>
            Enable solely internal uses that are reasonably aligned with consumer expectations based on your
            relationship with us and that are compatible with the context in which you provided the information.
          </li>
          <li>Comply with a legal obligation.</li>
        </ul>
        <p>C. Right to Correct Inaccurate Personal Information&nbsp;</p>
        <div>
          <p>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              You have the right to request that we correct inaccurate Personal Information we maintain regarding you,
              taking into account the nature of the personal information and the purposes of our processing. You may
              provide us with documentation to support your request and we will consider it. We will provide you with
              instructions for supplying supporting documentation after you make your request.&nbsp; &nbsp;
            </span>
          </p>
          <p>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            />
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              We may decline to correct the Personal Information if we determine based on the totality of the
              circumstances that the Personal Information we have on file is more likely than not accurate. We may also
              deny the request if we determine it is likely fraudulent or abusive. If we decline to correct the Personal
              Information, you may request that we note in our records and notify any service providers and third
              parties to whom we disclosed the allegedly erroneous information that its accuracy has been
              disputed.&nbsp;
            </span>
          </p>
          <p>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            />
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              We may choose to delete the contested Personal Information instead of correcting it.&nbsp;&nbsp;
            </span>
          </p>
          <p>
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            />
            <span
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                fontFamily: "inherit",
                fontSize: "inherit",
                textAlign: "inherit",
                textTransform: "inherit",
                wordSpacing: "normal",
                whiteSpace: "inherit",
              }}
            >
              D. Exercising Your Know, Deletion, and Correction Rights&nbsp;
            </span>
          </p>
        </div>
        <div>
          <div>
            <ul>
              <li>
                How to submit requests.&nbsp; The fastest and most efficient way to exercise your rights described
                above, is to submit a verifiable consumer request to us by clicking{" "}
                <a
                  href="https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{" "}
                to submit the request online or copy and pasting this into your browser:{" "}
                <a
                  href="https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a
                </a>
                . If you are having difficulty with the weblinks then call us at the number below.{" "}
              </li>
              <li>
                Who may submit requests. Only you, or someone legally authorized to act on your behalf, may make a
                verifiable consumer request related to your Personal Information. You may also make a verifiable
                consumer request on behalf of your minor child.&nbsp; You may designate an authorized agent in writing
                to make a request on your behalf.&nbsp;
              </li>
              <li>
                How often can you submit requests. You may only make a Right to Know request twice within a 12-month
                period. You may not make a Correction request if we previously denied a Correction request in the prior
                six months regarding the same alleged inaccuracy unless you provide new or additional documentation to
                support your claim that the information is inaccurate.&nbsp;
              </li>
              <li>
                How we verify and respond to requests.
                <ul>
                  <li>
                    Your request must be verifiable. That means that you, or your authorized agent, must provide
                    sufficient information that allows us to reasonably verify that you are the person about whom we
                    collected Personal Information or an authorized agent of that person with written permission from
                    the consumer or a power of attorney to act on their behalf.&nbsp;
                  </li>
                  <li>
                    We may verify your request:&nbsp;
                    <ul>
                      <li>
                        Through our existing authentication practices for your password-protected account with us, if
                        you have one. Making a verifiable consumer request does not require you to create an account
                        with us, if you do not make a request through an account with us.&nbsp;
                      </li>
                      <li>
                        If you do not have a password-protected account with us, we may require you to provide certain
                        information such as first name, last name, phone number, service address, and/or invoice number
                        to verify your identify.&nbsp;&nbsp;
                      </li>
                      <li>
                        Regardless of whether or not you have a password-protected account with us, if we are required
                        by law to verify your identity to a reasonably high degree of certainty, we may require you to
                        verify additional pieces of information and/or sign a declaration under penalty of perjury
                        verifying your identity and request.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Your verifiable consumer request must also describe your request with sufficient detail that allows
                    us to properly understand, evaluate, and respond to it.&nbsp;
                  </li>
                  <li>
                    We cannot respond to your request or provide you with Personal Information if we cannot verify your
                    identity or authority to make the request and confirm the Personal Information relates to you.&nbsp;
                  </li>
                  <li>
                    We will only use Personal Information provided in a request to verify the requestor&apos;s identity
                    or authority to make the request and fulfill or deny the request. We may retain Personal Information
                    provided in connection with your request for at least two (2) years as required by law.{" "}
                  </li>
                  <li>
                    Response Timing and Format.{" "}
                    <ul>
                      <li>
                        We will acknowledge receipt of your request within ten (10) business days from its receipt.{" "}
                      </li>
                      <li>
                        We endeavor to respond to a verifiable consumer request within forty-five (45) days from its
                        receipt. If we require more time, up to a maximum of ninety (90) days from receipt, we will
                        inform you of the reason and extension period in writing.{" "}
                      </li>
                      <li>
                        If you have a password-protected online account with us, we will deliver our written response to
                        that account. If you do not have a password-protected online account with us, we will deliver
                        our written response by mail or electronically, at your option.&nbsp;{" "}
                      </li>
                      <li>
                        Any disclosures we provide will only cover the 12-month period preceding receipt of your
                        request. The response we provide will also explain the reasons we cannot comply with a request,
                        if applicable. If you requested a copy of the specific Personal Information we have on file
                        about you, we will select a format to provide your Personal Information that is readily useable
                        and should allow you to transmit the information from one entity to another entity without
                        hindrance. We will not provide certain Personal Information in response to a request when the
                        information is too sensitive, for example your social security number, financial account number,
                        or account passwords.{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    We do not charge a fee to process or respond to your request unless it is excessive, repetitive, or
                    manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made
                    that decision and provide you with a cost estimate before completing your request.&nbsp;
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <p>E.&nbsp; Opting Out.&nbsp;</p>
              <p>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  If you would like to opt out of the sale or sharing of your Personal Information, you may do so using
                  our Do Not Sell/Share My Personal Information online form by clicking{" "}
                </span>
                <a
                  href="https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  here
                </a>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  {" "}
                  or copy and pasting this into your browser:{" "}
                </span>
                <a
                  href="https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  https://privacyportal.onetrust.com/webform/d3b95a93-e22e-4d4d-a806-482052406557/draft/48f5d98d-2135-41f2-a54a-701815a0247a
                </a>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  . We will also recognize browser-based opt-out signals as provided under law. If we receive an opt-out
                  signal and are able to identify the consumer to whom the signal relates, we will treat the signal as a
                  request to opt out related to all Personal Information we have on file for the consumer. If we receive
                  an opt-out signal and are not able to identify the consumer to whom the signal relates, we will treat
                  the signal as a request to opt out limited to the Personal Information we collect from the consumer
                  during the online session during which the signal is present.&nbsp;
                </span>
              </p>
              <p>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                />
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  If you do not want us to use your contact information to promote our own products and services, or
                  third parties&rsquo; products or services, via email you can opt-out by submitting your information
                  here:{" "}
                </span>
                <Link
                  href="/email-unsubscribe"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  https://www.safelite.com/email-unsubscribe
                </Link>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  , or by sending us an email with your request to{" "}
                </span>
                <a
                  href="mailto:onlinehelp@safelite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpaceCollapse: "inherit",
                  }}
                >
                  onlinehelp@safelite.com
                </a>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  . You may also opt-out of further email marketing communications by replying to any promotional email
                  we have sent you or following the opt-out links on that message.&nbsp;
                </span>
              </p>
              <h4>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                />
                Non-Discrimination&nbsp;
              </h4>
              <p>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "20.8px",
                    fontWeight: "bold",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                />
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                >
                  We will not discriminate against you for exercising any of your CCPA rights, including by denying
                  goods or services, charging different prices, or providing different levels of service quality. You
                  have a right not to receive discriminatory treatment by us for exercising your privacy rights.&nbsp;
                </span>
              </p>
              <h4>
                <span
                  style={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    textAlign: "inherit",
                    textTransform: "inherit",
                    wordSpacing: "normal",
                    whiteSpace: "inherit",
                  }}
                />
                Other California Privacy Rights&nbsp;
              </h4>
            </div>
          </div>
          <div>
            <p>
              California&rsquo;s &quot;Shine the Light&quot; law (Civil Code Section &sect; 1798.83) permits users of
              websites that are California residents to request certain information regarding a website operator&rsquo;s
              disclosure of Personal Information to third parties for their direct marketing purposes. We do not
              disclose Personal Information to third parties for those third parties to use for their own direct
              marketing purposes.&nbsp;
            </p>
            <p>
              California Shine the Light privacy request submission requirements. All California Shine the Light privacy
              privacy-related requests must be submitted to legal@safelite.com. Safelite takes customer privacy and data
              protection seriously by maintaining robust policies and procedures to safeguard customer information and
              limiting the collection, use, and disclosure of a customer&rsquo;s personal information to what is
              necessary and proportionate to achieve the purposes for which the information was collected, which align
              with the reasonable expectations of the customer in the context of the goods and services we offer.&nbsp;
              Therefore, Safelite DOES NOT disclose personal information to third parties for the third parties&rsquo;
              direct marketing purposes.&nbsp; Safelite reserves the right to respond to such requests using a standard
              form letter that addresses the specific nature of your request while ensuring compliance with applicable
              privacy laws.&nbsp;
            </p>
            <h4>Who to Contact for more information&nbsp;</h4>
          </div>
          <div>
            <p>
              For questions or concerns about our privacy policy and practices, you can contact us at the method set
              forth below.&nbsp;
            </p>
            <p>
              Contact Information for all requests, except as noted:{" "}
              <a href="mailto:onlinehelp@safelite.com">onlinehelp@safelite.com</a>
            </p>
            <p>
              <span
                style={{
                  backgroundColor: "transparent",
                  color: "inherit",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  textAlign: "inherit",
                  textTransform: "inherit",
                  wordSpacing: "normal",
                  whiteSpace: "inherit",
                }}
              />
              <span
                style={{
                  backgroundColor: "transparent",
                  color: "inherit",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  textAlign: "inherit",
                  textTransform: "inherit",
                  wordSpacing: "normal",
                  whiteSpace: "inherit",
                }}
              />
            </p>
          </div>
          <div>
            <p>Phone: 1-800-270-5679</p>
          </div>
          <div>
            <p>Mailing Address:&nbsp;</p>
          </div>
          <div>
            <p>Safelite Group, Inc.&nbsp;</p>
            <p>Attn. Customer Care&nbsp;</p>
          </div>
          <div>
            <p>7400 Safelite Way&nbsp;</p>
          </div>
          <div>
            <p>Columbus, Ohio 43235&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              California Shine the Light Requests are to be submitted for processing to{" "}
              <a href="mailto:Legal@Safelite.com">Legal@Safelite.com</a>
            </p>
            <p>&nbsp;</p>
          </div>
        </div>
      </ContentBlock>
    </ServicePageShell>
  );
}
