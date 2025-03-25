import { Card } from "@/components/ui/card";

export default function PrivacyPolicyContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information when you use our
            meal planning and delivery services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="md:col-span-1">
            <Card className="p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-3">
                {policySections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#${section.id}`}
                      className="text-green-600 hover:underline"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Policy Sections */}
          <div className="md:col-span-3 space-y-12">
            {policySections.map((section, index) => (
              <section key={index} id={section.id} className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  {section.title}
                </h2>
                <div className="prose text-gray-600 space-y-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Policy sections data
const policySections = [
  {
    id: "information-collected",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect information to provide better services to our users. The
          types of information we collect include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> When you create an account,
            we collect your name, email address, phone number, delivery address,
            and payment information.
          </li>
          <li>
            <strong>Dietary Preferences:</strong> Information about your dietary
            restrictions, allergies, health goals, and food preferences you
            provide when setting up your meal plan.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with
            our website, including pages visited, time spent, and features used.
          </li>
          <li>
            <strong>Device Information:</strong> We may collect information
            about the devices you use to access our services, including hardware
            model, operating system, and browser type.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            To provide, maintain, and improve our meal planning and delivery
            services
          </li>
          <li>
            To personalize your meal plans based on your dietary needs and
            preferences
          </li>
          <li>
            To process your orders and deliver meals to your specified address
          </li>
          <li>
            To communicate with you about your account, orders, and our services
          </li>
          <li>
            To detect, prevent, and address technical issues or fraudulent
            activity
          </li>
          <li>To comply with legal obligations and protect our rights</li>
        </ul>
        <p className="mt-4">
          We will never sell your personal information to third parties. We may
          share information with service providers who assist us in operating
          our business, but only to the extent necessary to perform these
          services.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection & Security",
    content: (
      <>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized or unlawful
          processing and against accidental loss, destruction, or damage.
        </p>
        <p className="mt-4">
          <strong>Security measures include:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Regular security audits and vulnerability testing</li>
          <li>Access controls to limit who can view personal information</li>
          <li>Secure payment processing through PCI-compliant services</li>
        </ul>
        <p className="mt-4">
          While we strive to protect your personal information, no method of
          transmission over the Internet or electronic storage is 100% secure.
          We cannot guarantee absolute security but we continuously work to
          improve our protections.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain your personal information only for as long as necessary to
          provide you with our services and for legitimate business purposes
          such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Maintaining records of transactions for accounting and tax purposes
          </li>
          <li>Resolving disputes and enforcing our agreements</li>
          <li>Complying with legal obligations</li>
        </ul>
        <p className="mt-4">
          Typically, we retain account information for 3 years after account
          closure unless a longer retention period is required by law.
          Transaction records are kept for 7 years for tax purposes.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: (
      <>
        <p>
          You have certain rights regarding your personal information,
          including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Access:</strong> You can request a copy of the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> You can update or correct inaccurate
            information in your account settings or by contacting us.
          </li>
          <li>
            <strong>Deletion:</strong> You may request deletion of your personal
            information, subject to certain legal exceptions.
          </li>
          <li>
            <strong>Opt-out:</strong> You can opt out of marketing
            communications at any time.
          </li>
          <li>
            <strong>Restriction:</strong> You may request we restrict processing
            of your information in certain circumstances.
          </li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us through your account
          settings or our customer support channels. We may need to verify your
          identity before processing certain requests.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: (
      <>
        <p>We use cookies and similar tracking technologies to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remember your preferences and account settings</li>
          <li>Analyze how our services are used to improve performance</li>
          <li>
            Deliver targeted advertising (with your consent where required)
          </li>
          <li>Prevent fraudulent activity</li>
        </ul>
        <p className="mt-4">
          You can control cookies through your browser settings. Disabling
          certain cookies may affect the functionality of our website.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of significant changes by posting the new policy on our website
          with an updated effective date, and in some cases, we may provide
          additional notice (such as sending you an email notification).
        </p>
        <p className="mt-4">
          We encourage you to review this policy periodically to stay informed
          about how we protect your information.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us at:
        </p>
        <p className="mt-4">
          <strong>Email:</strong> bitebox@gmail.com
          <br />
          <strong>Phone:</strong> (+88) 123-4567
          <br />
          <strong>Address:</strong> 123 Nutrition Lane, Dhaka , Bangladesh
        </p>
        <p className="mt-4">
          Our Data Protection Officer can be reached at
          dpo@mealplan.example.com.
        </p>
      </>
    ),
  },
];
