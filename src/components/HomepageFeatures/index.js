import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This portfolio is built using Docusaurus, a static site generator designed for technical documentation. The setup is fast, the structure is developer-friendly, and it works well with Markdown. This allows me to focus on writing clean, structured, and user-friendly documentation for my WriteTech Accelerator projects—without getting stuck in tooling complexity.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Instead of wasting time on configuration, I concentrated on what really matters: writing API docs, developer guides, and project documentation. This site showcases my ability to structure real documentation sets, like Chimoney API docs and Refract framework documentation. Each project emphasizes clarity, usability, and end-user needs—key principles of great technical writing.
      </>
    ),
  },
  {
    title: 'Powered by Open Standards',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Every project here reflects the use of open tools and modern documentation practices. From OpenAPI-generated references to docs-as-code workflow with GitHub and Markdown, this portfolio demonstrates how technical writers can contribute meaningfully to developer teams. Whether it's testing APIs, customizing documentation themes, or writing clear getting-started guides—it's all done with real-world tools.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
