"use client";

import React from "react";

const collectItems = [
    { icon: "ti-user", label: "Full name" },
    { icon: "ti-mail", label: "Email address" },
    { icon: "ti-phone", label: "Phone number" },
    { icon: "ti-map-pin", label: "Billing and shipping address" },
    { icon: "ti-shopping-cart", label: "Order history and purchase records" },
    { icon: "ti-credit-card", label: "Payment transaction metadata" },
    { icon: "ti-device-mobile", label: "Device and browser information" },
    { icon: "ti-chart-bar", label: "Analytics and usage data" },
];

const usageItems = [
    { icon: "ti-package", label: "Process and fulfil customer orders" },
    { icon: "ti-truck-delivery", label: "Coordinate shipping and delivery" },
    { icon: "ti-headset", label: "Provide customer support" },
    { icon: "ti-shield-check", label: "Prevent fraud and unauthorized activity" },
    { icon: "ti-tool", label: "Improve website and app performance" },
    { icon: "ti-scale", label: "Comply with legal and tax obligations" },
];

const rightsItems = [
    { icon: "ti-eye", label: "Access your personal data" },
    { icon: "ti-edit", label: "Request corrections" },
    { icon: "ti-trash", label: "Request deletion" },
    { icon: "ti-x", label: "Withdraw consent" },
    { icon: "ti-info-circle", label: "Request information on data usage" },
];

const thirdParties = [
    {
        icon: "ti-building",
        name: "Zoho",
        desc: "Used for payment processing, customer management, and related business operations.",
    },
    {
        icon: "ti-truck-delivery",
        name: "Shipmozo",
        desc: "Used for shipping coordination, logistics tracking, and order fulfilment.",
    },
    {
        icon: "ti-chart-dots",
        name: "Google Analytics 4",
        desc: "Used for analytics, performance monitoring, and improving user experience. We do not collect Android Advertising IDs (GAID) or Android device identifiers through GA4.",
    },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase pt-6 pb-1 px-1">
            {children}
        </p>
    );
}

