import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Day 1',
    Svg: require('@site/static/img/cpp-1.svg').default,
    description: (
      <>
        <p>
          Introduction and Prepartion with Lab Setup
        <a href='https://github.com/federico-busato/Modern-CPP-Programming/blob/master/01.Introduction.pdf' target='_blank'>
          Introduction
        </a> and 
         <a href='https://github.com/federico-busato/Modern-CPP-Programming/blob/master/02.Preparation.pdf' target='_blank'>
          Preparation
        </a>
        </p>
      </>
    ),
  },
  {
    title: 'Day 2',
    Svg: require('@site/static/img/cpp-2.svg').default,
    description: (
      <>
        <a href='#' target='_blank'>
          Coming Soon
        </a>
      </>
    ),
  },
  {
    title: 'Day 3',
    Svg: require('@site/static/img/cpp-3.svg').default,
    description: (
      <>
       <a href='#' target='_blank'>
          Coming Soon
        </a>
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
