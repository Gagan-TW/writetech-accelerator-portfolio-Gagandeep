import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This documentation site is built with Docusaurus, making it quick to set up and simple to maintain. You can focus on writing clear guides and API references without worrying about complex tooling.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Our site highlights the JSONPlaceholder API through clean, organized examples. Instead of spending time configuring a documentation system, you can dive straight into exploring endpoints, learning usage patterns, and testing requests.
      </>
    ),
  },
  {
    title: 'Powered by Open Standards',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The docs showcase real API calls, responses, and usage with tools like curl and JavaScript fetch. Everything is designed to help developers and technical writers quickly understand how to integrate JSONPlaceholder into their testing or learning workflow.
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
