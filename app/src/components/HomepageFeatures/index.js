import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Course Registration',
    Svg: require('@site/static/img/cpp-1.svg').default,
    description: (
      <>
        <a href='https://forms.gle/4MXcVLpkA9TSyRY47' target='_blank'>
          Register the Course Here
        </a>
      </>
    ),
  },
  {
    title: 'Lab Submission System',
    Svg: require('@site/static/img/cpp-2.svg').default,
    description: (
      <>
        <a href='https://drive.google.com/drive/folders/1silDVP7Z55dfJAKSFBnQ1wiKWAi9dYay?usp=sharing' target='_blank'>
          Submit your Labs Here
        </a>
      </>
    ),
  },
  {
    title: 'Grade System',
    Svg: require('@site/static/img/cpp-3.svg').default,
    description: (
      <>
       <a href='https://docs.google.com/spreadsheets/d/1IjghvXj37PrUnKdjiF5KarQ-1cNzAggvXMnr-Gxyu_k/edit?usp=sharing' target='_blank'>
          Check your Lab Scores Here
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
