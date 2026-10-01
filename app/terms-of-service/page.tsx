import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/app/components/site-header";
import SiteFooter from "@/app/components/site-footer";
import DontWaitCta from "@/app/components/dont-wait-cta";

/* ---------- Small reusable pieces (same Tailwind classes as the reference) ---------- */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pt-2">
      <h4 className="text-lg sm:text-[20px] font-normal text-black leading-[30px] mb-2">
        {title}
      </h4>
      <div className="space-y-3 text-base text-[#525656] leading-[25px] font-normal">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h5 className="text-base sm:text-[18px] font-normal text-black leading-[28px] pt-2">
      {children}
    </h5>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 marker:text-[#525656]">
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

const linkClass = "text-[#0070d1] hover:underline font-medium";

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 font-sans tracking-[.03em] text-[#525656]">
        <div className="max-w-[990px] mx-auto">
          {/* Main Title & Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-[32px] font-bold text-black leading-[40px] mb-3 tracking-[.03em]">
              Terms of Service
            </h1>
            <div className="w-[120px] h-[5px] bg-[#db0020] mb-4" />
            <p className="text-sm text-[#525656] italic">
              Last Modified: November 8, 2023
            </p>
          </div>

          <div className="space-y-6">
            {/* 1 */}
            <Section title="1. Acceptance of the Terms of Service">
              <p>
                These Terms of Service are entered into by and between You and Safelite AutoGlass, and/or related and
                affiliated entities (collectively &quot;Safelite&quot;, &quot;us&quot; or &quot;we&quot;). The following
                terms and conditions, together with our{" "}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                and any other general privacy documents (collectively, these &quot;Terms of Service&quot;), govern your
                access to and use of the websites that post a link to these Terms of Service: www.safelite.com,
                www.safelitesolutions.com, www.safelitefoundation.org, www.serviceautoglass.com, and
                www.safelitechallenge.org (our &quot;Website&quot;), applications, or other services we offer where
                these Terms of Service are posted, including any content, features, functionality, and services offered
                on or through the same, that we make available to you (collectively, the &quot;Services&quot;), whether
                as a guest or a registered user and regardless of how you access or use it, whether via computer, mobile
                device or otherwise.
              </p>
              <p>Please read the Terms of Services carefully before you start to use the Services.</p>
              <p>
                BY USING THE SERVICES YOU ACCEPT AND AGREE TO BE BOUND AND ABIDE BY THESE TERMS OF SERVICE AND OUR
                PRIVACY POLICY, FOUND ON OUR WEBSITE INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT WANT TO AGREE TO
                THESE TERMS OF SERVICE OR THE PRIVACY POLICY, YOU MUST NOT ACCESS OR USE THE SERVICES.
              </p>
              <p>
                The Services are offered and available to users who are 16 years of age or older. By using this
                Website, you represent and warrant that you meet all of the foregoing eligibility requirements. If you
                do not meet all of these requirements, you must not access or use the Website.
              </p>
            </Section>

            {/* 2 */}
            <Section title="2. Changes to the Terms of Service">
              <p>
                We may revise and update these Terms of Service from time to time in our sole discretion. Unless we
                state otherwise, all changes are effective upon notice and apply to all access to and use of the
                Services thereafter. However, any changes to the provisions set forth in Governing Law and Jurisdiction
                (section 24 below) will not apply to any disputes for which the parties have actual notice on or prior
                to the date the change is posted on the Services.
              </p>
              <p>
                Your continued use of the Services following posting of revised Terms of Service means that you accept
                and agree to the changes.
              </p>
            </Section>

            {/* 3 */}
            <Section title="3. Your Privacy">
              <p>
                All information that you provide to us or that we collect through your use of the Services is subject
                to our{" "}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                found on our Website. By using the Services, you consent to all actions taken by us with respect to
                your information in compliance with the Privacy Policy.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. Accessing and Using the Services">
              <p>
                We reserve the right to withdraw or amend the Services, including any content, information, or other
                materials we provide through or in connection with the Services (&quot;Service Content&quot;) in our
                sole discretion without notice. We will not be liable if for any reason all or any part of the Services
                or Service Content is unavailable at any time or for any period. From time to time, we may restrict
                access to some or all parts of the Services or Service Content.
              </p>
              <p>
                To access the Services, you may be asked to create an account by providing certain registration details
                or other information. Regardless of whether you register with us or use the Services as a guest, it is
                a condition of your use of the Services that all the information you provide on the Services is
                correct, current and complete.
              </p>
              <p>
                If you choose, or are provided with, a username, password or any other piece of information as part of
                our security procedures, you must treat such information as confidential, and you must not disclose it
                to any other person or entity. You also acknowledge that your account is personal to you and agree not
                to provide any other person with access to the Services or portions of it using your username,
                password, or other security information. You agree to notify us immediately of any unauthorized access
                to or use of your username or password or any other breach of security.
              </p>
              <p>
                We have the right to disable any username, password or other identifier, whether chosen by you or
                provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion,
                you have violated any provision of these Terms of Service.
              </p>
            </Section>

            {/* 5 */}
            <Section title="5. Mobile Device Access">
              <p>
                To the extent you access the Services through a mobile device, your wireless service carrier&apos;s
                standard charges, data rates and other fees may apply. In addition, downloading, installing, or using
                certain mobile services or applications may be prohibited or restricted by your carrier, and not all
                mobile services or applications may work with all carriers or devices. In the event you change or
                deactivate your mobile telephone number, you agree to promptly update your Safelite account
                information.
              </p>
            </Section>

            {/* 6 */}
            <Section title="6. Intellectual Property">
              <p>
                The Services and Service Content and all rights therein are owned by Safelite, its licensors or other
                providers of such material, and are protected by United States and international copyright, trademark,
                patent, trade secret and other intellectual property or proprietary rights laws.
              </p>
              <p>
                Subject to your compliance with these Terms of Service, Safelite grants you a limited, revocable,
                non-exclusive and non-transferable license in the United States to access and use the Services and
                Service Content solely for your personal, non-commercial use. No right, title or interest in or to the
                Services or any Service Content is transferred to you, and all rights not expressly granted are
                reserved by Safelite and its licensors. Any use of the Services and/or Service Content not expressly
                permitted by these Terms of Service is a breach of these Terms of Service and may violate copyright,
                trademark, and other laws.
              </p>
            </Section>

            {/* 7 */}
            <Section title="7. Trademarks">
              <p>
                The Safelite and Safelite AutoGlass, names and the respective logos and all related names, logos,
                product and service names, designs and slogans of Safelite Group, Inc. and/or its affiliate companies
                are trademarks of Safelite Group, Inc., its parent and/or affiliate companies or its licensors. You
                must not use such marks without the prior written permission of Safelite. All other names, logos,
                product and service names, designs and slogans on the Services are the trademarks of their respective
                owners.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Promo Codes">
              <p>
                Safelite may, in its discretion, provide you with codes from time to time which allow you to use the
                Services without or with reduced payment (&quot;Promo Codes&quot;). You agree that Promo Codes are
                personal to you and may not be sold, transferred, or shared with third parties. Without limiting the
                foregoing, you agree not to post Promo Codes on websites or otherwise share them with the public. Promo
                Codes have no cash value and may expire prior to your use. We reserve the right to disable or change
                the value of a Promo Code that has been issued at any time and for any reason.
              </p>
            </Section>

            {/* 9 */}
            <Section title="9. Fees and Payment; No Refunds">
              <p>
                Safelite offers several different purchase options for use of the Services. You may pay for the
                Services by credit card or with your PayPal account. You represent and warrant to Safelite that any
                payment information you provide to Safelite is true and correct that you are authorized to use such
                payment account. You agree to promptly update your account information with any changes that maybe
                necessary (for example, a change in your billing address or credit card expiration date).
              </p>
              <p>
                FEES PAID BY YOU ARE NON-REFUNDABLE. However, from time to time and in our sole discretion, we may
                choose to provide to you with a one-time refund, discount, or other consideration
                (&quot;credit&quot;). The provision of a credit to you in one instance does not entitle you to a credit
                in the future for a similar instance, nor does it obligate us to provide credits in the future, under
                any circumstance. If you have a question about our refund policy, contact Safelite. (See Notices to Us
                and Your Comments and Concerns below in Section 28)
              </p>
              <p>
                CANCELLATIONS. In the case of prepaid services booked through the Website, a cancellation fee, plus
                applicable taxes, may be charged if the service is cancelled in full. You will be refunded your
                original payment amount minus the cancellation fee. Any partial cancellation of prepaid services will
                be refunded to your credit card after the remaining service has been performed.
              </p>
              <p>You may reschedule service at any time without incurring any cancellation fee.</p>
            </Section>

            {/* 10 */}
            <Section title="10. User Conduct">
              <p>
                You may use the Services and Service Content only for lawful purposes and in accordance with these
                Terms of Service. You agree not to use the Services or Service Content:
              </p>
              <BulletList
                items={[
                  "In any way that violates any applicable federal, state, local or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).",
                  "For the purpose of exploiting, harming or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information or otherwise.",
                  "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services or Service Content, or which, as determined by us, may harm Safelite or users of the Services or expose them to liability.",
                  "Use the Services in any manner that could disable, overburden, damage, or impair the Website or interfere with any other party's use of the Services, including their ability to engage in real time activities through the Services.",
                  "Use any robot, spider or other automatic device, process or means to access the Services for any purpose, including monitoring or copying any Service Content.",
                  "Use any manual process to monitor or copy any Service Content or for any other unauthorized purpose without our prior written consent.",
                  "Use any device, software or routine that interferes with the proper working of the Services.",
                  "Introduce any viruses, Trojan horses, worms, logic bombs or other material which is malicious or technologically harmful.",
                  "Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the Services, the servers on which the Services or Service Content are stored, or any server, computer or database connected to the Services.",
                  "Attack the Services via a denial-of-service attack or a distributed denial-of-service attack.",
                  "To transmit, or procure the sending of, any advertising or promotional material, including any \"junk mail\", \"chain letter\" or \"spam\" or any other similar solicitation.",
                  "To impersonate or attempt to impersonate Safelite, a Safelite employee, another user or any other person or entity (including, without limitation, by using e-mail addresses or screen names associated with any of the foregoing).",
                  "Otherwise attempt to interfere with the proper working of the Services.",
                ]}
              />
            </Section>

            {/* 11 */}
            <Section title="11. User Contributions">
              <p>
                Safelite may, in its sole discretion, permit you from time to time to post, submit, publish, display or
                transmit (hereinafter, “submit”) to Safelite through the Services content or materials including,
                without limitation, feedback related to the Services.
              </p>
              <p>
                Any User Contribution you submit will be considered non-confidential and non-proprietary. By providing
                any User Contribution on the Services, you grant us and our affiliates, business partners, and service
                providers, and each of their and our respective licensees, successors and assigns the right to use,
                reproduce, modify, perform, display, distribute and otherwise disclose to third parties any such
                material for any purpose, without further notice to or consent from you, and without payment to you or
                any person or entity.
              </p>
              <p>You represent and warrant that:</p>
              <BulletList
                items={[
                  "You either own or control all rights in and to the User Contributions or have the right to grant the license granted above to us and our affiliates, business partners, and service providers, and each of their and our respective licensees, successors and assigns;",
                  "Your User Contributions will not contain any material which is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory or otherwise objectionable or otherwise violate the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations;",
                  "Neither your User Contributions nor use of your User Contributions as contemplated herein will infringe any patent, trademark, trade secret, copyright or other intellectual property or other rights of any other person or entity; and",
                  "All of your User Contributions do and will comply with these Terms of Service.",
                ]}
              />
              <p>
                You understand and acknowledge that you are responsible for any User Contributions you submit or
                contribute, and you, not Safelite, have fully responsibility for such content, including its legality,
                reliability, accuracy and appropriateness.
              </p>
              <p>
                We are not responsible, or liable to any third party, for the content or accuracy of any User
                Contributions submitted by you or any other user of the Services.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. Monitoring and Enforcement; Termination">
              <p>We have the right to:</p>
              <BulletList
                items={[
                  "Disclose your identity or other information about you to any third party who claims that material posted by you through or in connection with your use of the Services is defamatory or otherwise violates their rights, including their intellectual property rights or their right to privacy.",
                  "Disclose your identity or other information about you to any third party who claims that any act or omission attributable to you violates its rights, applicable law, or these Terms of Service.",
                  "Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Services.",
                  "Terminate or suspend your access to all or part of the Services for any or no reason, including without limitation, any violation of these Terms of Service.",
                ]}
              />
              <p>
                Without limiting the foregoing, we have the right to fully cooperate with any law enforcement
                authorities or court order requesting or directing us to disclose the identity or other information of
                anyone posting any materials on or through the Services or otherwise in any way related to your use of
                the Services. YOU WAIVE AND HOLD HARMLESS SAFELITE AND ITS PARENT COMPANY, AFFILIATE COMPANIES,
                OFFICERS, DIRECTORS, EMPLOYEES, BUSINESS PARTNERS, LICENSORS AND SERVICE PROVIDERS FROM ANY CLAIMS
                RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF,
                INVESTIGATIONS BY SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
              </p>
            </Section>

            {/* 13 */}
            <Section title="13. Reliance on Information Posted">
              <p>
                The information presented on or through the Services is made available solely for general information
                purposes. We do not warrant the accuracy, completeness or usefulness of this information. Any reliance
                you place on such information is strictly at your own risk. We disclaim all liability and responsibility
                arising from any reliance placed on such materials by you or any other visitor to the Services, or by
                anyone who may be informed of any of its contents.
              </p>
              <p>
                The Services may include content provided by third parties, including materials provided by other users
                and third-party licensors. All statements and/or opinions expressed in these materials, and all articles
                and responses to questions and other content, other than the content provided by Safelite, are solely
                the opinions and the responsibility of the person or entity providing those materials. These materials
                do not necessarily reflect the opinion of Safelite. We are not responsible, or liable to you or any
                third party, for the content or accuracy of any materials provided by any third parties.
              </p>
            </Section>

            {/* 14 */}
            <Section title="14. Changes to the Services">
              <p>
                We may update the Service Content from time to time, but the Service Content is not necessarily
                complete or up-to-date. Accordingly, any of the Service Content may be out of date at any given time,
                and we are under no obligation to update such material.
              </p>
            </Section>

            {/* 15 */}
            <Section title="15. Other Terms and Conditions">
              <p>
                Additional terms and conditions may also apply to specific portions, services or features of the
                Services. All such additional terms and conditions are hereby incorporated by this reference into these
                Terms of Service.
              </p>
            </Section>

            {/* 16 */}
            <Section title="16. Idea Submission Policy">
              <p>
                Other than those we have specifically requested (and to which specific additional terms apply), our
                policy is not to accept or consider ideas or suggestions submitted by our users. We have adopted this
                policy in order to avoid confusion and misunderstandings in case that your ideas, suggestions, or other
                materials are similar to ones that have developed (or may develop) independently. Therefore, we are not
                responsible for any ideas, suggestions, or materials submitted to us. If you still choose to send us
                ideas, suggestions, or other materials, you agree that we are free to use these ideas, suggestions, or
                other materials in any way that it may deem fit without any liability or payment of any kind to you.
              </p>
            </Section>

            {/* 17 */}
            <Section title="17. Social Media Features">
              <p>The Services may provide certain social media features that enable you to:</p>
              <BulletList
                items={[
                  "Link from your own or certain third-party websites to certain content on the Services.",
                  "Send e-mails or other communications with certain content, or links to certain content, on the Services.",
                  "Cause limited portions of content on the Services to be displayed or appear to be displayed on your own or certain third-party websites.",
                ]}
              />
              <p>
                You may use these features solely as they are provided by us, solely with respect to the content they
                are displayed with and otherwise in accordance with any additional terms and conditions we provide with
                respect to such features. We may disable all or any social media features and any links at any time
                without notice in our discretion.
              </p>
            </Section>

            {/* 18 */}
            <Section title="18. Agreement to Receive Text Messages">
              <p>
                By providing your mobile number, you agree that Safelite may send you periodic SMS or MMS messages
                containing but not limited to important service-related information, updates, deals, and specials. By
                participating in the SMS/MMS Service, you are agreeing to these Terms and to the Privacy Policy. When
                you opt into our SMS/MMS program, you understand and agree that these Terms are incorporated into, and
                become part of, the SMS/MMS Terms of Use (and both documents are together, the “Terms”).
              </p>
              <p>
                THE TERMS CONTAIN AN ARBITRATION AGREEMENT, JURY AND CLASS ACTION WAIVERS, LIMITATIONS ON OUR LIABILITY,
                AND OTHER PROVISIONS THAT AFFECT YOUR LEGAL RIGHTS REGARDING THE SMS PROGRAM. PLEASE CAREFULLY READ AND
                UNDERSTAND THESE TERMS.
              </p>
              <p>By opting into the SMS/MMS Service, you:</p>
              <BulletList
                items={[
                  "Authorize Safelite to use autodialer or non-autodialer technology to send text messages to the mobile phone number associated with your opt-in (i.e., the number listed on the opt-in form or, if none, the number from which you send the opt-in, or, if none, the number on file for the account associated with your opt-in).",
                  "Acknowledge that you do not have to agree to receive messages as a condition of purchase.",
                  "Confirm that you are the subscriber to the relevant phone number or that you are the customary user of that number on a family or business plan and that you are authorized to opt in.",
                  "Consent to the use of an electronic record to document your opt-in.",
                  "Understand that message rates may apply and may vary and you accept these rates.",
                  "Data obtained from you in connection with this SMS/MMS service may include your cell phone number, your carrier's name, and the date, time and content of your messages, as well as other information that you provide. We may use this information to contact you and to provide the services you request from us.",
                  "By subscribing or otherwise using the service, you acknowledge and agree that we will have the right to change and/or terminate the service at any time, with or without cause and/or advance notice.",
                ]}
              />
              <p>If you have any questions, please contact Safelite at 800-800-2727.</p>

              <SubHeading>18.1 Charges and Carriers.</SubHeading>
              <p>
                Message and data rates may apply. Please consult your service agreement with your wireless carrier or
                contact your wireless carrier to determine your phone&apos;s pricing plan and the charges for sending
                and receiving text messages. You acknowledge that you are responsible for any message, data or other
                charges incurred (usage, subscription, etc.) as a result of using the SMS Service.
              </p>

              <SubHeading>18.2</SubHeading>
              <p>
                Supported carriers are AT&amp;T, T-Mobile®, Verizon Wireless, Sprint, Boost, U.S. Cellular®, MetroPCS®,
                InterOp, Cellcom, C Spire Wireless, Cricket, Virgin Mobile, and other smaller regional carriers. The SMS
                Service may not be available on all wireless carriers. Safelite may add or remove any wireless carrier
                from the SMS/MMS Service at any time without notice. Safelite. and mobile carriers are not responsible
                for any undue delays, failure of delivery, or errors in messages.
              </p>

              <SubHeading>18.3 To Stop the SMS/MMS Service.</SubHeading>
              <p>
                To stop receiving text messages from Safelite reply with the keyword STOP to any of the text messages
                you have received from Safelite. For Services operated through a different number, text the keyword STOP
                to that number to opt out. Your opt-out request may generate either a confirmation text or a texted
                request to clarify the text message program to which it applies (if you have more than one). To
                complete your opt-out, please provide the requested clarification. You acknowledge that the text
                message platform will honor an unsubscribe request if you respond with only the keyword STOP and agree
                that Safelite and its service providers will have no liability for failing to honor such requests. If
                you unsubscribe from one of our text message programs, you may continue to receive text messages from
                Safelite through any other programs you have joined until you separately unsubscribe from those
                programs. These Terms still will apply if you withdraw the consent mentioned above or opt out of the
                SMS/MMS Service. You further understand and agree that any opt-out request may not take effect
                immediately but will take effect as soon as possible within the limitations of the Safelite systems.
              </p>

              <SubHeading>18.4 Help and Questions.</SubHeading>
              <p>
                You can text the keyword HELP to 800-800-2727 for assistance at any time. After you send the SMS/MMS
                message “HELP” to us, we will respond with instructions on how to use our service as well as how to
                unsubscribe and main menu if applicable. You can also contact us at 800-800-2727.
              </p>

              <SubHeading>18.5 Mobile Phone Number Change.</SubHeading>
              <p>
                In the event that you change or deactivate your mobile phone number, you agree to notify Safelite by
                emailing{" "}
                <a href="mailto:onlinehelp@safelite.com" className={linkClass}>
                  onlinehelp@safelite.com
                </a>{" "}
                or calling 800-638-8958.
              </p>

              <SubHeading>18.6 Data and Message Frequency.</SubHeading>
              <p>
                Message and data rates may apply for any messages sent to you from us and to us from you. This does not
                include messages non-autodialed messages such as those from sales associates, or conversations with
                “HELP” providers. If you have any questions about your text or data plan, it is best to contact your
                wireless provider. For questions about the services Safelite provides, contact us at 800-800-2727.
              </p>
              <p>
                Safelite will not be liable for any delays in the receipt of any text messages. Delivery is subject to
                effective transmission from your network operator.
              </p>
            </Section>

            {/* 19 */}
            <Section title="19. Third Party Sites and Services">
              <p>
                The Services may link to or may be accessed in connection with other sites, services, or resources that
                are provided by third parties. These links or the ability to access other sites, services, or resources
                from the Service are provided for your convenience only. We have no control over the content of those
                sites, services, or resources, and accept no responsibility for them or for any loss or damage that may
                arise from your use of them. If you decide to access any of the third-party sites, services, or
                resources linked to or otherwise accessible from the Services, you do so entirely at your own risk and
                subject to the terms and conditions of use and privacy policies for such sites.
              </p>
            </Section>

            {/* 20 */}
            <Section title="20. Geographic Restrictions">
              <p>
                The owner of the Services is based in the state of Ohio in the United States. We make no claims that the
                Services or any of its content is accessible or appropriate outside of the United States. Access to the
                Services may not be legal by certain persons or in certain countries. If you access the Services from
                outside the United States, you do so on your own initiative and are responsible for compliance with
                local laws.
              </p>
            </Section>

            {/* 21 */}
            <Section title="21. Disclaimer of Warranties">
              <p>
                You understand that we cannot and do not guarantee or warrant that files available for downloading from
                the internet or the Services will be free of viruses or other destructive code. You are responsible for
                implementing sufficient procedures and checkpoints to satisfy your particular requirements for
                anti-virus protection and accuracy of data input and output, and for maintaining a means external to our
                site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
                DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT
                YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE
                SERVICES OR PRODUCTS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT,
                OR ON ANY WEBSITE LINKED TO IT.
              </p>
              <p>
                YOUR USE OF THE SERVICES, ITS CONTENT, AND ANY SERVICES OR PRODUCTS OBTAINED THROUGH THE WEBSITE IS AT
                YOUR OWN RISK. THE WEBSITE, ITS CONTENT AND ANY SERVICES OR PRODUCTS OBTAINED THROUGH THE WEBSITE ARE
                PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED. NEITHER SAFELITE NOR ANY PERSON ASSOCIATED WITH SAFELITE MAKES ANY WARRANTY OR REPRESENTATION
                WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE
                WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER SAFELITE NOR ANYONE ASSOCIATED WITH SAFELITE
                REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT OR ANY SERVICES OR PRODUCTS OBTAINED THROUGH THE
                WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT
                OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT
                THE WEBSITE OR ANY SERVICES OR PRODUCTS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR
                EXPECTATIONS. THIS DISCLAIMER DOES NOT APPLY TO USER CONTRIBUTIONS PROVIDED BY YOU.
              </p>
              <p>
                SAFELITE HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR
                OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS
                FOR PARTICULAR PURPOSE.
              </p>
              <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
            </Section>

            {/* 22 */}
            <Section title="22. Limitation on Liability">
              <p>
                IN NO EVENT WILL SAFELITE, ITS AFFILIATES, BUSINESS PARTNERS, OR THEIR LICENSORS, SERVICE PROVIDERS,
                EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
                ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, SERVICE CONTENT, OR
                SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES, INCLUDING ANY DIRECT,
                INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO,
                PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF
                BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT
                (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE. IN NO EVENT WILL
                SAFELITE&apos;S TOTAL LIABILITY TO YOU IN CONNECTION WITH THE SERVICES EXCEED THE GREATER OF (1) THE
                AMOUNT YOU HAVE PAID TO SAFELITE IN THE LAST TWELVE (12) MONTHS; OR (2) FIVE-HUNDRED DOLLARS ($500
                U.S.).
              </p>
              <p>THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
            </Section>

            {/* 23 */}
            <Section title="23. Indemnification and Release">
              <p>
                You agree to indemnify and hold harmless Safelite and its and respective officers, directors,
                employees, contractors, agents, licensors, suppliers, successors and assigns from and against any
                claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable
                attorneys&apos; fees) arising out of or relating to your violation of these Terms of Service or your use
                of any information obtained from the Services.
              </p>
              <p>
                If you are a California resident, you waive California Civil Code Section 1542, which says: “A general
                release does not extend to claims which the creditor does not know or suspect to exist in his favor at
                the time of executing the release, which if known by him must have materially affected his settlement
                with the debtor.” If you are a resident of another jurisdiction, you waive any comparable statute or
                doctrine.
              </p>
            </Section>

            {/* 24 */}
            <Section title="24. Governing Law and Jurisdiction">
              <p>
                All matters relating to the Services and these Terms of Service and any dispute or claim arising
                therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be
                governed by and construed in accordance with the internal laws of the State of Ohio without giving
                effect to any choice or conflict of law provision or rule (whether of the State of Ohio or any other
                jurisdiction).
              </p>
              <p>
                Any legal suit, action or proceeding arising out of, or related to, these Terms of Service or the
                Services shall be instituted exclusively in the state or federal courts of Ohio although we retain the
                right to bring any suit, action or proceeding against you for breach of these Terms of Service in your
                state or country of residence. You waive any and all objections to the exercise of jurisdiction over you
                by such courts and to venue in such courts.
              </p>
            </Section>

            {/* 25 */}
            <Section title="25. Disputes: Arbitration Agreement, and Class Waiver.">
              <p className="font-semibold text-black">
                Please read this section carefully. Except as the Terms otherwise provide, you waive your rights to try
                any claim in court before a judge or jury and to bring or participate in any class, collective, or other
                representative action.
              </p>

              <SubHeading>25.1 Agreement to Binding Arbitration.</SubHeading>
              <p>
                Before initiating arbitration, you acknowledge and agree that you will first give us an opportunity to
                resolve your problem or dispute. This includes sending a written description of your problem or dispute
                to us including, but not limited to, information or representations related to our products and upon
                which you rely. You may seek to resolve any customer concerns through our Customer Care Team at
                888-238-4527 or send the written description by U.S. Mail to Customer Care: 7400 Safelite Way, Columbus,
                Ohio 43235, or send electronic mail to{" "}
                <a href="mailto:customer.care@safelite.com" className={linkClass}>
                  customer.care@safelite.com
                </a>
                . You agree to negotiate with us in good faith about your problem or dispute. If for some reason your
                problem or dispute is not resolved to your satisfaction within 30 days after our receipt of your written
                dispute, you agree to the dispute resolution provisions below.
              </p>
              <p>
                By agreeing to the Terms, you agree that you are required to resolve any claim that you may have against
                the Site or our Services on an individual basis in arbitration. You and we agree that any disputes
                between us (including any disputes between you and a third-party agent of Safelite) will be resolved
                through binding and final arbitration and not in a court, except that you may assert claims in small
                claims court if your claims qualify. This includes, but is not limited to, (a) any dispute, claims, or
                controversy arising out of or relating to any part of the Terms, (b) the existence, breach, termination,
                enforcement, interpretation or validity thereof; or (c) your access to or use of the Site&apos;s services
                or products at any time. Such dispute shall be submitted to the American Arbitration Association
                (“AAA”) for individual arbitration in the county of your billing address (or such other location as you
                and we mutually agree) and shall be before one arbitrator. The arbitration shall be administered by the
                AAA pursuant to its Consumer Arbitration Rules and Procedures, only as modified by this agreement.
              </p>
              <p>
                The parties agree that the arbitrator (“Arbitrator”), and not any federal, state, or local court or
                agency, shall have exclusive authority to resolve any disputes relating to the interpretation,
                applicability, enforceability, or formation of this Arbitration Agreement, including any claim that all
                or any part of this Arbitration Agreement is void or voidable. The Arbitrator shall also be responsible
                for determining all threshold arbitrability issues, including issues relating to whether the Terms are
                unconscionable or illusory and any defense to arbitration, including waiver, delay, laches, or estoppel.
              </p>
              <p>
                By agreeing to individual arbitration, you understand and agree that you are waiving your right to
                maintain other available resolution processes, such as a court action or administrative proceeding, to
                settle any disputes or claims. The rules in arbitration are different. There is no judge or jury.
                Although review is limited, an arbitrator can award on an individual basis the same damages and relief
                as would be available in court, and must enforce the same limitations stated in these Terms as a court
                would.
              </p>
              <p>
                Notwithstanding the foregoing, either party may bring an individual action in small claims court and the
                right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the
                actual or threatened infringement, misappropriation, or violation of a party&apos;s copyright rights,
                trademarks, trade secrets, patents or other intellectual property rights.
              </p>

              <SubHeading>25.2 No Class Action.</SubHeading>
              <p>
                You and we each agree that any dispute resolution proceedings will be conducted only on an individual
                basis and not in a class, consolidated, or representative action. This means that you and we each agree
                to arbitrate in our individual capacities only, not as a representative of a class, a member of a class,
                or a Private Attorney General. Likewise, an arbitrator may not consolidate more than one person&apos;s
                claims and may not otherwise preside over any form of a representative or class proceeding.
              </p>

              <SubHeading>25.3 Rules and Governing Law.</SubHeading>
              <p>
                The arbitration will be administered by the AAA in accordance with the Consumer Arbitration Rules then
                in effect, except as modified by this Arbitration Agreement. The AAA Rules are available at{" "}
                <a
                  href="https://www.adr.org/sites/default/files/Consumer_Rules_Web_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} break-all`}
                >
                  https://www.adr.org/sites/default/files/Consumer_Rules_Web_1.pdf
                </a>
                . The rules of the arbitral forum will govern all aspects of this arbitration, except to the extent
                those rules conflict with these Terms.
              </p>

              <SubHeading>25.4 Federal Arbitration Act.</SubHeading>
              <p>
                Notwithstanding any choice of law or other provision in the Terms, the parties agree and acknowledge
                that this Arbitration Agreement evidences a transaction involving interstate commerce and that the
                Federal Arbitration Act, 9 U.S.C. § 1 et seq. (“FAA”), will govern its interpretation and enforcement
                and proceedings pursuant thereto. It is the intent of the parties that the FAA and AAA Rules shall
                preempt all state laws to the fullest extent permitted by law. If the FAA and AAA Rules are found to not
                apply to any issue that arises under this Arbitration Agreement or the enforcement thereof, then that
                issue shall be resolved under the laws of the state of Ohio, without regard to its conflict of laws
                provisions.
              </p>

              <SubHeading>25.5 Arbitration Process.</SubHeading>
              <p>
                To begin an arbitration proceeding, after satisfying the condition precedent identified above, you must
                (1) send a verified and personally signed demand for arbitration that describes (a) the nature and basis
                of your claims, and (b) the nature and basis of the relief sought, including a detailed calculation to:
                Safelite Legal Department, 7400 Safelite Way, Columbus, Ohio 43235, and (2) contact the AAA and follow
                the appropriate procedures with the AAA to commence the arbitration. The AAA consumer rules for
                arbitration will apply as modified by this Dispute Resolution section. Payment of all filing,
                administration and arbitrator fees will be governed by the AAA&apos;s applicable Consumer Rules. The
                parties shall be responsible for their own attorneys&apos; fees and costs in arbitration, unless they
                are authorized by law or the arbitrator determines that a claim was frivolous or brought for an improper
                purpose or in bad faith. In addition, the provisions of Federal Rule of Civil Procedure 68 shall apply
                and be enforced by the arbitrator. The arbitration may be conducted by telephone, based on written
                submissions, or in person in the county where you live or at another mutually agreed location as set
                forth in the AAA rules. If requested, you shall personally appear (with your counsel if you have one) at
                an initial telephone conference with a case manager before an arbitrator is appointed. Notwithstanding
                anything to the contrary, Safelite will pay all fees and costs that we are required by law to pay.
              </p>
              <p>
                Unless you and we agree otherwise in writing, in the event that any provision of this section is found
                not to apply to you or to a particular claim or dispute as a result of a decision by the arbitrator or a
                court order, any claim or dispute that has arisen or may arise between you and us must be resolved
                exclusively by a state or federal court located in Columbus, Ohio. You and we will submit to the
                personal jurisdiction of the courts located within Columbus, Ohio for the purpose of litigating all such
                claims or disputes.
              </p>

              <SubHeading>25.6 Arbitrator&apos;s Decision.</SubHeading>
              <p>
                The arbitrator will decide the substance of all claims exclusively in accordance with the laws of the
                State of Ohio, including recognized principles of equity, and will honor all claims of privilege
                recognized by law. The arbitrator will not be bound by rulings in prior arbitrations involving our other
                users, but is bound by rulings in prior arbitrations involving the same user to the extent required by
                applicable law.
              </p>
              <p>
                Regardless of the manner in which the arbitration is conducted, the arbitrator shall issue a reasoned
                written decision sufficient to explain the essential findings of fact and conclusions of law on which
                the award is based. Judgment on the award may be entered in any court having competent jurisdiction.
                This clause shall not preclude the parties from seeking provisional remedies in aid of arbitration from
                a court of competent jurisdiction. An arbitrator&apos;s decision shall be final and binding on all
                parties.
              </p>
              <p>
                Judgment on any award rendered by the arbitrator is final, binding and conclusive on you and us and your
                and our respective administrators, executors, legal representatives, successors and assigns.
              </p>
              <p>
                With the exception of disclosures to affiliates and legal counsel, all negotiations and arbitration
                proceedings related to a dispute (including a settlement, award, or the documents and briefs exchanged
                or produced during arbitration) are confidential and may not be disclosed by the parties except to the
                extent necessary for interim measures or conservatory relief, the enforcement of an arbitration award,
                or as required by law.
              </p>

              <SubHeading>25.7 Opt-Out Procedure Applicable To All Consumers.</SubHeading>
              <p>
                You can decline this agreement to arbitrate by emailing us at{" "}
                <a href="mailto:Legal@Safelite.com" className={linkClass}>
                  Legal@Safelite.com
                </a>{" "}
                providing the requested information as follows: (1) Your Name; (2) the URL of the Terms; (3) Your
                Address; (4) Your Phone Number; (5) and clear statement that you wish to opt out of this arbitration
                provision in the Terms. The Opt-Out Notice must be emailed no later than 30 days after the date you
                first accept these Terms.
              </p>
            </Section>

            {/* 26 */}
            <Section title="26. Limitation on Time to File Claims">
              <p>
                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF SERVICE OR THE
                SERVICES MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE
                OF ACTION OR CLAIM IS PERMANENTLY BARRED.
              </p>
              <p>
                If any provision of these Terms of Service is held by a court or other tribunal of competent
                jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated
                or limited to the minimum extent such that the remaining provisions of the Terms of Service will
                continue in full force and effect. So, for example, if a provision in these terms is found to be
                unenforceable, we agree an arbitrator (or, if permitted, a court) shall only strike that provision and
                that the remaining terms of these Terms of Service shall remain in force.
              </p>
            </Section>

            {/* 27 */}
            <Section title="27. No Assignment; Waiver and Severability">
              <p>
                You may not assign these Terms of Service without Safelite&apos;s prior written consent and any
                purported assignment in violation of these Terms of Service shall be void.
              </p>
              <p>
                No waiver of or by Safelite of any term or condition set forth in these Terms of Service shall be deemed
                a further or continuing waiver of such term or condition or a waiver of any other term or condition, and
                any failure of Safelite to assert a right or provision under these Terms of Service shall not constitute
                a waiver of such right or provision.
              </p>
              <p>
                If any portion of these Terms are found to be unenforceable or unlawful for any reason, (1) the
                unenforceable or unlawful provision shall be severed; (2) severance of the unenforceable or unlawful
                provision shall have no impact whatsoever on the remainder of the Arbitration Agreement or the
                parties&apos; ability to compel arbitration of any remaining claims on an individual basis pursuant to
                the Arbitration Agreement; and (3) to the extent that any claims must therefore proceed on a class,
                collective, consolidated, or representative basis, such claims must be litigated in a civil court of
                competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims
                shall be stayed pending the outcome of any individual claims in arbitration.
              </p>
            </Section>

            {/* 28 */}
            <Section title="28. Entire Agreement">
              <p>
                The Terms of Service (including our Privacy Policy and any other Additional Terms incorporated by
                reference) constitute the sole and entire agreement between you and Safelite with respect to the
                Services and supersede all prior and contemporaneous understandings, agreements, representations and
                warranties, both written and oral, with respect to the Services.
              </p>
            </Section>

            {/* 29 */}
            <Section title="29. Notices to You">
              <p>
                We may provide notice to you either by posting on our Website, sending a general notice to you through
                the Services, notifying you by email, or by sending you notice through first-class or regular mail.
                Unless our notice to you states otherwise, such notices shall be deemed to have been given (a)
                twenty-four (24) hours after such notice is posted on our website, sent by email, or sent through the
                Services, or (b) forty-eight (48) hours after mailed (if sent by first class regular mail).
              </p>
            </Section>

            {/* 30 */}
            <Section title="30. Notices to Us and Your Comments and Concerns">
              <p>
                All legal notices to Safelite should be sent by certified or registered mail, return receipt requested,
                postage prepaid to the following address Safelite Group, Inc., Attn. Customer Care, 7400 Safelite Way,
                Columbus, Ohio 43235, with a copy to Safelite Legal Dept. at the same address. Such notice shall be
                effective upon receipt by us. All notices of copyright infringement claims should be sent to the
                copyright agent designated in our Copyright Policy in Section 14 above. All other feedback, comments,
                requests for customer or technical support, and other communications relating to the Services should be
                directed to Safelite at{" "}
                <a href="mailto:onlinehelp@safelite.com" className={linkClass}>
                  onlinehelp@safelite.com
                </a>
                .
              </p>
              <p>
                Use of the Safelite® Web Sites (hereinafter the &quot;Web Sites&quot;) is subject to the following
                terms and conditions. By using the Web Sites you agree to be bound by the terms and conditions
                presented herein. Should you disagree with any of the terms and conditions, your sole recourse is to
                discontinue use of the Web Sites.
              </p>
              <p>
                To improve our ability to serve you, we may make modifications, improvements, deletions, or amendments
                to the Web Sites at any time we deem appropriate. Any and all relevant portions of these Terms of
                Service will automatically apply to all such modifications, improvements, deletions, and/or amendments
                as they appear on the Web Sites.
              </p>
              <p>
                Safelite may use Transcripts, Surveys and Recordings for purposes of performing or delivering a service
                to you, providing maintenance or support services to you, for training and quality assurance purposes,
                for purposes of improving our services and for other lawful purposes.
              </p>
              <p>
                Safelite Group, Inc. is the owner and/or authorized user of any trademark, registered trademark and/or
                service mark appearing on the Web Sites and is the copyright owner or licensee of the content and/or
                information on the Web Sites, including but not limited to any screens appearing on the Web Sites. By
                placing them on the Web Sites, Safelite® does not grant any license or other authorization to copy or
                use its trademarks, registered trademarks, service marks, copyrightable material, or other intellectual
                property, except as provided herein. Various products or services described on the Web Sites may carry
                registered or other trademarked symbols that are the sole property of their respective owners. You may
                view, print, and download portions of the content and/or information on the Web Sites solely for your
                personal use or records. Safelite® reserves the right to revoke this authorization at any time.
                Reproduction, copying, or redistribution of materials on the Web Sites for commercial purposes is
                strictly prohibited without the express written permission of Safelite®.
              </p>
              <p>
                The Web Sites, their contents, and any links provided, are done so &quot;as is&quot;. Safelite®
                disclaims all warranties, express or implied, including but not limited to the warranties of
                non-infringement, title, merchantability and fitness for particular purpose. You assume complete
                responsibility and you use the Web Sites at your own risk. Neither Safelite® nor any of its affiliate,
                parent company, subsidiaries, officer, directors, employees, partners, agents or representatives shall
                be liable to you or any third party for any compensatory, direct, indirect, incidental, special,
                exemplary, punitive, or consequential damages or attorney&apos;s fees, arising out of your use of the
                Web Sites or your inability to gain access to our Web Sites, or out of any breach of warranty of any
                kind, even if we have been advised of the possibility of such damages or such damages were foreseeable.
                Evox Images Copyright 2018- All Rights Reserved. The automotive images contained herein are owned by
                Evox Images and are protected under United States and international copyright law. Any unauthorized
                use, reproduction or distribution of these images is strictly prohibited.
              </p>
            </Section>

            {/* 31 */}
            <Section title="31. Website Accessibility">
              <p>
                Safelite is committed to ensuring that our website is accessible to everyone. To make the use of our
                websites a positive experience, we endeavor to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.0 A/AA. We continuously seek to enhance our website, and increase the accessibility of our
                digital content, for all of our customers. If you have an accessibility-related question or comment, or
                if you are having difficulty accessing information on this website, please{" "}
                <Link href="/contact-us" className={linkClass}>
                  contact us
                </Link>{" "}
                so that we can provide you with the information you need through alternative means.
              </p>
            </Section>
          </div>
        </div>
      </main>

      {/* Don't Wait CTA */}
      <DontWaitCta />

      {/* Footer */}
      <SiteFooter />
    </>
  );
}