function Card({
    children,
    accentLeft = false,
    className = "",
}: {
    children: React.ReactNode;
    accentLeft?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden ${accentLeft ? "border-l-4 border-l-green-700" : ""
                } ${className}`}
        >
            <div className="p-5">{children}</div>
        </div>
    );
}

function CardHeading({
    icon,
    children,
}: {
    icon: string;
    children: React.ReactNode;
}) {
    return (
        <h2 className="font-semibold text-gray-900 dark:text-white text-base mb-4 flex items-center gap-2 min-w-0">
            <i
                className={`ti ${icon} text-green-700 dark:text-green-500 flex-shrink-0`}
                style={{ fontSize: 18 }}
                aria-hidden="true"
            />
            <span>{children}</span>
        </h2>
    );
}

function InfoRow({ icon, label }: { icon: string; label: string }) {
    return (
        <div className="flex items-start gap-3 py-2.5 border-b border-gray-50 dark:border-gray-800 last:border-0 min-w-0">
            <i
                className={`ti ${icon} text-green-700 dark:text-green-500 flex-shrink-0 mt-0.5`}
                style={{ fontSize: 15 }}
                aria-hidden="true"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                {label}
            </span>
        </div>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
            />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
                {/* Hero */}
                <section className="bg-green-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
                        <span className="inline-block text-xs tracking-wide text-green-300 border border-green-700 bg-green-800/50 px-3 py-1.5 rounded-full mb-4">
                            TCBT Jaivik Kisan · ताराचंद बेलजी तकनीक
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-semibold text-white mb-3">
                            Privacy Policy
                        </h1>
                        <p className="text-green-200 text-sm sm:text-base mb-1">
                            पंचमहाभूत कृषि मूल प्राकृतिक खेती
                        </p>
                        <p className="text-green-400 text-xs sm:text-sm">
                            Effective Date: 21 May 2026
                        </p>
                    </div>
                </section>

                <div className="max-w-4xl mx-auto px-3 sm:px-6 py-8 space-y-3">

                    {/* Introduction */}
                    <Card>
                        <CardHeading icon="ti-file-text">Introduction</CardHeading>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            TCBT Jaivik Kisan ("we", "our", "us"), operated by Tarachand Belji
                            Technique, respects your privacy and is committed to protecting your
                            personal information. This Privacy Policy explains how we collect,
                            use, disclose, and safeguard your information when you use our
                            website, mobile application, and e-commerce services.
                        </p>
                    </Card>

                    <SectionLabel>What we collect &amp; how we use it</SectionLabel>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Card accentLeft>
                            <CardHeading icon="ti-database">Information We Collect</CardHeading>
                            {collectItems.map((item) => (
                                <InfoRow key={item.label} icon={item.icon} label={item.label} />
                            ))}
                        </Card>

                        <Card accentLeft>
                            <CardHeading icon="ti-chart-dots">How We Use Your Data</CardHeading>
                            {usageItems.map((item) => (
                                <InfoRow key={item.label} icon={item.icon} label={item.label} />
                            ))}
                        </Card>
                    </div>

                    <SectionLabel>App permissions</SectionLabel>

                    <Card>
                        <CardHeading icon="ti-bell">App Permissions</CardHeading>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Notification Permission
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our mobile application may request notification permission to send
                                service-related updates such as order confirmations, shipping
                                updates, delivery status, customer support communication, and
                                promotional announcements where permitted. Users may disable
                                notifications anytime through device settings.
                            </p>
                        </div>
                    </Card>

                    <SectionLabel>Third-party service providers</SectionLabel>

                    <Card>
                        <CardHeading icon="ti-plug">Third-Party Service Providers</CardHeading>
                        <div className="space-y-3 mb-4">
                            {thirdParties.map((p) => (
                                <div
                                    key={p.name}
                                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <i
                                            className={`ti ${p.icon} text-green-700 dark:text-green-500`}
                                            style={{ fontSize: 15 }}
                                            aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            {p.name}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            These providers only receive information necessary to perform their
                            services and are expected to handle your data securely and in
                            accordance with applicable privacy laws.
                        </p>
                    </Card>

                    <SectionLabel>Security &amp; tracking</SectionLabel>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Card>
                            <CardHeading icon="ti-lock">Security</CardHeading>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                We implement reasonable technical and organizational safeguards to
                                protect your personal data, including:
                            </p>
                            <div className="mt-3 space-y-2">
                                {[
                                    { icon: "ti-shield-lock", text: "All data transmitted over HTTPS / TLS encryption" },
                                    { icon: "ti-key", text: "Access to personal data restricted to authorised personnel only" },
                                    { icon: "ti-credit-card-off", text: "Full card details are never stored on our servers" },
                                    { icon: "ti-server", text: "Payment processing handled by certified third-party gateways" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-2.5">
                                        <i
                                            className={`ti ${item.icon} text-green-700 dark:text-green-500 flex-shrink-0 mt-0.5`}
                                            style={{ fontSize: 14 }}
                                            aria-hidden="true"
                                        />
                                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card>
                            <CardHeading icon="ti-cookie">Cookies &amp; Analytics</CardHeading>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                We use cookies and analytics tools to maintain sessions, preserve
                                cart state, remember preferences, and analyze website and app
                                usage. We do not collect Android Advertising IDs (GAID) or other
                                persistent device identifiers for advertising purposes.
                            </p>
                        </Card>
                    </div>

                    <SectionLabel>Data retention</SectionLabel>

                    <Card>
                        <CardHeading icon="ti-archive">Data Retention</CardHeading>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            We retain order records, invoices, transaction details, customer
                            support records, and account information for as long as necessary to
                            fulfil orders, comply with tax and legal obligations, resolve
                            disputes, and maintain business operations. When data is no longer
                            required for these purposes, it is securely deleted or anonymised.
                        </p>
                    </Card>

                    <SectionLabel>Your rights</SectionLabel>

                    <Card>
                        <CardHeading icon="ti-user-check">Your Rights</CardHeading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                            {rightsItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2.5"
                                >
                                    <i
                                        className={`ti ${item.icon} text-green-700 dark:text-green-500 flex-shrink-0`}
                                        style={{ fontSize: 15 }}
                                        aria-hidden="true"
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            To request access, correction, or deletion of your data, contact us
                            at{" "}
                            <a
                                href="mailto:info@tcbtjaivikkisan.com"
                                className="text-green-700 dark:text-green-400 underline underline-offset-2"
                            >
                                info@tcbtjaivikkisan.com
                            </a>
                            . Requests are typically processed within 7–15 business days.
                        </p>
                    </Card>

                    <SectionLabel>Additional policies</SectionLabel>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Card>
                            <CardHeading icon="ti-mood-kid">Children's Privacy</CardHeading>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our services are not intended for children under 13 years of age,
                                and we do not knowingly collect personal information from children.
                                If you believe we have inadvertently collected such data, please
                                contact us immediately for deletion.
                            </p>
                        </Card>

                        <Card>
                            <CardHeading icon="ti-refresh">Policy Updates &amp; Governing Law</CardHeading>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                We may update this Privacy Policy periodically. Any changes will
                                be reflected on this page with an updated effective date. Continued
                                use of our services after changes constitutes acceptance. This
                                Privacy Policy is governed by the laws of India.
                            </p>
                        </Card>
                    </div>

                    <SectionLabel>Contact us</SectionLabel>

                    <Card>
                        <CardHeading icon="ti-mail">Contact Information</CardHeading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-2.5">
                                <div className="flex items-center gap-2.5 min-w-0">
                                    <i className="ti ti-mail text-green-700 dark:text-green-500 flex-shrink-0" style={{ fontSize: 15 }} aria-hidden="true" />
                                    <a
                                        href="mailto:info@tcbtjaivikkisan.com"
                                        className="text-sm text-green-700 dark:text-green-400 underline underline-offset-2 truncate"
                                    >
                                        info@tcbtjaivikkisan.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <i className="ti ti-phone text-green-700 dark:text-green-500 flex-shrink-0" style={{ fontSize: 15 }} aria-hidden="true" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">+91 90390 07835</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                                <div className="flex items-start gap-2.5">
                                    <i className="ti ti-map-pin text-green-700 dark:text-green-500 flex-shrink-0 mt-0.5" style={{ fontSize: 15 }} aria-hidden="true" />
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Office No. 10, 3rd Floor, Mekalsuta Co-Working Space,
                                        Wright Town Stadium, Jabalpur, Madhya Pradesh – 482002
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </>
    );
}