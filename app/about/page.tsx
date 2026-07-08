export { aboutMetadata as metadata } from '@/lib/seo/static';
import { JsonLd } from '@/components/seo/json-ld';
import { aboutSchema } from '@/lib/seo/static';
import getStaticContent from '@/lib/db/actions/get-static-content';
import { mdToHtml } from '@/lib/content/md-to-html';
import GitHub from '@/components/icons/github';
import LinkedIn from '@/components/icons/linkedin';
import styles from './page.module.scss';

const authors = [
  {
    name: 'Alex Chen',
    role: 'Lead Systems Architect',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiRNcxFgWxQDZiiBeAdPwPRq0BFEjC9HaraFu5F1Si9DujGqMeW-dLH0aQXbS5JtuKk-wTUUPuc4no-8ERr7vHsc-g8WOPD7zFNjwt58ZPqTgDI0q2GZ-Le6wEfRMr5eTX3v6rPuZH6HioYTz3fkEYslkb0Lq5b7lq0hVzKZVVBW_NssTpKFjXEJZ0fIh40KEU_OkDL2MQTNFS44gH3em0AWTV7If_Al7XSZSpcNwvXpGMarYQ8ifHWSPSZX0-JFrs04DsVeOgaMs',
    imgAlt:
      'A professional close-up portrait of a male systems engineer with a focused expression, set against a dark, minimalist architectural background.',
    paragraphs: [
      'Alex Chen specializes in kernel-level networking and high-performance packet processing. With over fifteen years of experience contributing to the Linux networking stack, he has pioneered several eBPF-based observability tools now standard in hyperscale environments.',
      'His research focuses on reducing tail latency in distributed state machines and optimizing hardware-assisted isolation for multi-tenant cloud architectures. Alex frequently consults for Tier-1 infrastructure providers on building resilient data plane pipelines.',
    ],
  },
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Head of Cloud-Native Research',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjLdU5gc7MbngzonBY-X8ryeWCwOtq7i3gSOaSPBD5zqKAYQhC3ZK0CsDNbIhZpgZxb1lkLy_dDJ6xJlYspuEk2VHKL_7o8vnWK-U5MIT-u9icN1bxWrFna5N7m6XztybxHWkKOwRT1odVKlokXAIv74dist0X4CdhVW8eFjDgJGQ6rDufOnvpPL5kCMtCUilLZ6ZEAR0I4gJyVPD0R3esJkFh4hLwzsnLoiehUUw0mQs8BsHCRRHaAvRdwe-459cP5gOCh_0oCqw',
    imgAlt:
      'A professional studio portrait of a female computer scientist with a confident and approachable look, wearing modern business attire.',
    paragraphs: [
      'Dr. Elena Rodriguez is an expert in consensus algorithms and formal verification of distributed systems. Her work on Paxos-variant optimizations and TLA+ modeling has been instrumental in the development of next-generation globally distributed databases.',
      "She holds a PhD in Distributed Computing and spent a decade leading core infrastructure teams at several FAANG organizations. At The Developer's Signal, she translates complex cryptographic proofs and Byzantine fault tolerance theories into actionable insights for senior engineers.",
    ],
  },
  {
    name: 'Jordan Vane',
    role: 'Hardware-Software Interop Lead',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9MwqVnhA6UV8xFPcstzHlZzvbAOOv6AzWMXckKLxd1HqcM760dEpz1OUe0YTpWPRWJHlY1tIgv_lgzkcvVmnvjn8svIqFg-_FKQvRxIXCzHpSZksiChCCFp6Rz5nxzXXrtYroRlgGGIs0tcW9YNtoBGbORpvNHELRtW2WCHGAGNQKywJHGMsKBleOCDnBeoHwNDPIVCi4gkWm5ki4IETTHQ2q7POImu9UA7HJvEwW7ZSD8OUxpNLyGnil2Z5lv-y9mDlHMqcjOrg',
    imgAlt:
      'A sharp, professional headshot of a technical specialist with a slight smile, positioned against a dark textured wall.',
    paragraphs: [
      'Jordan Vane bridges the gap between silicon and software, focusing on hardware-assisted isolation and TEE (Trusted Execution Environments). His expertise in Enclave technologies and side-channel attack mitigation makes him a leading voice in secure systems design.',
      'Before joining the Signal, Jordan worked on firmware-level security for high-frequency trading platforms. He now provides technical audits and investigations into the security implications of modern CPU speculative execution features and their impact on high-level language runtimes.',
    ],
  },
];

export default async function AboutPage() {
  const content = await getStaticContent('about');

  return (
    <>
      <article className={styles.page}>
        <header className={styles.hero}>
          <span className={styles.tagline}>Deep-Dive Technical Investigations</span>
          <h1 className={styles.title}>{content.title}</h1>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: await mdToHtml(content.body) }} />
        </header>

        <section className={styles.authorsSection}>
          {authors.map((author) => (
            <article key={author.name} className={styles.authorCard}>
              <div className={styles.cardContent}>
                <div className={styles.avatarWrapper}>
                  <picture>
                    <img className={styles.avatar} src={author.img} alt={author.imgAlt} />
                  </picture>
                </div>
                <div className={styles.authorInfo}>
                  <h2 className={styles.authorName}>{author.name}</h2>
                  <p className={styles.authorRole}>{author.role}</p>
                  <div className={styles.bio}>
                    {author.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div className={styles.socialLinks}>
                    <a className={styles.socialLink} href="#" aria-label="GitHub">
                      <GitHub className="w-6 h-6" />
                    </a>
                    <a className={styles.socialLink} href="#" aria-label="LinkedIn">
                      <LinkedIn className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </article>
      <JsonLd schema={aboutSchema} />
    </>
  );
}
